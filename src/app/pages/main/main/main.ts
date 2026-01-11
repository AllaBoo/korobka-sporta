import {
  Component,
  Renderer2,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
      this.loadExternalScript();
    }
  }
  loadExternalScript() {
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
  }
}
