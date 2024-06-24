import { Component, EventEmitter, Output } from '@angular/core';
import { ResizeDirective } from '../../directive';
import { Point } from '@app/types';

@Component({
  selector: 'kun-workbench',
  standalone: true,
  imports: [ResizeDirective],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss',
})
export class WorkbenchComponent {
  @Output() private resizeEvent = new EventEmitter<Point>();

  protected resize(point: Point) {
    this.resizeEvent.emit(point);
  }
}
