<template>
  <div class="row">
    <div class="col-md-10 col-sm-12 offset-md-1">
      <h2>Welcome to the LRF Tools Page</h2>
      <h4>Please select a tool</h4>
      <div class="q-pa-md row items-start q-gutter-md">
        <template
          v-for="link in essentialLinks"
          :key="link['title']"
          v-bind="link"
        >
          <router-link
            :to="link['link']"
            style="text-decoration: none; color: inherit"
          >
            <q-card v-if="link['title'] !== 'Homepage'">
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">{{ link['title'] }}</div>
                <div class="text-subtitle2">{{ link['caption'] }}</div>
              </q-card-section>
            </q-card>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import essentialLinks from '@/assets/json/links.json'
</script>
