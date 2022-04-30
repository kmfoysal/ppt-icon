import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reviews: any = [
    {
      qouteImg: '../../assets/images/qoute.svg',
      reviewText:
        'Tristique viverra vitae fermentum pellentesque at. Nunc at justo, a dolor egestas. Urna, metus, a, ultricies sed justo. Ut viverra turpis enim odio diam et vulputate. Congue ac eget justo, a dolor egestas.',
      fullStarImg: '../../assets/images/start.svg',
      halfStarImg: '../../assets/images/start-hulp.svg',
      rating: '4.5/5',
      clientImg: '../../assets/images/author-img.png',
      clientName: 'Dianne Russell',
      verifiedIcon: '../../assets/images/checked-icon.svg',
      verifiedText: 'Verified Customer',
    },
    {
      qouteImg: '../../assets/images/qoute.svg',
      reviewText:
        'Tristique viverra vitae fermentum pellentesque at. Nunc at justo, a dolor egestas. Urna, metus, a, ultricies sed justo. Ut viverra turpis enim odio diam et vulputate. Congue ac eget justo, a dolor egestas.',
      fullStarImg: '../../assets/images/start.svg',
      halfStarImg: '../../assets/images/start-hulp.svg',
      rating: '4.5/5',
      clientImg: '../../assets/images/author-img2.png',
      clientName: 'Bessie Cooper',
      verifiedIcon: '../../assets/images/checked-icon.svg',
      verifiedText: 'Verified Customer',
    },
    {
      qouteImg: '../../assets/images/qoute.svg',
      reviewText:
        'Tristique viverra vitae fermentum pellentesque at. Nunc at justo, a dolor egestas. Urna, metus, a, ultricies sed justo. Ut viverra turpis enim odio diam et vulputate. Congue ac eget justo, a dolor egestas.',
      fullStarImg: '../../assets/images/start.svg',
      halfStarImg: '../../assets/images/start-hulp.svg',
      rating: '4.5/5',
      clientImg: '../../assets/images/author-img.png',
      clientName: 'Dianne Russell',
      verifiedIcon: '../../assets/images/checked-icon.svg',
      verifiedText: 'Verified Customer',
    },
    {
      qouteImg: '../../assets/images/qoute.svg',
      reviewText:
        'Tristique viverra vitae fermentum pellentesque at. Nunc at justo, a dolor egestas. Urna, metus, a, ultricies sed justo. Ut viverra turpis enim odio diam et vulputate. Congue ac eget justo, a dolor egestas.',
      fullStarImg: '../../assets/images/start.svg',
      halfStarImg: '../../assets/images/start-hulp.svg',
      rating: '4.5/5',
      clientImg: '../../assets/images/author-img2.png',
      clientName: 'Bessie Cooper',
      verifiedIcon: '../../assets/images/checked-icon.svg',
      verifiedText: 'Verified Customer',
    },
  ];

  customOptions: OwlOptions = {
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    animateOut: 'fadeOut',
    smartSpeed: 2500,
    navText: [
      "<img src='../../assets/images/arrow-left.svg' class='img-fluid' />",
      "<img src='../../assets/images/arrow-right.svg' class='img-fluid' />",
    ],
    dots: true,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
  };
}
