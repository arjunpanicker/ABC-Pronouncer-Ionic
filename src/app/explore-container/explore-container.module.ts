import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThrottleClickDirective } from '../_services/directives/debounce-click.directive';
import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, ThrottleClickDirective],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule { }
