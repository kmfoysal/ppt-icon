import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: any = [
    {
      img: '../../assets/images/template1.png',
      name: 'Prestigious Presentation',
    },
    {
      img: '../../assets/images/template2.png',
      name: 'Romero Presentation',
    },
    {
      img: '../../assets/images/template3.png',
      name: 'Mouve Presentation',
    },
    {
      img: '../../assets/images/template4.png',
      name: 'Min Maska Presentation',
    },
    {
      img: '../../assets/images/template5.png',
      name: 'Key Presentation',
    },
    {
      img: '../../assets/images/template6.png',
      name: 'Toetiec Presentation',
    },
  ];
}
