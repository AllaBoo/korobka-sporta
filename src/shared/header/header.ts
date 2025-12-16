import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Logo } from '../logo/logo';
import { SocialMedia } from '../social-media/social-media';
import { appURL } from '../constants';

@Component({
  selector: 'app-header',
  imports: [Logo, SocialMedia],
  templateUrl: './header.html',
  styleUrls: [
    './header.css',
    '../css/link.css',
    '../css/screen-readers.css',
    '../css/button.css',
  ],
})
export class Header implements OnInit {
  private renderer2 = inject(Renderer2);
  private document = inject(DOCUMENT);
  public nav = [
    {
      name: 'Эвенты',
      anchor: 'events',
    },
    {
      name: 'Направления',
      anchor: 'sports',
    },
    {
      name: 'Мерч',
      anchor: 'merch',
    },
    {
      name: 'Расписание',
      anchor: 'schedule',
    },
    {
      name: 'Фото',
      anchor: 'photos',
    },
  ];
  public isMenuOpen =
    this.document.documentElement.clientWidth < 1024 ? false : true;

  ngOnInit(): void {
    const script = this.renderer2.createElement('script') as HTMLScriptElement;
    const names = String(this.nav.map((section) => '"' + section.name + '"'));
    const anchors = String(
      this.nav.map((section) => '"' + appURL + '#' + section.anchor + '"'),
    );
    script.type = `application/ld+json`;
    script.text = `
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "name": [${names}],
        "url": [${anchors}]
      }
    `;

    this.renderer2.appendChild(this.document.head, script);
    console.log(this.document.documentElement.clientWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.isMenuOpen = window.innerWidth < 1024 ? false : true;
  }
}
