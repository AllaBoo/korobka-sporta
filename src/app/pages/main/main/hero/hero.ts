import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrls: [
    './hero.css',
    '../../../../../../src/shared/css/button.css',
    '../../../../../../src/shared/css/mixin.css',
  ],
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
