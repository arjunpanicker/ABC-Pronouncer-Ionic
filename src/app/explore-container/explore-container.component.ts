import { AfterViewInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { IAlphabetList, IAlphabet } from '../models/alphabets.model';
// import { AudioService } from '../_services/audio.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements AfterViewInit {
  @Input() alphabetList: IAlphabetList;

  @ViewChildren('slides') slidesList: QueryList<IonSlides>;
  private _slides: IonSlides;

  public clickable = true;

  constructor(
    // private _audioService: AudioService
  ) { }

  public ngAfterViewInit(): void {
    this.slidesList.changes.subscribe((comps: QueryList<IonSlides>) => {
      this._slides = comps.first;
    });
  }

  public previousSlide() {
    this._slides.slidePrev();
  }

  public nextSlide() {
    this._slides.slideNext();
  }

  /**
   * This method pronounces a text
   * @param text Text to be pronounced
   */
  public pronounce(alphabetObj: IAlphabet) {
    // this.clickable = false;

    // this._audioService.play('1');
    // this._ttsService.getSpeach(text).then(() => {
    //   this.clickable = true;
    // }).catch(async (error) => {
    //   const toast = await this._toastController.create({
    //     message: 'Unable to convert into speech',
    //     duration: 4000
    //   });
    //   toast.present();
    //   this.clickable = true;
    // });
  }

  /**
   * This method adds or removes a letter from favourites
   * @param letter letter to be added or removed from favourites
   */
}
