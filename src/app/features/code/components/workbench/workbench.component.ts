import { Component, Input } from '@angular/core';
import { ResizeDirective } from '@app/features/code/directives';
import { WorkbenchTabComponent } from './workbench-tab/workbench-tab.component';

@Component({
  selector: 'kun-workbench',
  standalone: true,
  imports: [WorkbenchTabComponent, ResizeDirective],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss',
})
export class WorkbenchComponent {
  @Input() isShown = true;
}
