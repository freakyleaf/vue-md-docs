<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle';

import { TEXT_NOT_FOUND } from '@/lib/text';

usePageTitle(TEXT_NOT_FOUND);
</script>

<template>
  <h1 class="mb-3">{{ TEXT_NOT_FOUND }}</h1>
</template>
