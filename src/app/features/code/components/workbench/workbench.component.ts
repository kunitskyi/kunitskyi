import { Component, Input } from '@angular/core';
import { ResizeDirective } from '@app/features/code/directives';
import { WorkbenchTabComponent } from './workbench-tab/workbench-tab.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { WorkbenchView } from '@app-code/types';
import { TerminalComponent } from '@app/components/terminal/terminal.component';
import { ProblemsComponent } from './problems/problems.component';

@Component({
  selector: 'kun-workbench',
  standalone: true,
  imports: [
    WorkbenchTabComponent,
    ProblemsComponent,
    TerminalComponent,
    ResizeDirective,
    TranslocoPipe,
  ],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss',
})
export class WorkbenchComponent {
  @Input() public isShown = true;
  @Input({ required: true }) public currentView!: WorkbenchView;
  protected get WorkbenchView() {
    return WorkbenchView;
  }

  protected changeTab(value: WorkbenchView) {
    this.currentView = value;
  }
}
