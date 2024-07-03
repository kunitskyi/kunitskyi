import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResizeDirective } from '@app/features/code/directives';
import { WorkbenchTabComponent } from './workbench-tab/workbench-tab.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { WorkbenchView } from '@app-code/types';
import { TerminalComponent } from '@app/components/terminal/terminal.component';
import { ProblemsComponent } from './problems/problems.component';
import { FeatureView } from '@app/types';

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
  @Output() private changeTabEvent = new EventEmitter<WorkbenchView>();
  @Input() public isShown = true;
  @Input({ required: true }) public currentView!: WorkbenchView;
  protected get WorkbenchView() {
    return WorkbenchView;
  }
  protected get FeatureView() {
    return FeatureView;
  }

  protected changeTab(value: WorkbenchView) {
    this.changeTabEvent.emit(value);
  }
}
