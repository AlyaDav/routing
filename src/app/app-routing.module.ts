import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './components/market/market.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'item/all',
    component: MarketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'authentication/signUp',
    component: RegistrationComponent
  },
  {
    path: 'authentication/signIn/:username',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item/sell',
    component: NewItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**', redirectTo: ''
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
