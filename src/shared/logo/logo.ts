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
  appTitle = appTitle;
  appTitleParts = appTitle.split(' ');
}
