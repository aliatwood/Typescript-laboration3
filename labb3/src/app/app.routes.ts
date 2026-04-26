import { Routes } from '@angular/router';

import { StartsidaComponent } from './sidor/startsida/startsida';
import { KonverterareComponent } from './sidor/konverterare/konverterare';
import { OmComponent } from './sidor/om/om';

export const routes: Routes = [
  { path: '', component: StartsidaComponent },
  { path: 'konverterare', component: KonverterareComponent },
  { path: 'om', component: OmComponent }
];