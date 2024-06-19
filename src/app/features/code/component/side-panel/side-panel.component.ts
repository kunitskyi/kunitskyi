import { Component, EventEmitter, Output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { AccordionComponent, FilesComponent } from './index';
import { ResizeDirective } from '../../directive';
import { Point } from '@app/types';

@Component({
  selector: 'kun-side-panel',
  standalone: true,
  imports: [TranslocoPipe, AccordionComponent, FilesComponent, ResizeDirective],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  @Output() resizeEvent = new EventEmitter<Point>();

  protected resize(point: Point) {
    this.resizeEvent.emit(point);
  }
}
