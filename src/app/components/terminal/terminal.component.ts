import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { FeatureView } from '@app/types';
import { UserLineComponent } from './user-line/user-line.component';

@Component({
  selector: 'kun-terminal',
  standalone: true,
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  imports: [UserLineComponent],
})
export class TerminalComponent {
  @HostBinding('class') private get getClasses() {
    return {
      Page: this.view === FeatureView.Page,
      Code: this.view === FeatureView.Code,
    };
  }
  @HostListener('click') focusOnInput() {
    this.inputRef.nativeElement.focus();
  }

  @ViewChild('input') inputRef!: ElementRef;

  @Input({ required: true }) view!: FeatureView;
}
