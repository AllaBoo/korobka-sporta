import { Component } from '@angular/core';
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
export class Main {
  protected readonly titles = ['Зал\u00A0функционального тренинга'];
}
