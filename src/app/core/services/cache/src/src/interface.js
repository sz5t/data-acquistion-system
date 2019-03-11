/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function ICache() { }
/** @type {?} */
ICache.prototype.v;
/**
 * 过期时间戳，`0` 表示不过期
 * @type {?}
 */
ICache.prototype.e;
/** @type {?} */
export var DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN');
/**
 * @record
 */
export function ICacheStore() { }
/** @type {?} */
ICacheStore.prototype.get;
/** @type {?} */
ICacheStore.prototype.set;
/** @type {?} */
ICacheStore.prototype.remove;
/** @typedef {?} */
var CacheNotifyType;
export { CacheNotifyType };
/**
 * @record
 */
export function CacheNotifyResult() { }
/** @type {?} */
CacheNotifyResult.prototype.type;
/** @type {?|undefined} */
CacheNotifyResult.prototype.value;
//# sourceMappingURL=interface.js.map