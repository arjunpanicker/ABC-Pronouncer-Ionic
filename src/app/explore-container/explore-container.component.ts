import { Component, Input, ViewChild } from '@angular/core';
import { IonSlides, ToastController, AlertController } from '@ionic/angular';
import { IAlphabet, IAlphabetList } from '../models/alphabets.model';
import { FavouritesService } from '../_services/favourites.service';
import { TextToSpeechService } from '../_services/utility_Services/text-to-speech.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() alphabetList: IAlphabetList;

  @ViewChild('slides', { static: true }) slides: IonSlides;

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

  public previousSlide() {
    this.slides.slidePrev();
  }

  public nextSlide() {
    this.slides.slideNext();
  }

  /**
   * This method pronounces a text
   * @param text Text to be pronounced
   */
  public pronounce(text: string) {
    this._ttsService.getSpeach(text).then(() => {
      console.log('done!!');
    }).catch(async (error) => {
      const toast = await this._toastController.create({
        message: 'Unable to convert into speech',
        duration: 4000
      });
      toast.present();
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
