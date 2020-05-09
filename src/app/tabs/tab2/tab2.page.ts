import { Component } from '@angular/core';
import { IAlphabetList } from '../../models/boy_routine.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public favouriteRoutine: IAlphabetList;

  constructor() {}

}
