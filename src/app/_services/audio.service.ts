import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IAlphabetList, IAlphabet } from '../models/alphabets.model';

interface IAudio {
  key: string;
  asset: string;
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private _sounds: Array<IAudio> = [];

  constructor(
    private platform: Platform,
    private _nativeAudio: NativeAudio,
    private _http: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.batchPreload();
    });
  }

  /**
   * Preload the json file and get the urls for the audio files
   */
  private batchPreload(): Promise<any> {
    return this._http.get('assets/json/alphabet.json').toPromise()
      .then((data: IAlphabetList) => {
        data.letters.forEach((alphabet: IAlphabet) => {
          this.preload(alphabet.id.toString(), alphabet.assetLoc);
        });
      });
  }

  /**
   * This method plays the music file specified by the id
   * @param key ID of the music file
   */
  public play(key: string): Promise<any> {

    const audio: IAudio = this._sounds.find((sound: IAudio) => sound.key === key);
    console.log('audio', audio);

    return this._nativeAudio.play(key);
  }

  /**
   * This method preloads a music file.
   * @param key ID of the file
   * @param asset location of the file
   */
  public preload(key: string, asset: string) {
    const audio: IAudio = {
      key,
      asset
    };

    this._nativeAudio.preloadSimple(key, asset);
    this._sounds.push(audio);
  }
}
