import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Startsida } from './startsida';

describe('Startsida', () => {
  let component: Startsida;
  let fixture: ComponentFixture<Startsida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startsida],
    }).compileComponents();

    fixture = TestBed.createComponent(Startsida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
