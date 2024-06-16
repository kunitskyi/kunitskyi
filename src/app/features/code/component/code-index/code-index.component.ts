import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';
import {
  EditorComponent,
  NotificationsComponent,
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
    NotificationsComponent,
    StateBarComponent,
  ],
})
export class CodeIndexComponent implements AfterViewInit {
  protected isNotificationShown = false;
  protected isSidePanelShown = true;
  protected minSidePanelWidth!: number;
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
  }

  protected toggleNotifications() {
    this.isNotificationShown = !this.isNotificationShown;
  }

  protected changeSidePanelWidth(width: number) {
    getComputedStyle(this.elementRef.nativeElement).getPropertyValue(
      '--side-panel-width',
    );

    if (width >= this.minSidePanelWidth / 2) {
      this.lastSidePanelSuccessfullyComputedWidth =
        width > this.minSidePanelWidth
          ? `${width}px`
          : `${this.minSidePanelWidth}px`;
      this.setSidePanelWidth(`${this.lastSidePanelSuccessfullyComputedWidth}`);
    } else {
      this.isSidePanelShown = false;
      this.setSidePanelWidth(`0px`);
    }
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
}
