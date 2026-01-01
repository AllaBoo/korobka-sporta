import { Component, Input } from '@angular/core';
import { ICTA } from '../interface';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrls: ['./cta.css', '../css/button.css'],
})
export class CTA {
  @Input() theme: 'light' | 'accent' = 'accent';
  @Input() class = '';
  @Input() CTAParams: ICTA = {
    text: 'Записаться',
    link: './sign-up',
    label: 'Записаться на тренировку',
  };
}
