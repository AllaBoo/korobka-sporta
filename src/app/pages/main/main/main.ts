import { Component } from '@angular/core';
import { Header } from '../../../../shared/header/header';
import { Hero } from './hero/hero';
import { Events } from './events/events';
import { Overview } from './overview/overview';

@Component({
  selector: 'app-main',
  imports: [Header, Hero, Events, Overview],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  protected readonly titles = ['Зал\u00A0функционального тренинга'];
}
