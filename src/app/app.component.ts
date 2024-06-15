/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureView } from '@app/types';
import { DogEarComponent } from '@app/component';
import { CodeIndexComponent } from './features/code/component/code-index/code-index.component';
import { PageIndexComponent } from './features/page/component/page-index/page-index.component';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

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
  protected view: FeatureView = FeatureView.Code;
  protected isViewChangeTriggered = false;
  protected get FeatureView() {
    return FeatureView;
  }

  constructor(
    private translocoService: TranslocoService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.titleSubscriber = this.translocoService
      .selectTranslate('author')
      .subscribe((value) => this.titleService.setTitle(value));
  }

  ngOnDestroy(): void {
    this.titleSubscriber.unsubscribe();
  }

  protected startChangeView(e: boolean) {
    this.isViewChangeTriggered = e;
  }

  protected changeView(e: FeatureView) {
    this.isViewChangeTriggered = false;
    this.view = e;
  }
}
