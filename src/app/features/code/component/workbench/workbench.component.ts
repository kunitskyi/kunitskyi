import { Component, Input } from '@angular/core';
import { ResizeDirective } from '../../directive';

@Component({
  selector: 'kun-workbench',
  standalone: true,
  imports: [ResizeDirective],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss',
})
export class WorkbenchComponent {
  @Input() show = true;
}
