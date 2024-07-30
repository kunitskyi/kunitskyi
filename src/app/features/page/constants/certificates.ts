import { Certificate } from '@app-page/types';
import { COURSERA } from './certificates/coursera';
import { DIIA } from './certificates/diia';
import { ITVDN } from './certificates/itvdn';
import { SOLOLEARN } from './certificates/sololearn';

export const CERTIFICATES: Certificate[] = [
  ...COURSERA,
  ...DIIA,
  ...ITVDN,
  ...SOLOLEARN,
];
