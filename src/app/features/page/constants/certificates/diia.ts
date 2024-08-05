import {
  Certificate,
  CertificateIssued,
  CertificateTag,
} from '@app-page/types';

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
    issued: CertificateIssued.Diia,
    score,
    date,
    verify: `https://osvita.diia.gov.ua/certificate-check/${id}/`,
    imgs: 1,
    tags: new Set(tags),
  });
}

add('D0000123894', 'digigram_civ1', 78, 1615032000, []);
add('D0000886734', 'digigram_civ2', 73, 1686916800, []);
add('D0000886850', 'icdl', 21, 1686916800, []);

export const DIIA: Certificate[] = [...certificates];
