<template>
  <h2>Tile Generator</h2>
  <div class="row">
    <div class="col-3 q-pa-md q-gutter-sm">
      <h4 class="q-mb-xs">Settings</h4>
      <q-file
        v-model="file"
        label="Select Source Image"
        filled
        append
        accept="image/*"
        @update:model-value="updateImage"
        clearable
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <q-input
        label="Width"
        type="number"
        filled
        v-model="maxWidth"
        dense
        @update:model-value="updateImage"
      />
      <q-input
        label="Fill Text"
        filled
        v-model="fillText"
        dense
        @update:model-value="updateImage"
      />
      <q-input
        label="Font Size"
        filled
        v-model="fontSize"
        dense
        @update:model-value="updateImage"
      />
      <q-input
        label="Color"
        filled
        v-model="color"
        dense
        @update:model-value="updateImage"
      />
      <q-input
        type="number"
        label="Opacity"
        max="100"
        min="0"
        filled
        v-model="opacity"
        dense
        @update:model-value="updateImage"
      />

      <q-btn
        v-bind:disable="!file"
        dark-percentage
        unelevated
        color="blue"
        text-color="white"
        @click="downloadImage()"
        icon="download"
      >
        <span class="q-ml-md"> Download </span>
      </q-btn>
    </div>
    <div class="col q-pa-md q-gutter-sm">
      <h4 v-show="file" class="q-mb-xs">Output</h4>
      <canvas v-show="file" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { exportFile } from 'quasar'

const file = $ref(null)
const srcUrl = $ref(null)
const canvas = $ref(null)

const fillText = $ref('LRF')
const fontSize = $ref(100)
const color = $ref('#005a8d')
const opacity = $ref(75)
const maxWidth = $ref(800)

onMounted(() => {})

const updateImage = () => {
  srcUrl = URL.createObjectURL(file)

  const ctx = canvas.getContext('2d')

  const img = new Image()
  img.onload = () => {
    console.log(img.width, img.height)
    canvas.width = maxWidth
    canvas.height = img.height * (maxWidth / img.width)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    // Mix in 75% of LRF blue
    ctx.fillStyle = color
    ctx.globalAlpha = opacity / 100
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw text
    ctx.globalAlpha = 1
    ctx.font = `bold ${fontSize}px Roboto`
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(fillText, canvas.width / 2, canvas.height / 2)
  }
  img.src = srcUrl
}

const downloadImage = () => {
  canvas.toBlob((blob) => {
    exportFile(file.name, blob)
  })
}

if (file) {
  updateImage()
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
</style>
