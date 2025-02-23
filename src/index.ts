import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/styles/index.scss';

import App from './App.vue';

import router from './router';

const CustomTheme = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{pink.50}',
      100: '{pink.100}',
      200: '{pink.200}',
      300: '{pink.300}',
      400: '{pink.400}',
      500: '{pink.500}',
      600: '{pink.600}',
      700: '{pink.700}',
      800: '{pink.800}',
      900: '{pink.900}',
      950: '{pink.950}',
    },
  },
});

const app = createApp(App);
const head = createHead();

app.directive('ripple', Ripple);
app.use(head);
app.use(PrimeVue, {
  theme: {
    preset: CustomTheme,
  },
});
app.use(router);
app.mount('#app');
