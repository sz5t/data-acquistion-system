import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_INITIALIZER} from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './pages/passport/login/login.component';
import { PassportComponent } from './pages/passport/passport.component';
import { DefaultComponent } from './pages/default/default.component';
// import { ApiService } from './core/services/api-service';
// import { DefaultInterceptor } from './core/net/default.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpService } from './core/services/http.service';
// import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    PagesModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
