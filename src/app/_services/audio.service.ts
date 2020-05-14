import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

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
    private _nativeAudio: NativeAudio
  ) {
    this.platform.ready().then(() => {
      this.preload('1', 'assets/sounds/love.mp3');
    });
  }

  public play(key: string) {

    const audio: IAudio = this._sounds.find((sound: IAudio) => sound.key === key);
    console.log('audio', audio);

    this._nativeAudio.play(key)
      .then((success) => console.log(success))
      .catch((e) => console.log(e));
  }

  public preload(key: string, asset: string) {
    const audio: IAudio = {
      key,
      asset
    };

    this._nativeAudio.preloadSimple(key, asset);
    this._sounds.push(audio);
  }
}
