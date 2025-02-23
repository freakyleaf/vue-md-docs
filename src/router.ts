import { createRouter, createWebHistory } from 'vue-router';

import {
  PATH_CHANGELOG,
  PATH_DOCS,
  PATH_HOME,
  PATH_NOT_FOUND,
  PATH_TOOLS,
} from '@/lib/paths';

import DxChangelogPage from '@/pages/DxChangelogPage.vue';
import DxDocsContentPage from '@/pages/DxDocsContentPage.vue';
import DxDocsPage from '@/pages/DxDocsPage.vue';
import DxDocsVersionPage from '@/pages/DxDocsVersionPage.vue';
import DxHomePage from '@/pages/DxHomePage.vue';
import DxNotFoundPage from '@/pages/DxNotFoundPage.vue';
import DxToolsPage from '@/pages/DxToolsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DxHomePage,
      path: PATH_HOME,
    },
    {
      component: DxChangelogPage,
      path: `/${PATH_CHANGELOG}`,
    },
    {
      component: DxDocsPage,
      path: `${PATH_HOME}${PATH_DOCS}`,
    },
    {
      component: DxDocsVersionPage,
      path: `${PATH_HOME}${PATH_DOCS}/:version`,
    },
    {
      component: DxDocsContentPage,
      path: `${PATH_HOME}${PATH_DOCS}/:version/:file`,
    },
    {
      component: DxToolsPage,
      path: `${PATH_HOME}${PATH_TOOLS}`,
    },
    {
      component: DxNotFoundPage,
      path: `${PATH_HOME}${PATH_NOT_FOUND}`,
    },
    {
      component: DxNotFoundPage,
      path: `${PATH_HOME}:pathMatch(.*)*`,
    },
  ],
});

export default router;
