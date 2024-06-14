import { Component } from '@angular/core';
import {
  EditorComponent,
  SidePanelComponent,
  SidebarComponent,
  StateBarComponent,
  WorkbenchComponent,
} from '@app-code/component';

@Component({
  selector: 'kun-code-index',
  standalone: true,
  templateUrl: './code-index.component.html',
  styleUrl: './code-index.component.scss',
  imports: [
    SidebarComponent,
    SidePanelComponent,
    EditorComponent,
    WorkbenchComponent,
    StateBarComponent,
  ],
})
export class CodeIndexComponent {}
