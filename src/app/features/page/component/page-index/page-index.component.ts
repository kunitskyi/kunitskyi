import { Component } from '@angular/core';
import { CoverComponent, PlinkComponent } from '@app-page/component';
import { HubLink } from '@app/features/types';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'kun-page-index',
  standalone: true,
  imports: [CoverComponent, PlinkComponent, TranslocoPipe],
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
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
      href: 'https://t.me/@Tom_Dragon',
      text: 'Telegram',
    },
  ];

  protected mailMe(): void {
    window.location.href = 'mailto:me@kunitskyi.pp.ua';
  }
}
