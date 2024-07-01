import { Component, Input } from '@angular/core';

@Component({
  selector: 'kun-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss',
})
export class FilesComponent {
  @Input({ required: true }) imgPath!: string;
  @Input({ required: true }) name!: string;
}
