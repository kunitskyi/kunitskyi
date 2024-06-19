import { Directive, EventEmitter, OnDestroy, Output } from '@angular/core';
import { merge, fromEvent, Subscription, map } from 'rxjs';
import { Point } from '@app/types';

@Directive({
  selector: '[kunResize]',
  host: {
    '[class.Active]': 'isResizeActive',
    '(mousedown)': 'resizeTriggered()',
    '(touchstart)': 'resizeTriggered()',
  },
  standalone: true,
})
export class ResizeDirective implements OnDestroy {
  @Output() resizeEvent = new EventEmitter<Point>();

  private positionSubscription!: Subscription;
  private _isResizeActive = false;
  protected get isResizeActive() {
    return this._isResizeActive;
  }

  protected set isResizeActive(value: boolean) {
    this._isResizeActive = value;
  }

  protected resizeTriggered() {
    this.disableResizeTrigger();

    this.isResizeActive = true;
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

    ['mouseup', 'touchend'].forEach((event_name) => {
      document.addEventListener(
        event_name,
        () => {
          this.disableResizeTrigger();
        },
        { once: true },
      );
    });
  }

  public ngOnDestroy(): void {
    this.disableResizeTrigger();
  }

  private disableResizeTrigger() {
    this.isResizeActive = false;
    this.positionSubscription?.unsubscribe();
  }
}
