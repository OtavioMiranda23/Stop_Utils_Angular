import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alf = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  sortedLetter = "";
  sortedHistory: string[] = []
  changeLetter = "";
  unusualLetters = ["U", "K", "W", "Y", "X", "Z", "H", "Q"];
  isShowAddLetter = true;
  error = {
    isActive: false,
    message: ""
  }

  validateChangeLetter() {
    if (!/[A-Za-z]/.test(this.changeLetter)) {
      this.error.isActive = true;
      this.error.message = "Caracter inválido. Insira uma letra";
      return;
    }
    if (this.changeLetter.length > 1) {
      this.error.isActive = true;
      this.error.message = "Insira apenas um caracter";
      return;
    }
    this.error.isActive = false;
    this.error.message = "";
    this.changeLetter = this.changeLetter[0].toUpperCase() || "" ;
  }

  changeAlf(valor: string[]) {
    this.alf = valor;
  };

  addUnusualLetter() {
    if (this.unusualLetters.includes(this.changeLetter)) {
      this.error.isActive = true;
      this.error.message = `A letra ${this.changeLetter} já existe na lista`;
      return;
    }
    this.unusualLetters.push(this.changeLetter);
  }

  removeFromUnusualLetters() {
    this.unusualLetters = this.unusualLetters.filter(letter => letter !== this.changeLetter);
  }

  deleteLetters() {
    this.alf = this.alf.filter(letter => !this.unusualLetters.includes(letter));
  }

  sortLetter() {
    const indexAlf = Math.floor(Math.random() * this.alf.length);
    this.sortedLetter = this.alf[indexAlf];
    this.sortedHistory.push(this.sortedLetter);
    this.alf = this.alf.filter(letter => !this.sortedHistory.includes(letter));
  }
}
