import { Component, EventEmitter, Output } from '@angular/core';
import { CoverComponent } from '@app/features';
import { FeatureView } from '@app/types/general-enums';

@Component({
  selector: 'kun-index',
  standalone: true,
  imports: [CoverComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  @Output() changeViewEvent = new EventEmitter<FeatureView>();
  changeView(e: FeatureView) {
    this.changeViewEvent.emit(e);
  }
}
