import { Component, Input } from '@angular/core';
import { appTitle } from '../constants';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  @Input() theme: 'light' | 'accent' = 'accent';
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  appTitle = appTitle;
  appTitleParts = appTitle.split(' ');
}
