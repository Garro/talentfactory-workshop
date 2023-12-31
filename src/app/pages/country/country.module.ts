import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryPage } from './country.page';

import { IonicModule } from '@ionic/angular';

import { CountryPageRoutingModule } from './country-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CountryPageRoutingModule],
  declarations: [CountryPage],
})
export class CountryPageModule {}
