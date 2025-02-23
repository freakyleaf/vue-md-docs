import { LOCALE_EN_GB } from '@/lib/locales';
import { TEXT_BACKSLASH } from '@/lib/text';

export default function formatDate(date: string): string {
  const dateLocale = new Date(date).toLocaleDateString(LOCALE_EN_GB);
  const [day, month, year] = dateLocale.split(TEXT_BACKSLASH);
  return `${day}.${month}.${year}`;
}
