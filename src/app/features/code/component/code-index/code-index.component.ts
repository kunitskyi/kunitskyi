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
} from '@app-code/component';
import { Point } from '@app/types';
import { ResizeDirective } from '../../directive';

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

  protected isNotificationShown = false;
  protected isSidePanelShown = true;
  protected minSidePanelWidth!: number;
  protected minWorkbenchHeight!: number;
  protected lastSidePanelSuccessfullyComputedWidth = `var(--side-panel-width)`;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) {}

  ngAfterViewInit(): void {
    this.minSidePanelWidth = parseInt(
      getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
        '--side-panel-width',
      ),
    );
    this.minWorkbenchHeight = parseInt(
      getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
        '--workbench-height',
      ),
    );
  }

  protected toggleNotifications() {
    this.isNotificationShown = !this.isNotificationShown;
  }

  protected changeSidePanelWidth(point: Point) {
    const width = point.x - this.sidePanelRef.nativeElement.offsetLeft;
    if (width >= this.minSidePanelWidth / 2) {
      // don't hide SidePanel if user cross less then half min-width
      this.lastSidePanelSuccessfullyComputedWidth =
        width > this.minSidePanelWidth
          ? `${width}px`
          : `${this.minSidePanelWidth}px`;
      // if width less then min then set kmin
      this.showSidePanel(true);
    } else this.showSidePanel(false);
  }

  protected showSidePanel(e: boolean) {
    if (e) {
      this.isSidePanelShown = true;
      this.setSidePanelWidth(`${this.lastSidePanelSuccessfullyComputedWidth}`);
    } else {
      this.isSidePanelShown = false;
      this.setSidePanelWidth(`0px`);
    }
  }

  private setSidePanelWidth(value: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--side-panel-computed-width',
      `${value}`,
      RendererStyleFlags2.DashCase,
    );
  }

  protected changeWorkbenchHeight(point: Point) {
    const height =
      this.workbenchRef.nativeElement.offsetHeight +
      this.workbenchRef.nativeElement.offsetTop -
      point.y;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      '--workbench-computed-height',
      `${height}px`,
      RendererStyleFlags2.DashCase,
    );
  }
}
