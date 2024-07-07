import { Component, Input } from '@angular/core';
import { EditorTabComponent } from './editor-tab/editor-tab.component';
import { AvailableWorkspaceFiles } from '@app-code/types';
import { FILES_CONTENT } from '@app-code/constants';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-editor',
  standalone: true,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  imports: [EditorTabComponent, TranslocoPipe],
})
export class EditorComponent {
  @Input({ required: true }) public isShown!: boolean;
  @Input() public set addFile(value: AvailableWorkspaceFiles | undefined) {
    if (value !== undefined) {
      this.openFiles.add(value);
      this.activeFile = value;
    }
  }
  protected FILES = FILES_CONTENT;
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
