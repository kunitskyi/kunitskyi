import { Component, HostBinding, Input } from '@angular/core';
import { LanguageHelper } from '@app/helpers';
import { FeatureView } from '@app/types';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'kun-change-language',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss',
})
export class ChangeLanguageComponent {
  @HostBinding('class') private get getClasses() {
    return {
      Page: this.view === FeatureView.Page,
      Code: this.view === FeatureView.Code,
    };
  }

  @Input({ required: true }) view!: FeatureView;

  protected get FeatureView() {
    return FeatureView;
  }

  constructor(
    private translocoService: TranslocoService,
    private languageHelper: LanguageHelper,
  ) {}

  protected changeLanguage(): void {
    this.languageHelper.setLanguage(
      this.translocoService.getActiveLang() === 'en' ? 'ua' : 'en',
    );
  }
}
