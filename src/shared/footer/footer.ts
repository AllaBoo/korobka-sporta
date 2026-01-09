import { Component } from '@angular/core';

import { Logo } from '../logo/logo';
import { SocialMedia } from '../social-media/social-media';
import { appNav, appAddress, appEmail, appTitle } from '../constants';

@Component({
  selector: 'app-footer',
  imports: [Logo, SocialMedia],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css', '../css/link.css'],
})
export class Footer {
  nav = appNav;
  address = appAddress;
  email = appEmail;
  currentYear = new Date().getFullYear();
  appTitle = appTitle;
}
