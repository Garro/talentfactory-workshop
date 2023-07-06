import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CountryItemComponent } from './country-item.component';

describe('CountryItemComponent', () => {
  let component: CountryItemComponent;
  let fixture: ComponentFixture<CountryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryItemComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
