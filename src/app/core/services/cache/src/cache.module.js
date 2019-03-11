/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DC_STORE_STORAGE_TOKEN } from './src/interface';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './src/cache.service';
import { LocalStorageCacheService } from './src/local-storage-cache.service';
var DelonCacheModule = /** @class */ (function () {
    function DelonCacheModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    DelonCacheModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: DelonCacheModule,
            providers: [
                DelonCacheConfig,
                CacheService,
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
            ],
        };
    };
    DelonCacheModule.decorators = [
        { type: NgModule, args: [{},] },
    ];
    return DelonCacheModule;
}());
export { DelonCacheModule };
//# sourceMappingURL=cache.module.js.map