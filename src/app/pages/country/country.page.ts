import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.i';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  public country!: Country;
  private countryService = inject(CountryService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const country = this.countryService.getCountryByCCA3(id);

    if (country) {
      this.country = country;
    }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Back' : '';
  }
}
