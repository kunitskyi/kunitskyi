import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  RendererStyleFlags2,
  ViewChild,
} from '@angular/core';
import { FeatureView } from '@app/types';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'kun-dog-ear',
  standalone: true,
  imports: [],
  templateUrl: './dog-ear.component.html',
  styleUrl: './dog-ear.component.scss',
})
export class DogEarComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.Page') get isPageView(): boolean {
    return this.featureView === FeatureView.Page;
  }
  @HostBinding('class.Code') get isCodeView(): boolean {
    return this.featureView === FeatureView.Code;
  }

  @Output() private startChangeViewEvent = new EventEmitter<boolean>();
  @Output() private changeViewEvent = new EventEmitter<FeatureView>();

  @ViewChild('earButton') private earButton!: ElementRef;
  @ViewChild('earBackground') private earBackgroundRef!: ElementRef;
  @ViewChild('earTip') private earTipRef!: ElementRef;
  @ViewChild('content') private contentRef!: ElementRef;

  @Input({ required: true }) public featureView!: FeatureView;
  @Input({ required: true }) public isViewChangeTriggered = false;

  private iconSize!: number;
  private earDivisionLine!: {
    x: number;
    y: number;
  };
  private relativeMousePosition = {
    x: 0,
    y: 0,
  };
  protected hoverObservable!: Subject<MouseEvent>;
  private hoverSubscription!: Subscription;
  protected get FeatureView() {
    return FeatureView;
  }

  constructor(
    private renderer: Renderer2,
    private dogEarRef: ElementRef,
  ) {
    this.iconSize = Number(
      getComputedStyle(dogEarRef.nativeElement).getPropertyValue('--icon-size'),
    );
    this.earDivisionLine = {
      x: this.iconSize,
      y: this.iconSize,
    };
    this.hoverObservable = new Subject<MouseEvent>();
  }

  ngAfterViewInit(): void {
    this.hoverSubscription = this.hoverObservable.subscribe((e: MouseEvent) => {
      this.relativeMousePosition.x =
        this.featureView === FeatureView.Page
          ? e.layerX
          : this.earButton.nativeElement.offsetHeight - e.layerX; // invert X pos for FeatureView.Code
      this.relativeMousePosition.y = e.layerY;
      this.earDivisionLine.x =
        this.featureView === FeatureView.Page
          ? e.layerX
          : this.relativeMousePosition.x; // use invert X pos for FeatureView.Code
      this.earDivisionLine.y = e.layerY;

      const relationship: number =
        this.relativeMousePosition.x / this.relativeMousePosition.y;

      if (relationship > 2) {
        this.earDivisionLine.y = this.earDivisionLine.x / 2;
      } else if (relationship < 0.5) {
        this.earDivisionLine.x = this.earDivisionLine.y / 2;
      }

      this.renderer.setStyle(
        this.dogEarRef.nativeElement,
        '--earBackground-computed-path',
        `polygon(
          0 0,
          ${this.earDivisionLine.x}px 0,
          0 ${this.earDivisionLine.y}px,
          0 ${this.earDivisionLine.y}px
        )`,
        RendererStyleFlags2.DashCase,
      );

      this.renderer.setStyle(
        this.dogEarRef.nativeElement,
        '--earTip-computed-path',
        `polygon(
          ${this.earDivisionLine.x}px 0,
          ${this.relativeMousePosition.x}px ${this.relativeMousePosition.y}px,
          0 ${this.earDivisionLine.y}px,
          0 ${this.earDivisionLine.y}px
        )`,
        RendererStyleFlags2.DashCase,
      );

      this.renderer.setStyle(
        this.dogEarRef.nativeElement,
        '--content-computed-path',
        `polygon(
          ${this.earDivisionLine.x}px 0,
          100% 0,
          100% 100%,
          0 100%,
          0 ${this.earDivisionLine.y}px
        )`,
        RendererStyleFlags2.DashCase,
      );
    });
  }

  ngOnDestroy(): void {
    this.hoverSubscription.unsubscribe();
  }

  startViewChange(e: MouseEvent): void {
    const timeInMS = 1000;

    const anglePointPosition =
      e.layerX === 0 && e.layerY === 0 // in case if button pressed from keyboard
        ? { x: this.iconSize, y: this.iconSize }
        : { x: e.layerX, y: e.layerY };

    this.isViewChangeTriggered = true;
    this.startChangeViewEvent.emit(this.isViewChangeTriggered);

    this.earBackgroundRef.nativeElement.animate(
      [
        {
          opacity: 1,
          clipPath: `polygon(
            0 0,
            ${this.earDivisionLine.x}px 0,
            0 ${this.earDivisionLine.y}px,
            0 ${this.earDivisionLine.y}px
          )`,
        },
        {
          clipPath: `polygon(
            0 0,
            10% 0,
            0 100%,
            0 100%
          )`,
        },
        {
          opacity: 0,
          clipPath: `polygon(
            0 0,
            110% 0,
            100% 100%,
            0 100%
          )`,
        },
      ],
      {
        duration: timeInMS,
      },
    );

    this.earTipRef.nativeElement.animate(
      [
        {
          clipPath: `polygon(
            0 ${this.earDivisionLine.y}px,
            ${this.earDivisionLine.x}px 0,
            ${anglePointPosition.x}px ${anglePointPosition.y}px,
            0 ${this.earDivisionLine.y}px
          )`,
        },
        {
          clipPath: `polygon(
            0 100%,
            10% 0,
            30% 0,
            0 100%
          )`,
        },
        {
          clipPath: `polygon(
            100% 100%,
            110% 0,
            130% 0,
            120% 100%
          )`,
        },
      ],
      {
        duration: timeInMS,
      },
    );

    this.contentRef.nativeElement.animate(
      [
        {
          clipPath: `polygon(
            ${this.earDivisionLine.x}px 0,
            100% 0,
            100% 100%,
            0 100%,
            0 ${this.earDivisionLine.y}px
          )`,
        },
        {
          clipPath: `polygon(
            10% 0,
            100% 0,
            100% 100%,
            0 100%,
            0 100%
          )`,
        },
        {
          clipPath: `polygon(
            110% 0,
            100% 0,
            100% 100%,
            100% 100%,
            100% 100%
          )`,
        },
      ],
      {
        duration: timeInMS,
      },
    );

    setTimeout(() => {
      this.changeViewEvent.emit(
        this.featureView !== FeatureView.Page
          ? FeatureView.Page
          : FeatureView.Code,
      );
    }, timeInMS);
  }
}
