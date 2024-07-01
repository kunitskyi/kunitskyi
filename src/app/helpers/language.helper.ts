import { Injectable } from '@angular/core';
import { CookieService } from '@app/services';
import { TranslocoService, getBrowserLang } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class LanguageHelper {
  constructor(
    private translocoService: TranslocoService,
    private cookieService: CookieService,
  ) {}

  public setLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.cookieService.setCookie('lang', lang, 14 * 24 * 60 * 60);
  }

  public initLanguage() {
    if (this.cookieService.getCookie('lang') === 'ua') this.setLanguage('ua');
    else if (this.cookieService.getCookie('lang') === 'en')
      this.setLanguage('en');
    else if (getBrowserLang() === 'ua') this.setLanguage('ua');
    else this.setLanguage('en');
  }
}
