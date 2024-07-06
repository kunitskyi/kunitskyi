import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { AccordionComponent, FilesComponent } from './';
import { FILES_METADATA } from '@app-code/constants';
import { AvailableWorkspaceFiles } from '@app-code/types';

@Component({
  selector: 'kun-side-panel',
  standalone: true,
  imports: [TranslocoPipe, AccordionComponent, FilesComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Output() selectFileEvent = new EventEmitter<AvailableWorkspaceFiles>();

  @Input() isShown = true;

  protected availableFiles = {
    ...FILES_METADATA,
    [Symbol.iterator]: function* (): Generator<
      AvailableWorkspaceFiles,
      void,
      unknown
    > {
      const properties: string[] = Object.keys(this);
      for (const i of properties as AvailableWorkspaceFiles[]) {
        yield i;
      }
    },
  };

  protected selectFile(fileName: AvailableWorkspaceFiles) {
    this.selectFileEvent.emit(fileName);
  }
}
