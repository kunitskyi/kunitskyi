import { Component, ElementRef, ViewChild } from '@angular/core';
import { CoverComponent, PlinkComponent } from '@app-page/components';
import { HubLink, PageBlock } from '@app-page/types';
import { TranslocoPipe } from '@jsverse/transloco';
import { CertificatesComponent } from '../certificates/certificates.component';
import { TerminalComponent } from '@app/components/terminal/terminal.component';

@Component({
  selector: 'kun-page-index',
  standalone: true,
  imports: [
    CoverComponent,
    CertificatesComponent,
    TerminalComponent,
    PlinkComponent,
    TranslocoPipe,
  ],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
  @ViewChild('certificates', { read: ElementRef })
  private certificatesRef!: ElementRef;

  @ViewChild('terminal', { read: ElementRef })
  private terminalRef!: ElementRef;

  protected links: HubLink[] = [
    {
      icon: '/assets/link-icon/github_64x64.webp',
      href: 'https://github.com/kunitskyi',
      text: 'GitHub',
    },
    {
      icon: '/assets/link-icon/gitlab_64x64.webp',
      href: 'https://gitlab.com/kunitskyi',
      text: 'GitLab',
    },
    {
      icon: '/assets/link-icon/leetcode_64x64.png',
      href: 'https://leetcode.com/u/kunitskyi/',
      text: 'LeetCode',
    },
    {
      icon: '/assets/link-icon/discord_56x64.png',
      href: 'https://discordapp.com/users/245216266581704704',
      text: '@GooseTower',
    },
    {
      icon: '/assets/link-icon/telegram_64x64.png',
      href: 'https://t.me/Tom_Dragon',
      text: 'Telegram',
    },
  ];

  protected scrollTo(value: PageBlock) {
    let element;

    if (value === PageBlock.Certificates) element = this.certificatesRef;
    else if (value === PageBlock.Terminal) element = this.terminalRef;
    else throw new Error('Unexpected Argument in scrollTo()');

    element.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }

  protected mailMe(): void {
    window.location.href = 'mailto:me@kunitskyi.pp.ua';
  }
}
