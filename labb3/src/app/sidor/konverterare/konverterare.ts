import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-konverterare',
  templateUrl: './konverterare.html',
  styleUrls: ['./konverterare.css'],
  imports: [FormsModule]
})
export class KonverterareComponent {

  meter: number = 0;
  feet: number = 0;

  celsius: number = 0;
  fahrenheit: number = 0;

  meterToFeet() {
    this.feet = this.meter * 3.28084;
  }

  feetToMeter() {
    this.meter = this.feet / 3.28084;
  }

  celsiusToFahrenheit() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }

  fahrenheitToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
}