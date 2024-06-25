import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { merge, fromEvent, Subscription, map } from 'rxjs';
import { Point } from '@app/types';

@Directive({
  selector: '[kunResize]',
  host: {
    '(document:mouseup)': 'disableResizeTrigger()',
    '(document:touchend)': 'disableResizeTrigger()',
  },
  standalone: true,
})
export class ResizeDirective implements OnInit, OnDestroy {
  @Output() private resizeEvent = new EventEmitter<Point>();
  @Input({ required: true }) public resizeType!:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left';

  private positionSubscription!: Subscription;
  private triggerRef!: Element;

  private _isActive = false;
  private get isActive() {
    return this._isActive;
  }
  private set isActive(value: boolean) {
    this._isActive = value;
    this.updateBackground();
  }
  private _isHovered = false;
  private get isHovered() {
    return this._isHovered;
  }
  private set isHovered(value: boolean) {
    this._isHovered = value;
    this.updateBackground();
  }

  constructor(
    private renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    this.triggerRef = renderer.createElement('div');

    renderer.appendChild(elementRef.nativeElement, this.triggerRef);

    renderer.listen(this.triggerRef, 'mousedown', () => {
      this.resizeTriggered();
    });
    renderer.listen(this.triggerRef, 'touchstart', () => {
      this.resizeTriggered();
    });
    renderer.listen(this.triggerRef, 'mouseover', () => {
      this.hover(true);
    });
    renderer.listen(this.triggerRef, 'mouseleave', () => {
      this.hover(false);
    });
  }

  public ngOnInit(): void {
    let triggerStyle: Record<string, string> = {
      'z-index': '95',
      position: 'absolute',
      transition: 'background-color 0.25s',
    };
    triggerStyle[this.resizeType] = 'calc(-1 * (var(--g-resize-size) / 2))';

    if (this.resizeType === 'top' || this.resizeType === 'bottom') {
      triggerStyle = {
        ...triggerStyle,
        width: '100%',
        height: 'var(--g-resize-size)',
        cursor: 'ns-resize',
      };
    } else if (this.resizeType === 'right' || this.resizeType === 'left') {
      triggerStyle = {
        ...triggerStyle,
        width: 'var(--g-resize-size)',
        height: '100%',
        cursor: 'ew-resize',
      };
    }

    for (const key in triggerStyle) {
      this.renderer.setStyle(this.triggerRef, key, triggerStyle[key]);
    }
  }

  public ngOnDestroy(): void {
    this.disableResizeTrigger();
  }

  protected resizeTriggered(): void {
    this.disableResizeTrigger();

    this.isActive = true;

    this.positionSubscription = merge(
      fromEvent<MouseEvent>(document.body, 'mousemove'),
      fromEvent<TouchEvent>(document.body, 'touchmove'),
    )
      .pipe(
        map((e: MouseEvent | TouchEvent) => {
          const page: Point = {
            x: 0,
            y: 0,
          };
          if (e instanceof MouseEvent) {
            page.x = e.pageX;
            page.y = e.pageY;
          } else if (e instanceof TouchEvent) {
            page.x = e.touches.item(0)?.pageX || page.x;
            page.y = e.touches.item(0)?.pageY || page.y;
          }
          return this.resizeEvent.emit(page);
        }),
      )
      .subscribe();
  }

  private disableResizeTrigger(): void {
    this.isActive = false;
    this.positionSubscription?.unsubscribe();
  }

  private hover(value: boolean): void {
    this.isHovered = value;
  }

  private updateBackground(): void {
    const backgroundColor =
      this.isActive || this.isHovered ? 'var(--g-code-accent)' : 'transparent';
    this.renderer.setStyle(
      this.triggerRef,
      'background-color',
      backgroundColor,
    );
  }
}
