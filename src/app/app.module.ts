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
import { ApiService } from './core/services/api-service';
import { DefaultInterceptor } from './core/net/default.interceptor';
import { StartupService } from './core/services/startup/startup.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}
export function StartupServiceFactory(
  startupService: StartupService
): Function {
  return () => startupService.load();
}
registerLocaleData(zh);

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
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DefaultInterceptor,
    multi: true
  },
    StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  },
    ApiService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
