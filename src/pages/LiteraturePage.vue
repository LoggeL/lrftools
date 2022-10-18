<template>
  <h2>Literature Page</h2>
  <div class="q-pa-md q-gutter-sm">
    <q-file
      v-model="file"
      label="Upload Citavi Export"
      filled
      append
      style="max-width: 300px"
      @update:model-value="handleFileUpload"
      clearable
    >
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>

    <q-btn
      v-bind:disable="!file"
      :loading="progress.loading"
      :percentage="progress.percentage"
      dark-percentage
      unelevated
      color="blue"
      text-color="white"
      @click="startUpload()"
      icon="cloud_upload"
    >
      <span class="q-ml-md"> Upload </span>
    </q-btn>
  </div>
</template>

<script setup>
import { exportFile } from 'quasar'

const file = $ref(null)

// On Change
const handleFileUpload = () => {
  console.log(file)
}

const progress = $ref({ loading: false, percentage: 0 })

const startUpload = () => {
  progress.loading = true
  progress.percentage = 0

  let output = {}

  var reader = new FileReader()
  reader.readAsText(file, 'UTF-8')
  reader.onload = async (evt) => {
    console.log(evt.target.result)

    let split = evt.target.result.split('\n@')
    let categories = {}

    // Categorize the bib entries
    for (let i = 1; i < split.length; i++) {
      const category = split[i].split('{')[0]
      if (!categories[category]) categories[category] = []
      categories[category].push(split[i])
    }

    // Add category all
    categories.all = split

    // Temp test
    // categories = { misc: categories.misc }

    // Process each category
    const keys = Object.keys(categories)
    for (let i = 0; i < keys.length; i++) {
      const category = keys[i]
      const response = await fetch('http://127.0.0.1:8787/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: categories[category].join('\n@'),
          category,
        }),
      })
      const data = await response.text()
      console.log(category, 'Success:', data)
      progress.percentage = (i / keys.length) * 100

      // exportFile(`publish_${category}.mods`, data)
      output[category] = data

      // console.error('Error:', error)
      // progress.loading = false
      // progress.percentage = 0

      // progress.percentage = 100
      // progress.loading = false
    }

    progress.percentage = 100
    progress.loading = false

    for (const category in output) {
      exportFile(`publish_${category}.mods`, output[category])
    }
  }

  reader.onerror = function (evt) {
    alert('error reading file')
  }

  const interval = setInterval(() => {
    progress.percentage += 10
    if (progress.percentage >= 100) {
      clearInterval(interval)
      progress.loading = false
      progress.percentage = 0
    }
  }, 1000)
}
</script>
