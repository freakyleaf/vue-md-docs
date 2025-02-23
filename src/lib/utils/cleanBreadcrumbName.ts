import { TEXT_API } from '@/lib/text';

export default function cleanBreadcrumbName(name: string) {
  if (!name) return '';

  return name
    .replace(/[-]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .replace(/Api/g, TEXT_API);
}
