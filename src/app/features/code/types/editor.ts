export type AvailableWorkspaceFiles = 'profile.js' | 'profile.php';

export type FileLineClass =
  | 'bold'
  | 'italic'
  | 'unused'
  | 'construction'
  | 'method'
  | 'constant'
  | 'property'
  | 'string'
  | 'type'
  | 'argument'
  | 'comment';

export interface FileMetaData {
  iconSrc: string;
}
