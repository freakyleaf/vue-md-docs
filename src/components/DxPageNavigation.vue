<script setup lang="ts">
import PrimeMenubar from 'primevue/menubar';

import { navigationItems } from '@/lib/navigationItems';
</script>

<template>
  <nav>
    <prime-menubar :model="navigationItems">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          :to="item.route"
          custom
          v-slot="{ href, navigate }"
        >
          <a
            :href="href"
            v-bind="props.action"
            v-ripple
            @click="navigate"
          >
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </prime-menubar>
  </nav>
</template>
