<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import { usePageTitle } from '@/composables/usePageTitle';

import type { IMarkdownAttributes, IReleaseNotes } from '@/lib/interfaces';
import { PATH_CONTENT, PATH_DOCS, PATH_RELEASE_NOTES } from '@/lib/paths';
import { TEXT_CHANGELOG, TEXT_RELEASED } from '@/lib/text';

import docs from '@/lib/docs';
import formatDate from '@/lib/utils/formatDate';

usePageTitle(TEXT_CHANGELOG);

const currentAttributes = ref<null | IMarkdownAttributes>(null);
const currentReleaseNotes = ref<IReleaseNotes>({});

onBeforeMount(() => {
  docs.forEach((doc) => {
    const articleModule = () =>
      import(
        `@/${PATH_CONTENT}/${PATH_DOCS}/${doc.version}/${PATH_RELEASE_NOTES}.md`
      );
    articleModule().then(({ attributes, html }) => {
      currentAttributes.value = attributes;
      currentReleaseNotes.value[doc.version] = html;
    });
  });
});
</script>

<template>
  <h1 class="mb-3">{{ TEXT_CHANGELOG }}</h1>
  <template v-if="currentAttributes">
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
          <div class="flex align-items-center justify-content-between">
            <h2>
              <router-link :to="`/${PATH_DOCS}/${doc.version}`">
                {{ doc.version }}
              </router-link>
            </h2>
            <span>
              {{ TEXT_RELEASED }}
              <strong>{{
                formatDate(currentAttributes.dateReleased as string)
              }}</strong>
            </span>
          </div>
        </div>
        <div class="box__content">
          <div v-html="currentReleaseNotes[doc.version]" />
        </div>
      </li>
    </ul>
  </template>
</template>
