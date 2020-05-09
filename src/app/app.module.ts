import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { TextToSpeechService } from './_services/utility_Services/text-to-speech.service';
import { DebounceClickDirective } from './_services/directives/debounce-click.directive';

@NgModule({
  declarations: [AppComponent, DebounceClickDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TextToSpeech,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
