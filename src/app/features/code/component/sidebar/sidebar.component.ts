import { Component } from '@angular/core';
import { ChangeLanguageComponent } from '@app/component';

@Component({
  selector: 'kun-sidebar',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
