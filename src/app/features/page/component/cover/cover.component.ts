import { Component, EventEmitter, Output } from '@angular/core';
import { DogEarComponent } from '@app/component';
import { FeatureView } from '@app/types/general-enums';

@Component({
  selector: 'kun-cover',
  standalone: true,
  imports: [DogEarComponent],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent {
  @Output() changeViewEvent = new EventEmitter<FeatureView>();
  changeView(e: FeatureView) {
    this.changeViewEvent.emit(e);
  }
}
