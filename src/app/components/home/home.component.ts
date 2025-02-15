import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForbiddenLettersService } from '../../services/forbidden-letters.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms 200ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent {
  alf = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  sortedLetter = "";
  sortedHistory: string[] = []

  constructor (private forbiddenLetters: ForbiddenLettersService) {}

  deleteLetters() {
    this.alf = this.alf.filter(letter => !this.forbiddenLetters.getUnusualLetters().includes(letter));
  }

  sortLetter() {
    const indexAlf = Math.floor(Math.random() * this.alf.length);
    this.sortedLetter = this.alf[indexAlf];
    this.sortedHistory.push(this.sortedLetter);
    this.alf = this.alf.filter(letter => !this.sortedHistory.includes(letter));
  }
}
