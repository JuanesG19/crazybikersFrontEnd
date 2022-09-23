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
    this.facebookIcon = '';
    this.instagramIcon = '';
    this.whatsappIcon = '';
    this.twitterIcon = '';
   }

  ngOnInit(): void {
  }

}
