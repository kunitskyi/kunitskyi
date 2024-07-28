import { Certificate } from '@app-page/types';
import { COURSERA, DIIA, ITVDN, SOLOLEARN } from './certificates/';

export const CERTIFICATES: Certificate[] = [
  ...COURSERA,
  ...DIIA,
  ...ITVDN,
  ...SOLOLEARN,
];
