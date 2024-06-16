import { Component } from '@angular/core';
import {
  EditorComponent,
  NotificationsComponent,
  SidePanelComponent,
  SidebarComponent,
  StateBarComponent,
  WorkbenchComponent,
} from '@app-code/component';

@Component({
  selector: 'kun-code-index',
  standalone: true,
  templateUrl: './code-index.component.html',
  styleUrl: './code-index.component.scss',
  imports: [
    SidebarComponent,
    SidePanelComponent,
    EditorComponent,
    WorkbenchComponent,
    NotificationsComponent,
    StateBarComponent,
  ],
})
export class CodeIndexComponent {
  protected isNotificationShown = false;

  protected toggleNotifications() {
    this.isNotificationShown = !this.isNotificationShown;
  }
}
