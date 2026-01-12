import {
  Component,
  Renderer2,
  OnInit,
  inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { timer } from 'rxjs';

import { Header } from '../../../../shared/header/header';
import { Hero } from './hero/hero';
import { Events } from './events/events';
import { Overview } from './overview/overview';
import { Sports } from './sports/sports';
import { Popup } from '../../../../shared/popup/popup';
import { Advantages } from './advantages/advantages';
import { Photos } from './photos/photos';
import { Map } from './map/map';
import { Footer } from '../../../../shared/footer/footer';

@Component({
  selector: 'app-main',
  imports: [
    Header,
    Hero,
    Events,
    Overview,
    Popup,
    Sports,
    Advantages,
    Photos,
    Map,
    Footer,
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {
  protected readonly titles = ['Зал\u00A0функционального тренинга'];
  private renderer2 = inject(Renderer2);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      return;
    }
  }

  @HostListener('document:DOMContentLoaded')
  onDOMContentLoaded() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.loadFonts();
    timer(2000).subscribe(() => {
      this.loadExternalScript();
    });
  }

  loadFonts() {
    const link = this.renderer2.createElement('link') as HTMLLinkElement;
    link.href = '/fonts/fonts.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    this.renderer2.appendChild(this.document.head, link);
  }
  loadExternalScript() {
    console.log('loadExternalScript');

    const scriptCRM = this.renderer2.createElement(
      'script',
    ) as HTMLScriptElement;
    scriptCRM.src = 'https://wg.sportpriority.com/loader.js';
    scriptCRM.async = true;
    scriptCRM.defer = true;

    this.renderer2.appendChild(
      this.document.getElementById('schedule'),
      scriptCRM,
    );

    const widget = this.renderer2.createElement('div') as HTMLDivElement;
    widget.setAttribute(
      'data-sportpriority-widget-id',
      '7ec31cf52ece4796ac66c0f7f2057a13',
    );
    this.renderer2.appendChild(
      this.document.getElementById('schedule'),
      widget,
    );

    const scriptMap = this.renderer2.createElement(
      'script',
    ) as HTMLScriptElement;
    scriptMap.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A750bc00f2907aa82c5ad36da4b3bd91790f636f571281a2207355cb267b4c395&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true';
    scriptMap.async = true;
    scriptMap.defer = true;

    this.renderer2.appendChild(this.document.getElementById('map'), scriptMap);
  }
}
