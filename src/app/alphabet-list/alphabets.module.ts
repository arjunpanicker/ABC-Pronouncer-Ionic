import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AlphabetsPageRoutingModule } from './alphabets-routing.module';
import { AlphabetsPage } from './alphabets.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AlphabetsPageRoutingModule
  ],
  declarations: [AlphabetsPage]
})
export class AlphabetsPageModule {}
