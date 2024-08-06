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
    issued: CertificateIssued.Coursera,
    score,
    date,
    verify: `https://coursera.org/verify/${id}`,
    imgs: 1,
    tags: new Set(tags),
  });
}

add('EVDZHHY8T88Y', 'frontend_angular', 98.21, 1710936000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Framework,
  CertificateTag.Angular,
  CertificateTag.TypeScript,
  CertificateTag.JavaScript,
  CertificateTag.Css,
  CertificateTag.Html,
]);

export const COURSERA: Certificate[] = [...certificates];
