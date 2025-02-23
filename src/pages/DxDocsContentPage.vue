<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { usePageTitle } from '@/composables/usePageTitle';

import { TEXT_CREATED, TEXT_MODIFIED, TEXT_RELEASED } from '@/lib/text';
import { PATH_CONTENT, PATH_DOCS, PATH_NOT_FOUND } from '@/lib/paths';

import docs from '@/lib/docs';
import type { IMarkdownAttributes } from '@/lib/interfaces';
import formatDate from '@/lib/utils/formatDate';

const route = useRoute();
const router = useRouter();
const { file, version } = route.params;

const pageTitlePretty = docs
  .find((doc) => doc.version === version)
  ?.paths.find((path) => path.url === file)?.name as string;

usePageTitle(`${pageTitlePretty}: ${version}`);

const currentAttributes = ref<null | IMarkdownAttributes>(null);
const currentHtml = ref(null);

onBeforeMount(() => {
  const articleModule = () =>
    import(`@/${PATH_CONTENT}/${PATH_DOCS}/${version}/${file}.md`);
  articleModule()
    .then(({ attributes, html }) => {
      currentAttributes.value = attributes;
      currentHtml.value = html;
    })
    .catch(() => {
      router.replace(`/${PATH_NOT_FOUND}`);
    });
});

const showDateModified = computed(() => {
  if (!currentAttributes.value?.dateModified) return false;
  return (
    currentAttributes.value?.dateCreated !==
    currentAttributes.value?.dateModified
  );
});

const showDateReleased = computed(() => {
  return currentAttributes.value?.dateReleased;
});
</script>

<template>
  <template v-if="currentAttributes">
    <h1 class="mb-3">{{ currentAttributes.title }}</h1>
    <div class="box mb-3">
      <div class="box__content">
        <table class="custom-table">
          <tbody>
            <tr>
              <th>{{ TEXT_CREATED }}</th>
              <td>
                {{ formatDate(currentAttributes.dateCreated as string) }}
              </td>
            </tr>
            <tr v-if="showDateModified">
              <th>{{ TEXT_MODIFIED }}</th>
              <td>
                {{ formatDate(currentAttributes.dateModified as string) }}
              </td>
            </tr>
            <tr v-if="showDateReleased">
              <th>{{ TEXT_RELEASED }}</th>
              <td>
                {{ formatDate(currentAttributes.dateReleased as string) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <div v-html="currentHtml" />
</template>
