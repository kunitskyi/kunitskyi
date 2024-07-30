/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureView } from '@app/types';
import { DogEarComponent } from '@app/components';
import { CodeIndexComponent } from '@app-code/components/code-index/code-index.component';
import { PageIndexComponent } from '@app-page/components/page-index/page-index.component';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { LanguageHelper } from './helpers';

@Component({
  selector: 'kunitskyi',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    DogEarComponent,
    PageIndexComponent,
    CodeIndexComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private titleSubscriber!: Subscription;
  private langAttributeSubscriber!: Subscription;
  protected view: FeatureView = FeatureView.Page;
  protected isViewChangeTriggered = false;
  protected get FeatureView() {
    return FeatureView;
  }

  constructor(
    private translocoService: TranslocoService,
    private languageHelper: LanguageHelper,
    private titleService: Title,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.languageHelper.initLanguage();

    this.titleSubscriber = this.translocoService
      .selectTranslate('author')
      .subscribe((value) => {
        this.titleService.setTitle(value);
      });

    this.langAttributeSubscriber = this.translocoService
      .selectTranslate('langAttribute')
      .subscribe((value) => {
        this.renderer.setAttribute(document.documentElement, 'lang', value);
      });
  }

  ngOnDestroy(): void {
    this.titleSubscriber.unsubscribe();
    this.langAttributeSubscriber.unsubscribe();
  }

  protected startChangeView(e: boolean) {
    this.isViewChangeTriggered = e;
  }

  protected changeView(e: FeatureView) {
    this.isViewChangeTriggered = false;
    this.view = e;
  }
}
