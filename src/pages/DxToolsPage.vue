<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle';

import { TEXT_TOOLS } from '@/lib/text';

usePageTitle(TEXT_TOOLS);
</script>

<template>
  <h1 class="mb-3">{{ TEXT_TOOLS }}</h1>
</template>
