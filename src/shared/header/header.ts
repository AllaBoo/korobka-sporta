import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
  private platformId = inject(PLATFORM_ID);
  public nav = appNav;
  public isMenuOpen = signal(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
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

  onToggle(event: Event) {
    const target = event.target as HTMLDetailsElement | null;
    if (target) {
      this.isMenuOpen.set(target.open);
    }
  }
}
