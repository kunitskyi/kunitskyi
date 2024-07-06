import { AvailableWorkspaceFiles, FileMetaData } from '@app-code/types';

export const FILES_METADATA: {
  [key in AvailableWorkspaceFiles]: FileMetaData;
} = {
  'profile.js': {
    iconSrc: '/assets/js_64x64.png',
  },
  'profile.php': {
    iconSrc: '/assets/php_64x64.png',
  },
};
