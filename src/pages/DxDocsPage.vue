<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle';

import docs from '@/lib/docs';
import { PATH_DOCS } from '@/lib/paths';
import { TEXT_DOCS } from '@/lib/text';

usePageTitle(TEXT_DOCS);
</script>

<template>
  <h1 class="mb-3">{{ TEXT_DOCS }}</h1>
  <ul class="list-reset">
    <li
      v-for="(doc, index) in docs"
      :class="{
        'box': true,
        'mb-3': index !== docs.length - 1,
      }"
      :key="doc.version"
    >
      <div class="box__header">
        <h2>
          <router-link :to="`/${PATH_DOCS}/${doc.version}`">
            {{ doc.version }}
          </router-link>
        </h2>
      </div>
      <div class="box__content">
        <ul class="list-reset">
          <li
            v-for="path in doc.paths"
            :key="path.url"
          >
            <router-link :to="`/${PATH_DOCS}/${doc.version}/${path.url}`">
              {{ path.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
