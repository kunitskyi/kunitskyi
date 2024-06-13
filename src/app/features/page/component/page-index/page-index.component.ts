import { Component } from '@angular/core';
import { CoverComponent } from '@app-page/component';

@Component({
  selector: 'kun-page-index',
  standalone: true,
  imports: [CoverComponent],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {}
