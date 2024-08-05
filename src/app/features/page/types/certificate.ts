export enum CertificateIssued {
  Coursera = 'coursera',
  Diia = 'diia',
  ITVDN = 'itvdn',
  Sololearn = 'sololearn',
}

export enum CertificateTag {}

export interface Certificate {
  id: string;
  name: string;
  issued: CertificateIssued;
  score: number;
  date: number;
  verify: string;
  imgs: number;
  tags: Set<CertificateTag>;
}
