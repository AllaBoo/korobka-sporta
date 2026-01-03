import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { CTA } from '../../../../../../src/shared/cta/cta';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe, CTA],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = 'Зал\u00A0функционального тренинга';
  sports = [
    'Кроссфит',
    'Хайрокс',
    'Детский тренинг',
    'TRX',
    'Йога',
    'Стрейчинг',
  ];
}
