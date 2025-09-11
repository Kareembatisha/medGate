import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs: FAQ[] = [];

  ngOnInit(): void {
    this.initializeFaqs();
  }

  initializeFaqs(): void {
    this.faqs = [
      {
        id: 1,
        question: 'faq.question1',
        answer: 'faq.answer1',
        isOpen: false,
      },
      {
        id: 2,
        question: 'faq.question2',
        answer: 'faq.answer2',
        isOpen: false,
      },
      {
        id: 3,
        question: 'faq.question3',
        answer: 'faq.answer3',
        isOpen: false,
      },
      {
        id: 4,
        question: 'faq.question4',
        answer: 'faq.answer4',
        isOpen: false,
      },
      {
        id: 5,
        question: 'faq.question5',
        answer: 'faq.answer5',
        isOpen: false,
      },
      {
        id: 6,
        question: 'faq.question6',
        answer: 'faq.answer6',
        isOpen: false,
      },
      {
        id: 7,
        question: 'faq.question7',
        answer: 'faq.answer7',
        isOpen: false,
      },
      {
        id: 8,
        question: 'faq.question8',
        answer: 'faq.answer8',
        isOpen: false,
      },
      {
        id: 9,
        question: 'faq.question9',
        answer: 'faq.answer9',
        isOpen: false,
      },
      {
        id: 10,
        question: 'faq.question10',
        answer: 'faq.answer10',
        isOpen: false,
      },
      {
        id: 11,
        question: 'faq.question11',
        answer: 'faq.answer11',
        isOpen: false,
      },
      {
        id: 12,
        question: 'faq.question12',
        answer: 'faq.answer12',
        isOpen: false,
      },
      {
        id: 13,
        question: 'faq.question13',
        answer: 'faq.answer13',
        isOpen: false,
      },
      {
        id: 14,
        question: 'faq.question14',
        answer: 'faq.answer14',
        isOpen: false,
      },
      {
        id: 15,
        question: 'faq.question15',
        answer: 'faq.answer15',
        isOpen: false,
      },
    ];
  }

  toggleFaq(faq: FAQ): void {
    faq.isOpen = !faq.isOpen;
  }
}
