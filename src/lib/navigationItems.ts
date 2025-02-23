import { PATH_CHANGELOG, PATH_DOCS, PATH_HOME, PATH_TOOLS } from '@/lib/paths';
import { TEXT_CHANGELOG, TEXT_DOCS, TEXT_HOME, TEXT_TOOLS } from '@/lib/text';

export const navigationItems = [
  {
    icon: 'pi pi-home',
    label: TEXT_HOME,
    route: PATH_HOME,
  },
  {
    icon: 'pi pi-book',
    label: TEXT_DOCS,
    route: `${PATH_HOME}${PATH_DOCS}`,
  },
  {
    icon: 'pi pi-list',
    label: TEXT_CHANGELOG,
    route: `${PATH_HOME}${PATH_CHANGELOG}`,
  },
  {
    icon: 'pi pi-wrench',
    label: TEXT_TOOLS,
    route: `${PATH_HOME}${PATH_TOOLS}`,
  },
];
