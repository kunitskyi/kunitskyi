import { Component, EventEmitter, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-notifications',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  @Output() private hideNotificationsEvent = new EventEmitter<void>();

  protected hideNotifications() {
    this.hideNotificationsEvent.emit();
  }
}
