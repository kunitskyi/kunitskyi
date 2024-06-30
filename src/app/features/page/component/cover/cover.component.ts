import { Component } from '@angular/core';
import { ChangeLanguageComponent } from '@app/component';
import { FeatureView } from '@app/types';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-cover',
  standalone: true,
  imports: [ChangeLanguageComponent, TranslocoPipe],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent {
  protected pageView: FeatureView = FeatureView.Page;

  protected age: number = new Date().getFullYear() - 2002;
}
