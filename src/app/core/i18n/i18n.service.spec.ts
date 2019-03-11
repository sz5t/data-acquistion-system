import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { I18NService } from './i18n.service';
import { SettingsService } from '../services/settings/settings.service';
import { HttpLoaderFactory } from '../../app.module';



describe('Service: I18n', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [I18NService, SettingsService]
        });
    });

    it('should create an instance', inject([I18NService], (service: I18NService) => {
        expect(service).toBeTruthy();
    }));
});
