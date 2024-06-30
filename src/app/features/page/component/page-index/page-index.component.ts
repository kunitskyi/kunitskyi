import { Component } from '@angular/core';
import { CoverComponent } from '@app-page/component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-page-index',
  standalone: true,
  imports: [CoverComponent, TranslocoPipe],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
  protected mailMe(): void {
    window.location.href = 'mailto:me@kunitskyi.pp.ua';
  }
}
