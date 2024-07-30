import { Component } from '@angular/core';
import { CERTIFICATES } from '@app-page/constants';
import { TranslocoPipe } from '@jsverse/transloco';
import { Certificate } from '@app-page/types';
import { DatePipe } from '@angular/common';
import { PrefixPipe } from '@app/pipes';

@Component({
  selector: 'kun-certificates',
  standalone: true,
  imports: [DatePipe, TranslocoPipe, PrefixPipe],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  protected certificates = CERTIFICATES;

  protected selectCertificate(cert: Certificate) {
    console.error(cert);
  }
}
