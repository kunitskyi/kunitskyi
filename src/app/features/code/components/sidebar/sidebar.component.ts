import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangeLanguageComponent } from '@app/components';
import { FeatureView } from '@app/types';

@Component({
  selector: 'kun-sidebar',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() showSidePanelEvent = new EventEmitter<boolean>();

  @Input({ required: true }) set isSidePanelShown(value: boolean) {
    if (value === true) {
      this.isExplorerActive = true;
    } else {
      this.isExplorerActive = false;
    }
  }

  protected codeView: FeatureView = FeatureView.Code;
  protected isExplorerActive = true;

  protected toggleExplorer() {
    this.isExplorerActive = !this.isExplorerActive;
    if (this.isExplorerActive) {
      this.showSidePanelEvent.emit(true);
    } else {
      this.showSidePanelEvent.emit(false);
    }
  }
}
