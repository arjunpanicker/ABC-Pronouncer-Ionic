import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlphabet, IAlphabetList } from '../models/alphabets.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private _favouriteLettersList: IAlphabetList;
  public favouriteLetters: Subject<IAlphabetList> = new Subject<IAlphabetList>();

  constructor() {
    this._favouriteLettersList = {
      letters: []
    };
  }

  public get favouriteLettersList(): IAlphabetList {
    return this._favouriteLettersList;
  }

  /**
   * This method adds a letter object
   * @param letter Letter object to be added
   */
  public addTofavouriteLetters(letter: IAlphabet): void {
    this._favouriteLettersList.letters.push(letter);
    this.favouriteLetters.next(this._favouriteLettersList);
  }

  /**
   * This method removes a letter object
   * @param letter Letter object to be removed
   */
  public removeFromFavourites(letter: IAlphabet): void {
    this._favouriteLettersList.letters.splice(this._favouriteLettersList.letters.indexOf(letter), 1);
    this.favouriteLetters.next(this._favouriteLettersList);
  }
}
