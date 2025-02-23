<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import PrimeBreadcrumb from 'primevue/breadcrumb';

import { TEXT_BACKSLASH, TEXT_COLON, TEXT_HOME } from '@/lib/text';
import cleanBreadcrumbName from '@/lib/utils/cleanBreadcrumbName';

const route = useRoute();

const breadcrumbs = computed(() => {
  const output = [
    {
      name: TEXT_HOME,
      to: TEXT_BACKSLASH,
    },
  ];

  if (route.path === TEXT_BACKSLASH) {
    return output;
  }

  route.matched.forEach((matchedRoute) => {
    const matchedRoutepath = matchedRoute.path;
    if (matchedRoutepath === TEXT_BACKSLASH) return;

    // `slice(1)` removes the empty string at the beginning of the array
    const pathElements = matchedRoutepath.split('/').slice(1);

    let path = '';

    pathElements.forEach((pathElement) => {
      if (pathElement.startsWith(TEXT_COLON)) {
        // If we have a dynamic route
        // `slice(1)` removes the colon at the beginning of the string
        const paramName = route.params[pathElement.slice(1)] as string;
        path += `${TEXT_BACKSLASH}${paramName}`;

        output.push({
          name: cleanBreadcrumbName(paramName),
          to: path,
        });
      } else {
        // If we don't have a dynamic route
        path += `${TEXT_BACKSLASH}${pathElement}`;

        output.push({
          name: cleanBreadcrumbName(pathElement),
          to: path,
        });
      }
    });
  });

  return output;
});
</script>

<template>
  <prime-breadcrumb :model="breadcrumbs">
    <template #item="{ item, props }">
      <router-link
        v-if="item.to"
        v-slot="{ href, navigate }"
        :to="item.to"
        custom
      >
        <a
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.name }}</span>
        </a>
      </router-link>
    </template>
  </prime-breadcrumb>
</template>
