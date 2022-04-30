import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faqs: any = [
    {
      question: 'How do I get started?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'Is this a membership or subscription service?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'Are your templates linked to Excel?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'I purchased Team Access. How can I add new members?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'How can I download the product I just purchased?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'How will I receive updates?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'Can I access the templates on more than one device?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
    {
      question: 'What are your license terms?',
      ans: ' This is a one-time payment. No monthly/annually membership.With your investment, youll be getting ALL our current products plus periodical updates free of charge!',
    },
  ];
}
