import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForbiddenLettersService {
  private unusualLetters = ["U", "K", "W", "Y", "X", "Z", "H", "Q"];
  changeLetter = "";
  isShowAddLetter = true;
  error = {
    isActive: false,
    message: ""
  }

  getUnusualLetters() {
    return [...this.unusualLetters];
  }

  validateLetter(changeLetter: string): { isValid: boolean, message?: string }  {
    if (!/[A-Za-z]/.test(changeLetter)) {
      return { isValid: false, message: "Caracter inválido. Insira uma letra" };      
    }
    return { isValid: true };
  }


  addUnusualLetter(letter: string) {
    letter.toUpperCase();
    if (this.unusualLetters.includes(letter)) {
      return { success: false, message: `A letra ${this.changeLetter} já existe na lista` };
    }
    if (!/[A-Za-z]/.test(letter)) {
      return { success: false, message: `Somente são permitidas letras` };

    }
    this.unusualLetters.push(letter)

    return { success: true };
  }

  removeFromUnusualLetters(letter: string) {
    this.unusualLetters = this.unusualLetters.filter(l => l !== letter);
  }
}
