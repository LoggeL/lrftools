<template>
  <q-item
    clickable
    tag="a"
    :target="target"
    :to="link"
    :class="hightlight ? 'bg-orange-3' : ''"
    v-if="!disabled"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="hightlight ? 'text-bold' : ''">{{
        title
      }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  caption: String,
  link: String,
  target: String,
  hightlight: Boolean,
  disabled: Boolean,
})
</script>
