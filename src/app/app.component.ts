/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureView } from '@app/types';
import { DogEarComponent } from '@app/component';
import { CodeIndexComponent } from './features/code/component/code-index/code-index.component';
import { PageIndexComponent } from './features/page/component/page-index/page-index.component';

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
export class AppComponent {
  protected view: FeatureView = FeatureView.Page;
  protected isViewChangeTriggered = false;
  protected get FeatureView() {
    return FeatureView;
  }

  protected startChangeView(e: boolean) {
    this.isViewChangeTriggered = e;
  }

  protected changeView(e: FeatureView) {
    this.isViewChangeTriggered = false;
    this.view = e;
  }
}
