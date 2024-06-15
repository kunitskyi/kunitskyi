import { Component } from '@angular/core';
import { ChangeLanguageComponent } from '@app/component';
import { FeatureView } from '@app/types';

@Component({
  selector: 'kun-sidebar',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected codeView: FeatureView = FeatureView.Code;
}
