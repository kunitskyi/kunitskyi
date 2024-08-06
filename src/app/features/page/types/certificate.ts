export enum CertificateIssued {
  Coursera = 'coursera',
  Diia = 'diia',
  Itvdn = 'itvdn',
  Sololearn = 'sololearn',
}

export enum CertificateTag {
  General = 'general',
  Theory = 'theory',
  Web = 'web',
  Administration = 'administration',
  DataBase = 'db',
  DevOps = 'devops',
  Design = 'design',
  Management = 'management',
  Frontend = 'frontend',
  Backend = 'backend',
  Testing = 'test',
  GameDev = 'gamedev',
  Html = 'html',
  Css = 'css',
  JavaScript = 'js',
  TypeScript = 'ts',
  Php = 'php',
  Angular = 'angular',
  Rect = 'react',
  Vue = 'vue',
  Csharp = 'csharp',
  Language = 'language',
  Framework = 'framework',
}

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
