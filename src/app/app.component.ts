/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './features/page/component/index/index.component';

@Component({
  selector: 'kunitskyi',
  standalone: true,
  imports: [RouterOutlet, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kunitskyi';
}
