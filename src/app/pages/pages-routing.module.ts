import { PassportComponent } from './passport/passport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './passport/login/login.component';
import { DefaultComponent } from './default/default.component';
import { environment } from 'src/environments/environment';

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
    children: [
      {
        path: 'system-setting', loadChildren: './system-setting/system-setting.module#SystemSettingModule'
      },
      {
        path: 'system-modules', loadChildren: './system-modules/system-modules.module#SystemModulesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: environment.useHash})],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
