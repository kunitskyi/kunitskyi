import { AvailableWorkspaceFiles, FileLineClass } from '@app-code/types';
import { FormattedLine } from '@app/types';
import { ProfileJS, ProfilePHP } from './files';

export const FILES_CONTENT: {
  [key in AvailableWorkspaceFiles]: FormattedLine<FileLineClass[]>[];
} = {
  'profile.js': ProfileJS,
  'profile.php': ProfilePHP,
};
