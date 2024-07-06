import { Component, Input } from '@angular/core';
import { EditorTabComponent } from './editor-tab/editor-tab.component';
import { AvailableWorkspaceFiles } from '../../types';

@Component({
  selector: 'kun-editor',
  standalone: true,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  imports: [EditorTabComponent],
})
export class EditorComponent {
  @Input() public set addFile(value: AvailableWorkspaceFiles | undefined) {
    if (value !== undefined) {
      this.openFiles.add(value);
      this.activeFile = value;
    }
  }

  protected openFiles = new Set<AvailableWorkspaceFiles>();
  protected activeFile?: AvailableWorkspaceFiles;

  protected makeActiveTab(file: AvailableWorkspaceFiles) {
    this.activeFile = file;
  }

  protected closeTab(file: AvailableWorkspaceFiles) {
    this.openFiles.delete(file);

    if (this.activeFile === file)
      if (this.openFiles.size > 0) {
        this.openFiles.forEach((v1) => {
          this.activeFile = v1;
        });
      } else this.activeFile = undefined;
  }
}
