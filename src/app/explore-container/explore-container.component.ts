import { Component, Input, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { IonSlides, ToastController, AlertController } from '@ionic/angular';
import { IAlphabet, IAlphabetList } from '../models/alphabets.model';
import { FavouritesService } from '../_services/favourites.service';
import { TextToSpeechService } from '../_services/utility_Services/text-to-speech.service';

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
    private _ttsService: TextToSpeechService,
    private _toastController: ToastController,
    private _favouriteService: FavouritesService,
    private _alertController: AlertController
  ) { }

  private async showAlert(letter: IAlphabet) {
    const alert = await this._alertController.create({
      header: 'Confirm',
      message: 'Remove from Favourites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            letter.favourite = !letter.favourite;
            this._favouriteService.removeFromFavourites(letter);
          }
        },
        {
          text: 'No'
        }
      ]
    });

    await alert.present();
  }

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
  public pronounce(text: string) {
    this.clickable = false;
    this._ttsService.getSpeach(text).then(() => {
      this.clickable = true;
    }).catch(async (error) => {
      const toast = await this._toastController.create({
        message: 'Unable to convert into speech',
        duration: 4000
      });
      toast.present();
      this.clickable = true;
    });
  }

  /**
   * This method adds or removes a letter from favourites
   * @param letter letter to be added or removed from favourites
   */
  public toggleFavourite(letter: IAlphabet) {
    if (!letter.favourite) {
      letter.favourite = !letter.favourite;
      this._favouriteService.addTofavouriteLetters(letter);
    } else {
      this.showAlert(letter);
    }
  }
}
