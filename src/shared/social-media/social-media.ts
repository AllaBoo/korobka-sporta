import { Component, Input } from '@angular/core';
import { appSocialMedia } from '../constants';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.css',
})
export class SocialMedia {
  appSocialMedia = appSocialMedia;
  @Input() theme: 'light' | 'accent' = 'accent';
}
