<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import { usePageTitle } from '@/composables/usePageTitle';

import docs from '@/lib/docs';

import { PATH_DOCS, PATH_NOT_FOUND } from '@/lib/paths';

const route = useRoute();
const router = useRouter();
const version = route.params.version;

usePageTitle(`${version}`);

const currentDoc = docs.find((doc) => doc.version === version);
if (!currentDoc) router.replace(`/${PATH_NOT_FOUND}`);
</script>

<template>
  <h1 class="mb-3">{{ version }}</h1>
  <div
    v-if="currentDoc"
    class="box"
  >
    <ul class="list-reset">
      <li
        v-for="path in currentDoc.paths"
        :key="path.url"
      >
        <router-link :to="`/${PATH_DOCS}/${currentDoc.version}/${path.url}`">
          {{ path.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
