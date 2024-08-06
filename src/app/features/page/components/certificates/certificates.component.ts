import { Component } from '@angular/core';
import { CERTIFICATES } from '@app-page/constants';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  Certificate,
  CertificateIssued,
  CertificateTag,
} from '@app-page/types';
import { DatePipe } from '@angular/common';
import { PrefixPipe } from '@app/pipes';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface FilterConfig {
  showDuplicates: boolean;
  issuers: Set<CertificateIssued>;
  tags: Set<CertificateTag>;
}

@Component({
  selector: 'kun-certificates',
  standalone: true,
  imports: [DatePipe, TranslocoPipe, PrefixPipe],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          height: '*',
        }),
      ),
      state(
        'hide',
        style({
          height: '0',
        }),
      ),
      transition('show => hide', [animate('0.5s ease')]),
      transition('hide => show', [animate('0.5s ease')]),
    ]),
  ],
})
export class CertificatesComponent {
  protected certificates = CERTIFICATES;
  protected isFilterShown = false;
  protected isNewestFirst = false;
  protected defaultFilterConfig: FilterConfig = {
    showDuplicates: false,
    issuers: new Set(),
    tags: new Set(),
  };
  protected filerConfig!: FilterConfig;

  public constructor() {
    this.filerConfig = structuredClone(this.defaultFilterConfig);
    this.sortByNewestDate(this.isNewestFirst);
  }

  protected CertificateIssued() {
    return {
      ...CertificateIssued,
      [Symbol.iterator]: function* (): Generator<
        CertificateIssued,
        void,
        unknown
      > {
        const properties: string[] = Object.values(this);
        for (const i of properties as CertificateIssued[]) {
          yield i;
        }
      },
    };
  }

  protected CertificateTag() {
    return {
      ...CertificateTag,
      [Symbol.iterator]: function* (): Generator<
        CertificateTag,
        void,
        unknown
      > {
        const properties: string[] = Object.values(this);
        for (const i of properties as CertificateTag[]) {
          yield i;
        }
      },
    };
  }

  protected toggleFilters() {
    this.isFilterShown = !this.isFilterShown;
  }

  protected sortByNewestDate(e: boolean) {
    this.isNewestFirst = e;
    this.certificates = this.certificates.sort((a, b) =>
      this.isNewestFirst ? b.date - a.date : a.date - b.date,
    );
  }

  protected selectIssuerTag(value: CertificateIssued) {
    if (this.filerConfig.issuers.has(value))
      this.filerConfig.issuers.delete(value);
    else this.filerConfig.issuers.add(value);
  }

  protected selectGeneralTag(value: CertificateTag) {
    if (this.filerConfig.tags.has(value)) this.filerConfig.tags.delete(value);
    else this.filerConfig.tags.add(value);
  }

  protected filterCertificates() {
    let filteredCertificates = structuredClone(this.certificates);

    filteredCertificates = filteredCertificates
      .filter((value) => {
        return this.filerConfig.issuers.size === 0
          ? true
          : this.filerConfig.issuers.has(value.issued);
      })
      .filter((value) => {
        let isAllInSet = true;

        this.filerConfig.tags.forEach((setValue) => {
          isAllInSet = value.tags.has(setValue) ? isAllInSet : false;
        });

        return isAllInSet;
      })
      .filter((value, index, array) => {
        if (!this.filerConfig.showDuplicates) {
          const firstAlikeIndex = array.findIndex((e) => e.name === value.name);

          if (firstAlikeIndex !== index) {
            if (value.score > array[firstAlikeIndex].score)
              array[firstAlikeIndex].name = '';
            else return false;
          }
        }

        return true;
      })
      .filter((value) => {
        return !(value.name === '');
      });

    return filteredCertificates;
  }

  protected resetFilters() {
    this.filerConfig = structuredClone(this.defaultFilterConfig);
  }

  protected selectCertificate(value: Certificate) {
    console.error(value);
  }
}
