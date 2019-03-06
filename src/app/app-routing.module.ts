import { PassportComponent } from './pages/passport/passport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/passport/login/login.component';
import { DefaultComponent } from './pages/default/default.component';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
