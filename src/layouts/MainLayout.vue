<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-blue text-white text-center" style="z-index: 1000">
        <q-btn
          flat
          dense
          round
          class="lt-md"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none" class="text-white">
            LRF Tools
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      bordered
      class="bg-grey-3"
    >
      <essential-link-list />
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLinkList from '@/components/EssentialLinkList.vue'

let leftDrawerOpen = $ref(false)
let miniState = $ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen = !leftDrawerOpen
}
</script>
