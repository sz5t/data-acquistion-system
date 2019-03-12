import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AppComponent } from '../app.component';
import { LoginComponent } from './passport/login/login.component';
import { PassportComponent } from './passport/passport.component';
import { DefaultComponent } from './default/default.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassportComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
