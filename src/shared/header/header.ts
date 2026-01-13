import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IS_BROWSER } from '../../app/tokens/browser';

import { Logo } from '../logo/logo';
import { SocialMedia } from '../social-media/social-media';
import { CTA } from '../cta/cta';
import { appURL, appNav } from '../constants';

@Component({
  selector: 'app-header',
  imports: [Logo, SocialMedia, CTA],
  templateUrl: './header.html',
  styleUrls: ['./header.css', '../css/link.css', '../css/screen-readers.css'],
})
export class Header implements OnInit {
  private renderer2 = inject(Renderer2);
  private document = inject(DOCUMENT);
  private readonly isBrowser = inject(IS_BROWSER);
  public nav = appNav;
  public isMenuOpen = signal(false);

  ngOnInit(): void {
    if (this.isBrowser) {
      this.isMenuOpen.set(window.innerWidth >= 1024);
      this.addMicrodata();
    }
  }
  addMicrodata() {
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
  }

  @HostListener('window:resize')
  onResize() {
    this.isMenuOpen.set(window.innerWidth < 1024 ? false : true);
  }
}
