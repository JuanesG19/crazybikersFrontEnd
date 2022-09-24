import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  imageSrc = '';
  imageBike = '';

  images = [
    { imageSrc: '../../../assets/img/bikes/bike1.png' },
    { imageSrc: '../../../assets/img/bikes/bike2.png' },
    { imageSrc: '../../../assets/img/bikes/bike3.png' },
    { imageSrc: '../../../assets/img/bikes/bike4.png' },
    { imageSrc: '../../../assets/img/bikes/bike5.png' },
    { imageSrc: '../../../assets/img/bikes/bike6.png' },
    { imageSrc: '../../../assets/img/bikes/bike7.png' },
    { imageSrc: '../../../assets/img/bikes/bike8.png' },
  ];

  banner1: string;
  banner2: string;
  banner3: string;
  banner4: string;
  banner5: string;

  bike1: string;
  bike2: string;
  bike3: string;
  bike4: string;

  constructor() {
    this.banner1 = '../../../assets/img/banner/banner1.jpg';
    this.banner2 = '../../../assets/img/banner/banner2.jpg';
    this.banner3 = '../../../assets/img/banner/banner3.png';
    this.banner4 = '../../../assets/img/banner/banner4.jpg';
    this.banner5 = '../../../assets/img/banner/banner5.jpg';

    this.bike1 = '../../../assets/img/cinematicBikes/img1.jpg';
    this.bike2 = '../../../assets/img/cinematicBikes/img2.jpeg';
    this.bike3 = '../../../assets/img/cinematicBikes/img3.jpeg';
    this.bike4 = '../../../assets/img/cinematicBikes/img4.jpg';

  }

  ngOnInit(): void {
    this.selectImage();
  }

  selectImage(): void {
    var slider: any = <HTMLInputElement>document.getElementById('slider');
    this.imageBike = this.images[slider.value - 1].imageSrc;
  }
}
