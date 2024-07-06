import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  RendererStyleFlags2,
  ViewChild,
} from '@angular/core';
import {
  EditorComponent,
  NotificationsComponent,
  SidePanelComponent,
  SidebarComponent,
  StateBarComponent,
  WorkbenchComponent,
} from '@app-code/components';
import { Point } from '@app/types';
import { ResizeDirective } from '@app-code/directives';
import { AvailableWorkspaceFiles, WorkbenchView } from '@app-code/types';

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
    NotificationsComponent,
    StateBarComponent,
    ResizeDirective,
  ],
})
export class CodeIndexComponent implements AfterViewInit {
  @ViewChild('sidePanel', { read: ElementRef })
  private sidePanelRef!: ElementRef;
  @ViewChild('workbench', { read: ElementRef })
  private workbenchRef!: ElementRef;

  protected workbenchView: WorkbenchView = WorkbenchView.Problems;
  protected lastAddedFile?: AvailableWorkspaceFiles;

  protected isShown = {
    notifications: false,
    sidePanel: true,
    editor: true,
    workbench: true,
  };

  private viewSizes = {
    sidePanel: {
      width: {
        current: 0,
        min: 0,
        breakpoint: 0,
      },
    },
    workbench: {
      height: {
        current: 0,
        min: 0,
        breakpoint: 0,
      },
    },
    editor: {
      height: {
        breakpoint: 0,
      },
    },
  };

  private triggerConstant = 0;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) {}

  ngAfterViewInit(): void {
    this.triggerConstant = parseInt(
      getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
        '--g-constant',
      ),
    );

    this.viewSizes.sidePanel.width.min = parseInt(
      getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
        '--side-panel-width',
      ),
    );

    this.viewSizes.workbench.height.min = parseInt(
      getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
        '--workbench-height',
      ),
    );

    this.viewSizes.sidePanel.width.breakpoint =
      this.viewSizes.sidePanel.width.min - this.triggerConstant;

    this.viewSizes.workbench.height.breakpoint =
      this.viewSizes.workbench.height.min - this.triggerConstant;

    this.viewSizes.editor.height.breakpoint = this.triggerConstant;
  }

  protected toggleNotifications() {
    this.isShown.notifications = !this.isShown.notifications;
  }

  protected changeSidePanelWidth(point: Point) {
    this.viewSizes.sidePanel.width.current =
      point.x - this.sidePanelRef.nativeElement.offsetLeft;
    const width = this.viewSizes.sidePanel.width.current;

    this.toggleSidePanel(width >= this.viewSizes.sidePanel.width.breakpoint);
  }

  protected changeWorkbenchHeight(point: Point) {
    this.viewSizes.workbench.height.current =
      this.workbenchRef.nativeElement.offsetHeight +
      this.workbenchRef.nativeElement.offsetTop -
      point.y;
    const height = this.viewSizes.workbench.height.current;

    this.toggleWorkbench(height >= this.viewSizes.workbench.height.breakpoint);

    this.toggleEditor(this.viewSizes.editor.height.breakpoint < point.y);
  }

  protected toggleSidePanel(value: boolean) {
    this.isShown.sidePanel = value;

    const width =
      this.viewSizes.sidePanel.width.current >=
      this.viewSizes.sidePanel.width.min
        ? this.viewSizes.sidePanel.width.current
        : this.viewSizes.sidePanel.width.min;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--side-panel-computed-width',
      `${this.isShown.sidePanel ? width : 0}px`,
      RendererStyleFlags2.DashCase,
    );
  }

  protected toggleWorkbench(value: boolean) {
    this.isShown.workbench = value;

    const height =
      this.viewSizes.workbench.height.current >=
      this.viewSizes.workbench.height.min
        ? this.viewSizes.workbench.height.current
        : this.viewSizes.workbench.height.min;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--workbench-computed-height',
      `${this.isShown.workbench ? height : 0}px`,
      RendererStyleFlags2.DashCase,
    );
  }

  private toggleEditor(value: boolean) {
    this.isShown.editor = value;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--two-rows',
      `${this.isShown.editor ? 'var(--enable-editor-row)' : 'var(--disable-editor-row)'}`,
      RendererStyleFlags2.DashCase,
    );
  }

  protected toggleWorkbenchView(value: WorkbenchView) {
    this.toggleWorkbench(
      !(this.workbenchView === value && this.isShown.workbench),
    );

    this.toggleEditor(
      !(
        this.workbenchView !== value &&
        this.isShown.workbench &&
        !this.isShown.editor
      ),
    );

    this.workbenchView = value;
  }

  protected selectFile(fileName: AvailableWorkspaceFiles) {
    this.lastAddedFile = fileName;
  }
}
