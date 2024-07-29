import { Certificate, CertificateTag } from '@app-page/types';

const certificates: Certificate[] = [];

function add(
  id: string,
  name: string,
  date: number,
  tags: CertificateTag[],
): void {
  certificates.push({
    id,
    name: `certificates.sololearn.course.${name}`,
    issued: 'sololearn',
    date: date * 100,
    source: `/sololearn_${id}`,
    verify: `https://www.sololearn.com/certificates/${id}`,
    imgs: [`/sololearn_${id}_1.webp`],
    tags,
  });
}

add('CC-1F332OVI', 'gamedev_js', 1713268800, []);
add('CC-HBEMSNQJ', 'tech_everyone', 1714132800, []);
add('CC-ICBQNDML', 'angular_nestjs', 1713182400, []);
add('CC-WKSPL3FN', 'angular_google', 1713182400, []);
add('CC-WTBWZXI7', 'html_intro', 1713528000, []);
add('CC-X9JSE2W1', 'css_intro', 1713873600, []);
add('CT-0PCTY61K', 'csharp', 1610539200, []);
add('CT-6YJG2THL', 'sql', 1610539200, []);
add('CT-AA8TQCLA', 'html', 1500120000, []);
add('CT-AQ1YA0Z3', 'jquery', 1559736000, []);
add('CT-LHOQPHRA', 'css', 1500120000, []);
add('CT-U9ADBGPW', 'php', 1500120000, []);
add('CT-V6QX6UFX', 'javascript', 1710504000, []);

export const SOLOLEARN: Certificate[] = [...certificates];
