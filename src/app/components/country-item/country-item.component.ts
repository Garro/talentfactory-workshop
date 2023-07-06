import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Country } from '../../interfaces/country.i';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryItemComponent {
  private platform = inject(Platform);

  @Input() country?: Country;

  isIos() {
    return this.platform.is('ios');
  }
}
