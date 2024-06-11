/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './features/page/component/index/index.component';
import { EditorComponent } from './features/code/component/editor/editor.component';
import { FeatureView } from './types/general-enums';
import { DogEarComponent } from './component/dog-ear/dog-ear.component';

@Component({
  selector: 'kunitskyi',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, IndexComponent, EditorComponent, DogEarComponent],
})
export class AppComponent {
  protected get FeatureView() {
    return FeatureView;
  }
  protected view: FeatureView = FeatureView.Page;

  protected changeView(e: FeatureView) {
    this.view = e;
  }
}
