import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kun-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss',
})
export class FilesComponent {
  @Output() private fileSelectedEvent = new EventEmitter<void>();

  @Input({ required: true }) public iconSrc!: string;
  @Input({ required: true }) public name!: string;

  protected fileSelected() {
    this.fileSelectedEvent.emit();
  }
}
