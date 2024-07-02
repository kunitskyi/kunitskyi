import { Component, EventEmitter, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { WorkbenchView } from '@app-code/types';

@Component({
  selector: 'kun-state-bar',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './state-bar.component.html',
  styleUrl: './state-bar.component.scss',
})
export class StateBarComponent {
  @Output() private toggleWorkbenchEvent = new EventEmitter<WorkbenchView>();
  @Output() private toggleNotificationEvent = new EventEmitter<MouseEvent>();

  protected currentYear = new Date().getFullYear();
  protected get WorkbenchView() {
    return WorkbenchView;
  }

  protected toggleWorkbench(value: WorkbenchView) {
    this.toggleWorkbenchEvent.emit(value);
  }

  protected toggleNotifications(e: MouseEvent) {
    this.toggleNotificationEvent.emit(e);
  }
}
