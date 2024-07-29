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
    name: `certificates.coursera.course.${name}`,
    issued: 'coursera',
    score,
    date: date * 100,
    source: `/coursera_${id}`,
    verify: `https://coursera.org/verify/${id}`,
    imgs: [`/coursera_${id}_1.webp`],
    tags,
  });
}

add('EVDZHHY8T88Y', 'frontend_angular', 98.21, 1710936000, []);

export const COURSERA: Certificate[] = [...certificates];
