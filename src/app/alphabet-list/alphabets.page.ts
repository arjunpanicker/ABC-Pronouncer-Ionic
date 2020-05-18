import { Component, OnInit } from '@angular/core';
import { IAlphabetList } from '../models/alphabets.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: 'alphabets.page.html',
  styleUrls: ['alphabets.page.scss']
})
export class AlphabetsPage implements OnInit {

  public alphabetData: IAlphabetList = {
    letters: []
  };

  constructor(
    private _http: HttpClient
  ) {}

  public ngOnInit(): void {
    this._http.get('assets/json/alphabet.json').subscribe((data: IAlphabetList) => {
      this.alphabetData = data;
    });
  }

}
