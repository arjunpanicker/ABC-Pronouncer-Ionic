import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen, Capacitor } from '@capacitor/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      Capacitor.Plugins.SplashScreen.hide();
    });
  }
}
