import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country.i';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url = `${environment.domain.protocol}://${environment.domain.host}/${environment.domain.routes.all}`;
  private coutries!: Country[];

  constructor(private httpService: HttpService) {}

  public getCountries() {
    return this.coutries;
  }

  public getCountryByCCA3(cca3: string) {
    if (this.coutries) {
      return this.coutries.find((value) => value.cca3 == cca3);
    }
    // How to return countries if this.countries is undefied?
    return;
  }

  public async fetchCountries() {
    this.coutries = await this.httpService.request(this.url);
  }
}
