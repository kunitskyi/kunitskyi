import { Component } from '@angular/core';
import { ChangeLanguageComponent } from '@app/component';
import { FeatureView } from '@app/types';

@Component({
  selector: 'kun-cover',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent {
  protected pageView: FeatureView = FeatureView.Page;
}
