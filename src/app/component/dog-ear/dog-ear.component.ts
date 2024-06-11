import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  Renderer2,
  RendererStyleFlags2,
  ViewChild,
} from '@angular/core';
import { FeatureView } from '@app/types/general-enums';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'kun-dog-ear',
  standalone: true,
  imports: [],
  templateUrl: './dog-ear.component.html',
  styleUrl: './dog-ear.component.scss',
})
export class DogEarComponent implements AfterViewInit, OnDestroy {
  @Output() changeViewEvent = new EventEmitter<FeatureView>();
  @ViewChild('ear') earRef!: ElementRef;

  hoverObservable!: Observable<MouseEvent>;
  hoverSubscription!: Subscription;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.hoverObservable = fromEvent<MouseEvent>(
      this.earRef.nativeElement,
      'mousemove',
    );

    this.hoverSubscription = this.hoverObservable.subscribe((e) => {
      const relationship = e.layerX / e.layerY;

      let cordX = e.layerX;
      let cordY = e.layerY;

      if (relationship > 2) {
        cordX = e.layerX;
        cordY = e.layerX / 2;
      } else if (relationship < 0.5) {
        cordX = e.layerY / 2;
        cordY = e.layerY;
      }

      this.renderer.setStyle(
        this.earRef.nativeElement,
        '--background-computed-path',
        `polygon(
          ${cordX}px 0,
          0 0,
          0 ${cordY}px
        )`,
        RendererStyleFlags2.DashCase,
      );

      this.renderer.setStyle(
        this.earRef.nativeElement,
        '--ear-computed-path',
        `polygon(
          ${cordX}px 0,
          0 ${cordY}px,
          ${e.layerX}px ${e.layerY}px
        )`,
        RendererStyleFlags2.DashCase,
      );
    });
  }

  ngOnDestroy(): void {
    this.hoverSubscription.unsubscribe();
  }

  changeView() {
    this.changeViewEvent.emit(FeatureView.Code);
  }
}
