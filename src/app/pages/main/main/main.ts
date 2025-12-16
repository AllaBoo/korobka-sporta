import { Component } from '@angular/core';
import { Header } from '../../../../shared/header/header';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-main',
  imports: [Header, Hero],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
