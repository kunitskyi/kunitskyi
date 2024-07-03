import { Component, HostBinding, Input } from '@angular/core';
import { FeatureView } from '@app/types';

@Component({
  selector: 'kun-user-line',
  standalone: true,
  imports: [],
  templateUrl: './user-line.component.html',
  styleUrl: './user-line.component.scss',
})
export class UserLineComponent {
  @HostBinding('class') private get getClasses() {
    return {
      Page: this.view === FeatureView.Page,
      Code: this.view === FeatureView.Code,
    };
  }

  @Input({ required: true }) view!: FeatureView;
}
