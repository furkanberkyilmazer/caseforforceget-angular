import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/offer-list', pathMatch: 'full' },
  { path: 'offer-list', component: OfferListComponent },
  { path: 'offer-add', component: OfferAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
