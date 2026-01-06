import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-photos',
  imports: [UpperCasePipe],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos {
  title = 'Фото клуба';
  photos = [
    {
      src: '/images/club/main.jpg',
      alt: 'Фото спортзала Коробка.',
    },
    {
      src: '/images/club/1.jpg',
      alt: 'Тренажёры Concept 2 в спортзале Коробка',
    },
    {
      src: '/images/club/2.jpg',
      alt: 'Стойки для грифов в Коробке Спорта Пушкино.',
    },
    {
      src: '/images/club/3.jpg',
      alt: 'Грифы в кроссфит-зале Коробка Спорта.',
    },
    {
      src: '/images/club/4.jpg',
      alt: 'Тренажёры Concept 2 в Коробке Спорта Пушкино.',
    },
    {
      src: '/images/club/5.jpg',
      alt: 'Тренажёры Concept 2: гребли, байки и лыжи.',
    },
  ];
  index = 0;
}
