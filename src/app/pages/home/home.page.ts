import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.i';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private countryService: CountryService) {
    this.countryService.fetchCountries();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getCountryList(): Country[] {
    return this.countryService.getCountries();
  }
}
