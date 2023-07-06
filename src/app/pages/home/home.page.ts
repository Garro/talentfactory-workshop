import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.i';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public displayList: Country[] = [];

  constructor(private countryService: CountryService) {}

  async ngOnInit(): Promise<void> {
    await this.countryService.fetchCountries();
    this.getCountryList();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getCountryList(): void {
    this.displayList = this.countryService.getCountries();
  }

  searchFilter(event: any) {
    // Connect this fuction with component and filter coutries.
  }
}
