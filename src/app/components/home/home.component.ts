import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alf = ["a", "b", "c", "d", "e"];
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
      this.error.message = "Insira uma letra";
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

  getChangeLetter() {
    const regexValue  = /[A-Za-z]/; 
    if (!regexValue.test(this.changeLetter[0]) ) {
        this.error.isActive = true;
        this.error.message = `O campo não pode estar vazio`;
        return "";
    }
    this.error.isActive = false;
    this.error.message = "";
    return this.changeLetter[0];
  }

  changeAlf(valor: string[]) {
    this.alf = valor;
  };

  addUnusualLetter() {
    if (this.unusualLetters.includes(this.getChangeLetter())) {
      this.error.isActive = true;
      this.error.message = `A letra ${this.getChangeLetter()} já existe na lista`;
      return;
    }
    this.unusualLetters.push(this.getChangeLetter());
  }

  removeFromUnusualLetters() {
    this.unusualLetters = this.unusualLetters.filter(letter => letter !== this.getChangeLetter());
  }
}
