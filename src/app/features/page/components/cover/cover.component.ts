import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ChangeLanguageComponent } from '@app/components';
import { PageBlock } from '@app-page/types';
import { FeatureView } from '@app/types';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-cover',
  standalone: true,
  imports: [ChangeLanguageComponent, TranslocoPipe],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent {
  @Output() private scrollToEvent = new EventEmitter<PageBlock>();

  protected pageView: FeatureView = FeatureView.Page;
  protected age: number = new Date().getFullYear() - 2002;
  protected get PageBlock() {
    return PageBlock;
  }

  public constructor(private renderer: Renderer2) {}

  protected scrollTo(value: PageBlock) {
    this.scrollToEvent.emit(value);
  }
}
