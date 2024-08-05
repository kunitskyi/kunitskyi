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
  imgs = 2,
): void {
  certificates.push({
    id,
    name,
    issued: CertificateIssued.ITVDN,
    score,
    date,
    verify: `https://testprovider.com/ru/search-certificate/${id}/`,
    imgs,
    tags: new Set(tags),
  });
}

add('TP69655880', 'nodejs_basic', 980, 1721908800, []);
add('TP28075409', 'nodejs_basic', 1000, 1721908800, []);
add('TP54929446', 'java_basic', 1000, 1720353600, []);
add('TP87998201', 'java_basic', 1000, 1720353600, []);
add('TP29076622', 'wordpress_basic', 1000, 1719489600, []);
add('TP66565230', 'wordpress_basic', 1000, 1719489600, []);
add('TP29024818', 'project_management', 1000, 1719489600, []);
add('TP34238835', 'project_management', 1000, 1719489600, []);
add('TP08901832', 'golang', 1000, 1719489600, []);
add('TP26181321', 'golang', 1000, 1719489600, []);
add('TP67932411', 'mongodb', 1000, 1719403200, []);
add('TP98835664', 'mongodb', 1000, 1719403200, []);
add('TP05329482', 'scrum', 1000, 1719316800, []);
add('TP33404897', 'scrum', 1000, 1719316800, []);
add('TP08901067', 'qa_start', 1000, 1719230400, []);
add('TP14733704', 'qa_start', 1000, 1719230400, []);
add('TP26191448', 'jenkins', 1000, 1719230400, []);
add('TP08751822', 'jenkins', 1000, 1719230400, []);
add('TP36197949', 'uxui_basic', 1000, 1719144000, []);
add('TP93606774', 'uxui_basic', 1000, 1719144000, []);
add('TP11456150', 'asp_web2', 1000, 1718884800, []);
add('TP21702273', 'asp_web2', 1000, 1718884800, []);
add('TP87749282', 'unit_test_csharp', 1000, 1718884800, []);
add('TP11636560', 'unit_test_csharp', 1000, 1718884800, []);
add('TP46072457', 'entity_framework6', 933, 1718884800, []);
add('TP68158972', 'entity_framework6', 967, 1718884800, []);
add('TP64526853', 'csharp_universal_patterns', 1000, 1718798400, []);
add('TP25137772', 'csharp_universal_patterns', 1000, 1718798400, []);
add('TP62919832', 'entity_framework_core_basic', 980, 1718798400, []);
add('TP30562975', 'entity_framework_core_basic', 1000, 1718798400, []);
add('TP26239493', 'unit_test_php', 1000, 1718366400, []);
add('TP83029400', 'unit_test_php', 1000, 1718366400, []);
add('TP77545981', 'uxui_mobile', 1000, 1718366400, []);
add('TP61367676', 'uxui_mobile', 1000, 1718366400, []);
add('TP39800148', 'unit_test_csharp_ua', 1000, 1718280000, []);
add('TP37135073', 'unit_test_csharp_ua', 1000, 1718280000, []);
add('TP71078535', 'asp_core_advance', 1000, 1718280000, []);
add('TP85297508', 'asp_core_advance', 1000, 1718280000, []);
add('TP51130192', 'test_asp_mvc', 975, 1718193600, []);
add('TP83822669', 'test_asp_mvc', 1000, 1718193600, []);
add('TP53000574', 'uxui_start', 1000, 1718107200, []);
add('TP75700840', 'uxui_start', 1000, 1718107200, []);
add('TP78797167', 'asp_signalr', 1000, 1718107200, []);
add('TP60853564', 'asp_signalr', 1000, 1718107200, []);
add('TP25766167', 'create_asp_ui', 1000, 1718020800, []);
add('TP48281972', 'create_asp_ui', 1000, 1718020800, []);
add('TP75789598', 'csharp_universal_patterns_ua', 1000, 1718020800, []);
add('TP08059710', 'csharp_universal_patterns_ua', 1000, 1718020800, []);
add('TP78680692', 'asp_mvc_fundamentals', 1000, 1717934400, []);
add('TP84403027', 'asp_mvc_fundamentals', 1000, 1717934400, []);
add('TP18136928', 'web_test', 1000, 1717761600, []);
add('TP00997633', 'web_test', 1000, 1717761600, []);
add('TP01325530', 'magento2', 1000, 1717761600, []);
add('TP63092699', 'magento2', 1000, 1717761600, []);
add('TP97069593', 'laravel', 1000, 1717675200, []);
add('TP31963351', 'laravel', 1000, 1717675200, []);
add('TP47271409', 'unity_advanced', 1000, 1717675200, []);
add('TP97951067', 'unity_advanced', 1000, 1717675200, []);
add('TP89525449', 'unity_start_ua', 1000, 1717588800, []);
add('TP49939928', 'unity_basic', 1000, 1717502400, []);
add('TP18764663', 'unity_basic', 1000, 1717502400, []);
add('TP40829299', 'unity_start', 1000, 1717502400, []);
add('TP68682274', 'unity_start', 1000, 1717502400, []);
add('TP27823092', 'figma_store', 1000, 1717502400, []);
add('TP54751786', 'figma_store', 1000, 1717502400, []);
add('TP96961077', 'async_sharp', 1000, 1717329600, []);
add('TP58315665', 'async_sharp', 1000, 1717329600, []);
add('TP98629192', 'yii2_advanced', 1000, 1717156800, []);
add('TP90259358', 'yii2_advanced', 982, 1717156800, []);
add('TP69470215', 'yii2_basic', 1000, 1716984000, []);
add('TP24848197', 'yii2_basic', 1000, 1716984000, []);
add('TP14161499', 'symfony', 1000, 1716984000, []);
add('TP90948366', 'symfony', 1000, 1716984000, []);
add('TP92411293', 'web_grid', 1000, 1716897600, []);
add('TP62312589', 'web_grid', 1000, 1716897600, []);
add('TP10173163', 'test_web_apps', 1000, 1716897600, []);
add('TP88101332', 'test_web_apps', 1000, 1716897600, []);
add('TP14512038', 'vue_start_ua', 1000, 1716811200, []);
add('TP71094158', 'vue_start_ua', 1000, 1716811200, []);
add('TP67691544', 'design_patterns', 1000, 1716724800, []);
add('TP88649545', 'design_patterns', 1000, 1716724800, []);
add('TP19823379', 'transact_sql', 1000, 1716465600, []);
add('TP32865569', 'transact_sql', 1000, 1716465600, []);
add('TP75325885', 'sql_basic', 1000, 1716465600, []);
add('TP21386911', 'sql_basic', 1000, 1716465600, []);
add('TP96389812', 'landing_practice', 1000, 1716379200, []);
add('TP07627731', 'landing_practice', 1000, 1716379200, []);
add('TP17007666', 'vuejs', 1000, 1716292800, []);
add('TP85027236', 'vuejs', 1000, 1716292800, []);
add('TP42871251', 'html_css_advanced', 1000, 1716206400, []);
add('TP72461194', 'html_css_advanced', 1000, 1716206400, []);
add('TP27114733', 'html_css_start_ua', 1000, 1716206400, []);
add('TP40776912', 'html_css_start_ua', 975, 1716206400, []);
add('TP14114557', 'csharp_professional', 1000, 1716120000, []);
add('TP25296573', 'csharp_professional', 1000, 1716120000, []);
add('TP08707831', 'html_css_start', 1000, 1715947200, []);
add('TP91041883', 'html_css_start', 1000, 1715947200, []);
add('TP05525609', 'js_extended', 1000, 1715774400, []);
add('TP71978158', 'js_extended', 1000, 1715774400, []);
add('TP59442452', 'js_patterns', 1000, 1715774400, []);
add('TP52639741', 'js_patterns', 1000, 1715774400, []);
add('TP83429344', 'js_start_ua', 1000, 1715774400, []);
add('TP98258990', 'js_start_ua', 1000, 1715774400, []);
add('TP02974655', 'ecmascript6', 1000, 1715688000, []);
add('TP42614463', 'ecmascript6', 1000, 1715688000, []);
add('TP25038620', 'js_start', 971, 1715688000, []);
add('TP92973221', 'js_start', 1000, 1715688000, []);
add('TP86486201', 'react_advanced', 1000, 1715601600, []);
add('TP50232166', 'csharp_basic', 1000, 1715601600, []);
add('TP71524303', 'csharp_basic', 1000, 1715601600, []);
add('TP93199492', 'php_start', 1000, 1715256000, []);
add('TP87529106', 'php_start', 1000, 1715256000, []);
add('TP79925197', 'postgresql', 1000, 1715169600, []);
add('TP17088032', 'postgresql', 1000, 1715169600, []);
add('TP97597954', 'bootstrap4', 1000, 1715083200, []);
add('TP72476486', 'bootstrap4', 1000, 1715083200, []);
add('TP25489163', 'bootstrap4', 1000, 1715083200, []);
add('TP51408865', 'bootstrap4', 1000, 1715083200, []);
add('TP26539774', 'git_ua', 1000, 1714996800, []);
add('TP70297108', 'git_ua', 1000, 1714996800, []);
add('TP70464953', 'csharp8_start', 976, 1714910400, [], 4);
add('TP55974627', 'csharp8_start', 1000, 1714910400, [], 4);
add('TP94134720', 'react_native', 1000, 1714737600, []);
add('TP44247017', 'react_native', 1000, 1714737600, []);
add('TP82770285', 'react_basic', 1000, 1714651200, []);
add('TP02601503', 'react_basic', 1000, 1714651200, []);
add('TP10224994', 'html_css_basic', 1000, 1714651200, []);
add('TP64248749', 'html_css_basic', 975, 1714651200, []);
add('TP52123138', 'angular_essential', 980, 1714564800, []);
add('TP54924335', 'angular_essential', 1000, 1714564800, []);
add('TP05791461', 'php_basic', 988, 1714564800, []);
add('TP04400583', 'php_basic', 965, 1714564800, []);
add('TP80112713', 'linux_basic', 1000, 1714478400, []);
add('TP41877377', 'linux_basic', 988, 1714478400, []);
add('TP13066012', 'js_basic_2021', 1000, 1714305600, []);
add('TP28830796', 'async_js', 975, 1714305600, []);
add('TP89879777', 'async_js', 1000, 1714305600, []);
add('TP07949969', 'js_basic_2021', 1000, 1714132800, []);
add('TP87619813', 'test_angular', 1000, 1714046400, []);
add('TP47100228', 'test_angular', 1000, 1714046400, []);
add('TP85992840', 'windows_server_basic', 1000, 1714046400, []);
add('TP36371051', 'windows_server_basic', 1000, 1714046400, []);
add('TP40503252', 'react_advanced_ua', 987, 1713700800, []);
add('TP36912772', 'react_advanced_ua', 1000, 1713700800, []);
add('TP56729630', 'react_basic_ua', 1000, 1713700800, []);
add('TP04630253', 'angular_essential_ua', 980, 1713700800, []);
add('TP79025624', 'docker', 1000, 1713700800, []);
add('TP92949650', 'git', 1000, 1713700800, []);
add('TP19133041', 'git', 1000, 1713700800, []);
add('TP62425123', 'git', 1000, 1713700800, []);
add('TP69959122', 'algorithms_data_structure_new', 1000, 1713355200, []);
add('TP89516641', 'algorithms_data_structure_new', 1000, 1713355200, []);
add('TP58952485', 'react_basic_ua', 1000, 1711886400, []);
add('TP42655050', 'angular_essential_ua', 1000, 1710590400, []);
add('TP12140492', 'typescript_fundamentals', 1000, 1710504000, []);
add('TP88388026', 'typescript_fundamentals', 1000, 1710504000, []);
add('TP29009581', 'docker', 1000, 1710417600, []);
add('TP91088661', 'git', 1000, 1710331200, []);
add('TP44972376', 'typescript', 950, 1710244800, []);
add('TP33547634', 'angular_advanced', 1000, 1710244800, []);
add('TP51379391', 'angular_advanced', 1000, 1710244800, []);
add('TP12968950', 'mysql_basic', 980, 1709553600, []);
add('TP66209127', 'mysql_basic', 1000, 1709553600, []);
add('TP76788395', 'postgresql_ua', 1000, 1709294400, []);
add('TP54232464', 'postgresql_ua', 925, 1709208000, []);
add('TP79715921', 'typescript', 900, 1707480000, []);

export const ITVDN: Certificate[] = [...certificates];
