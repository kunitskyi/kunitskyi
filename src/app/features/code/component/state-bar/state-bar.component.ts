import { Component, EventEmitter, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-state-bar',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './state-bar.component.html',
  styleUrl: './state-bar.component.scss',
})
export class StateBarComponent {
  @Output() private toggleNotificationEvent = new EventEmitter<MouseEvent>();

  protected toggleNotifications(e: MouseEvent) {
    this.toggleNotificationEvent.emit(e);
  }
}
