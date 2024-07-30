export type CertificateIssued = 'coursera' | 'diia' | 'itvdn' | 'sololearn';

export type CertificateTag = '';

export interface Certificate {
  id: string;
  name: string;
  issued: CertificateIssued;
  score?: number;
  date: number;
  verify: string;
  imgs: number;
  tags: CertificateTag[];
}
