import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './components/market/market.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  { path: 'item/all', component: MarketComponent },
  { path: 'authentication/signUp', component: RegistrationComponent },
  { path: 'authentication/signIn/:username', component: HomeComponent },
  {path: 'item/sell', component: NewItemComponent},
  {path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
