export type CertificateIssued = 'coursera' | 'diia' | 'itvdn' | 'sololearn';

export type CertificateTag = '';

export interface Certificate {
  id: string;
  name: string;
  issued: CertificateIssued;
  score?: number;
  date: number;
  source: string;
  verify: string;
  imgs: string[];
  tags: CertificateTag[];
}
