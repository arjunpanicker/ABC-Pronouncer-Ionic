import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlphabet, IAlphabetList } from '../models/boy_routine.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  public favouriteLettersList: IAlphabetList;
  public favouriteLetters: Subject<IAlphabetList> = new Subject<IAlphabetList>();

  constructor() {
    this.favouriteLettersList = {
      letters: []
    };
  }

  /**
   * This method adds a letter object
   * @param letter Letter object to be added
   */
  public addTofavouriteLetters(letter: IAlphabet): void {
    this.favouriteLettersList.letters.push(letter);
    this.favouriteLetters.next(this.favouriteLettersList);
  }

  /**
   * This method removes a letter object
   * @param letter Letter object to be removed
   */
  public removeFromFavourites(letter: IAlphabet): void {
    this.favouriteLettersList.letters.splice(this.favouriteLettersList.letters.indexOf(letter), 1);
    this.favouriteLetters.next(this.favouriteLettersList);
  }
}
