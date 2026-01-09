import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

interface IPhotoIndexes {
  previous: number;
  active: number;
  next: number;
}

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
  photoIndexes = signal<IPhotoIndexes>({
    previous: 1,
    active: 2,
    next: 3,
  });

  nextPhoto() {
    const newIndexes = {
      previous:
        this.photoIndexes().previous === this.photos.length - 1
          ? 0
          : this.photoIndexes().previous + 1,
      active:
        this.photoIndexes().active === this.photos.length - 1
          ? 0
          : this.photoIndexes().active + 1,
      next:
        this.photoIndexes().next === this.photos.length - 1
          ? 0
          : this.photoIndexes().next + 1,
    };
    this.photoIndexes.set(newIndexes);
  }

  previousPhoto() {
    const newIndexes = {
      previous:
        this.photoIndexes().previous === 0
          ? this.photos.length - 1
          : this.photoIndexes().previous - 1,
      active:
        this.photoIndexes().active === 0
          ? this.photos.length - 1
          : this.photoIndexes().active - 1,
      next:
        this.photoIndexes().next === 0
          ? this.photos.length - 1
          : this.photoIndexes().next - 1,
    };
    this.photoIndexes.set(newIndexes);
  }
}
