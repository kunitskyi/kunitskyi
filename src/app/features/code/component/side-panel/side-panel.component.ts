import { Component, Input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { AccordionComponent, FilesComponent } from './index';

@Component({
  selector: 'kun-side-panel',
  standalone: true,
  imports: [TranslocoPipe, AccordionComponent, FilesComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Input() show = true;
}
