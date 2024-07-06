import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { AvailableWorkspaceFiles } from '@app-code/types';
import { FILES_METADATA } from '@app-code/constants';

@Component({
  selector: 'kun-editor-tab',
  standalone: true,
  imports: [],
  templateUrl: './editor-tab.component.html',
  styleUrl: './editor-tab.component.scss',
})
export class EditorTabComponent {
  @Output() makeActiveTabEvent = new EventEmitter<AvailableWorkspaceFiles>();
  @Output() closeTabEvent = new EventEmitter<AvailableWorkspaceFiles>();

  @HostBinding('class') private get getClasses() {
    return {
      Active: this.isActive,
    };
  }

  @Input({ required: true }) public file!: AvailableWorkspaceFiles;
  @Input() isActive = false;

  protected FILES = FILES_METADATA;

  protected makeActiveTab() {
    this.makeActiveTabEvent.emit(this.file);
  }

  protected closeTab() {
    this.closeTabEvent.emit(this.file);
  }
}
