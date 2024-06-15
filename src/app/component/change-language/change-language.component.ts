import { Component, HostBinding, Input } from '@angular/core';
import { FeatureView } from '@app/types';

@Component({
  selector: 'kun-change-language',
  standalone: true,
  imports: [],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss',
})
export class ChangeLanguageComponent {
  @HostBinding('class.Page') get isPageView(): boolean {
    return this.featureView === FeatureView.Page;
  }
  @HostBinding('class.Code') get isCodeView(): boolean {
    return this.featureView === FeatureView.Code;
  }

  @Input({ required: true }) featureView!: FeatureView;
  protected get FeatureView() {
    return FeatureView;
  }
}
