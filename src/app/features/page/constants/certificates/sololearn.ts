import {
  Certificate,
  CertificateIssued,
  CertificateTag,
} from '@app-page/types';

const certificates: Certificate[] = [];

function add(
  id: string,
  name: string,
  date: number,
  tags: CertificateTag[],
): void {
  certificates.push({
    id,
    name,
    issued: CertificateIssued.Sololearn,
    date,
    verify: `https://www.sololearn.com/certificates/${id}`,
    imgs: 1,
    tags: new Set(tags),
    score: 0,
  });
}

add('CC-1F332OVI', 'gamedev_js', 1713268800, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.JavaScript,
]);
add('CC-HBEMSNQJ', 'tech_everyone', 1714132800, [
  CertificateTag.General,
  CertificateTag.Theory,
]);
add('CC-ICBQNDML', 'angular_nestjs', 1713182400, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Framework,
  CertificateTag.Angular,
  CertificateTag.TypeScript,
  CertificateTag.JavaScript,
]);
add('CC-WKSPL3FN', 'angular_google', 1713182400, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Framework,
  CertificateTag.Angular,
  CertificateTag.TypeScript,
  CertificateTag.JavaScript,
]);
add('CC-WTBWZXI7', 'html_intro', 1713528000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Language,
  CertificateTag.Html,
]);
add('CC-X9JSE2W1', 'css_intro', 1713873600, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Language,
  CertificateTag.Css,
]);
add('CT-0PCTY61K', 'csharp', 1610539200, [
  CertificateTag.Web,
  CertificateTag.Backend,
  CertificateTag.Language,
  CertificateTag.Csharp,
]);
add('CT-6YJG2THL', 'sql', 1610539200, [
  CertificateTag.DataBase,
  CertificateTag.Backend,
  CertificateTag.Language,
]);
add('CT-AA8TQCLA', 'html', 1500120000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Language,
  CertificateTag.Html,
]);
add('CT-AQ1YA0Z3', 'jquery', 1559736000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.JavaScript,
]);
add('CT-LHOQPHRA', 'css', 1500120000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Language,
  CertificateTag.Css,
]);
add('CT-U9ADBGPW', 'php', 1500120000, [
  CertificateTag.Web,
  CertificateTag.Backend,
  CertificateTag.Language,
  CertificateTag.Php,
]);
add('CT-V6QX6UFX', 'javascript', 1710504000, [
  CertificateTag.Web,
  CertificateTag.Frontend,
  CertificateTag.Language,
  CertificateTag.JavaScript,
]);

export const SOLOLEARN: Certificate[] = [...certificates];
