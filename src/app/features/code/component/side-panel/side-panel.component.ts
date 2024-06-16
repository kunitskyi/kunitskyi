import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Subscription, fromEvent, map, merge } from 'rxjs';

@Component({
  selector: 'kun-side-panel',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent implements OnDestroy {
  @Output() resizeXEvent = new EventEmitter<number>();

  private positionSubscription!: Subscription;
  protected isResizeActive = false;

  constructor(private elementRef: ElementRef) {}

  protected resizeTriggered() {
    this.disableResizeTriggeredStatus();

    this.isResizeActive = true;
    this.positionSubscription = merge(
      fromEvent<MouseEvent>(document.body, 'mousemove').pipe(
        map((e) => {
          this.resizeXEvent.emit(
            e.pageX - this.elementRef.nativeElement.offsetLeft,
          );
        }),
      ),
      fromEvent<TouchEvent>(document.body, 'touchmove').pipe(
        map((e) => {
          this.resizeXEvent.emit(
            Number(e.touches.item(0)?.pageX) -
              this.elementRef.nativeElement.offsetLeft,
          );
        }),
      ),
    ).subscribe();

    document.addEventListener(
      'mouseup',
      () => {
        this.disableResizeTriggeredStatus();
      },
      { once: true },
    );

    document.addEventListener(
      'touchend',
      () => {
        this.disableResizeTriggeredStatus();
      },
      { once: true },
    );
  }

  ngOnDestroy(): void {
    this.disableResizeTriggeredStatus();
  }

  private disableResizeTriggeredStatus() {
    this.isResizeActive = false;
    this.positionSubscription?.unsubscribe();
  }
}
