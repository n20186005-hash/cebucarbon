import { ceb } from './content-ceb';
import { fil } from './content-fil';

export type Lang = 'ceb' | 'fil';
export type { Content } from './content-ceb';

export function getContent(lang: Lang) {
  return lang === 'fil' ? fil : ceb;
}

export { ceb, fil };
