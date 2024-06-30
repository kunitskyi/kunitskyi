import { Component, Input } from '@angular/core';
import { HubLink } from '@app/features/types';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-plink',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './plink.component.html',
  styleUrl: './plink.component.scss',
})
export class PlinkComponent {
  @Input({ required: true }) linkData!: HubLink;
}
