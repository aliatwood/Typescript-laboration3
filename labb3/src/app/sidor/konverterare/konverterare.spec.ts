import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Konverterare } from './konverterare';

describe('Konverterare', () => {
  let component: Konverterare;
  let fixture: ComponentFixture<Konverterare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Konverterare],
    }).compileComponents();

    fixture = TestBed.createComponent(Konverterare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
