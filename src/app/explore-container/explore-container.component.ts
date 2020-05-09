import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { IAlphabetList } from '../models/boy_routine.model';
import { TextToSpeechService } from '../_services/utility_Services/text-to-speech.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreContainerComponent implements OnChanges {
  @Input() alphabetList: IAlphabetList;

  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor(
    private _ttsService: TextToSpeechService,
    private _toastController: ToastController,
    public cdRef: ChangeDetectorRef,
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('outside: ', this.alphabetList);
    if (this.alphabetList && this.alphabetList.letters && this.alphabetList.letters.length > 0) {
      console.log('inside: ', this.alphabetList);
      this.cdRef.detectChanges();
    }
  }

  public previousSlide() {
    this.slides.slidePrev();
  }

  public nextSlide() {
    this.slides.slideNext();
  }

  public pronounce(text: string) {
    this._ttsService.getSpeach(text).then(() => {
      console.log('done!!');
    }).catch(async (error) => {
      const toast = await this._toastController.create({
        message: 'Unable to convert into speech',
        duration: 4000
      });
      toast.present();
    })
  }
}
