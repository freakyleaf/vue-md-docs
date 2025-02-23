import { useHead } from '@vueuse/head';

import { TEXT_SITE_TITLE, TEXT_SITE_TITLE_DELIMINATOR } from '@/lib/text';

export function usePageTitle(title: string) {
  useHead({
    title: `${title}`,
    titleTemplate: (pageTitle?: string) =>
      `${pageTitle} ${TEXT_SITE_TITLE_DELIMINATOR} ${TEXT_SITE_TITLE}`,
  });
}
