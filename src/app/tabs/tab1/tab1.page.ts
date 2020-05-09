import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAlphabetList } from '../../models/boy_routine.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public alphabetData: IAlphabetList;

  constructor(
    private _http: HttpClient
  ) {}

  public ngOnInit() {
    this._http.get('assets/json/alphabet.json').subscribe((data: IAlphabetList) => {
      this.alphabetData = data;
    });
  }

}
