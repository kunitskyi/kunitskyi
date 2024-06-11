import { Component } from '@angular/core';
import { CoverComponent } from '@app/features';

@Component({
  selector: 'kun-index',
  standalone: true,
  imports: [CoverComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {}
