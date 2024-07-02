import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkbenchView } from '@app/features/code/types';

@Component({
  selector: 'kun-workbench-tab',
  standalone: true,
  imports: [],
  templateUrl: './workbench-tab.component.html',
  styleUrl: './workbench-tab.component.scss',
})
export class WorkbenchTabComponent {
  @Output() changeTabEvent = new EventEmitter<WorkbenchView>();
  @Input({ required: true }) public name!: string;
  @Input({ required: true }) public view!: WorkbenchView;
  @Input({ required: true }) public isActive!: boolean;

  protected buttonTriggered() {
    if (!this.isActive) this.changeTabEvent.emit(this.view);
  }
}
