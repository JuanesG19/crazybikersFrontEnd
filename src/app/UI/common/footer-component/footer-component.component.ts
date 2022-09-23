import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  facebookIcon: string;
  instagramIcon: string;
  whatsappIcon: string;
  twitterIcon: string;

  constructor() {
    this.facebookIcon = '../../../assets/img/socialMedia/facebookIcon.png';
    this.instagramIcon = '../../../assets/img/socialMedia/instagramIcon.png';
    this.whatsappIcon = '../../../assets/img/socialMedia/whatsappIcon.png';
    this.twitterIcon = '../../../assets/img/socialMedia/twitterIcon.png';
   }

  ngOnInit(): void {
  }

}
