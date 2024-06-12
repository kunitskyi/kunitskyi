import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
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
  @Output() private changeViewEvent = new EventEmitter<FeatureView>();

  @ViewChild('ear') private earRef!: ElementRef;

  @Input({ required: true }) public featureView!: FeatureView;
  @Input({ required: true }) public isViewChangeTriggered = false;

  private hoverObservable!: Observable<MouseEvent>;
  private hoverSubscription!: Subscription;
  protected get FeatureView() {
    return FeatureView;
  }

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.hoverObservable = fromEvent<MouseEvent>(
      this.earRef.nativeElement,
      'mousemove',
    );

    this.hoverSubscription = this.hoverObservable.subscribe((e) => {
      const relationship: number = e.layerX / e.layerY;

      let cordX: number = e.layerX;
      let cordY: number = e.layerY;

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

  startViewChange(): void {
    this.isViewChangeTriggered = true;
    this.changeView();
  }

  changeView(): void {
    this.changeViewEvent.emit(
      this.featureView !== FeatureView.Page
        ? FeatureView.Page
        : FeatureView.Code,
    );
  }
}
