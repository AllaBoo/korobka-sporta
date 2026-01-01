import { Component } from '@angular/core';
import { Header } from '../../../../shared/header/header';
import { Hero } from './hero/hero';
import { Events } from './events/events';

@Component({
  selector: 'app-main',
  imports: [Header, Hero, Events],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
