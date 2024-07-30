import { Certificate, CertificateTag } from '@app-page/types';

const certificates: Certificate[] = [];

function add(
  id: string,
  name: string,
  score: number,
  date: number,
  tags: CertificateTag[],
): void {
  certificates.push({
    id,
    name,
    issued: 'coursera',
    score,
    date,
    verify: `https://coursera.org/verify/${id}`,
    imgs: 1,
    tags,
  });
}

add('EVDZHHY8T88Y', 'frontend_angular', 98.21, 1710936000, []);

export const COURSERA: Certificate[] = [...certificates];
