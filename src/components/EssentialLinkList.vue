<template>
  <q-list>
    <EssentialLink
      v-for="link in essentialLinks"
      :key="link['title']"
      v-bind="link"
    />
  </q-list>
</template>

<script setup>
import EssentialLink from '@/components/EssentialLink.vue'
import essentialLinks from '@/assets/json/links.json'
</script>
