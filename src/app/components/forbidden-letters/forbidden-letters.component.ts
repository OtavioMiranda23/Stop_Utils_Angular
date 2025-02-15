import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ForbiddenLettersService } from '../../services/forbidden-letters.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forbidden-letters',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './forbidden-letters.component.html',
  styleUrl: './forbidden-letters.component.css'
})
export class ForbiddenLettersComponent {
  changeLetter = "";
  unusualLetters: string[] = [];
  isShowAddLetter = false;
  error = {
    isActive: false,
    message: ""
  }

  constructor (private forbiddenLetterService: ForbiddenLettersService) {}

  ngOnInit() {
    this.unusualLetters = this.forbiddenLetterService.getUnusualLetters();
  }

  addUnusualLetter() {
    const result = this.forbiddenLetterService.addUnusualLetter(this.changeLetter);
    console.log(result);
     
    if (!result.success) {
      this.error.isActive = true;
      this.error.message = result.message || "";
    } else {
      this.unusualLetters = this.forbiddenLetterService.getUnusualLetters();
    }
  }

  validateChangeLetter() {
    const result = this.forbiddenLetterService.validateLetter(this.changeLetter);
    this.error.isActive = !result.isValid;
    this.error.message = result.message || "";
    if (result.isValid) {
      this.changeLetter = this.changeLetter.toUpperCase();
    }
  }

  removeFromUnusualLetters() {
    this.forbiddenLetterService.removeFromUnusualLetters(this.changeLetter);
    this.unusualLetters = this.forbiddenLetterService.getUnusualLetters();
  }

  removeFromClickUnusualLetters(event: Event) {
    const clickedLetter = (event.target as HTMLElement).textContent || "";
    this.forbiddenLetterService.removeFromUnusualLetters(clickedLetter);
    this.unusualLetters = this.forbiddenLetterService.getUnusualLetters();
  }
}
