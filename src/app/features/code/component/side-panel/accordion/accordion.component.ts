import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'kun-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @HostBinding('class.Open') protected isOpen = true;

  @Input({ required: true }) public text!: string;
}
