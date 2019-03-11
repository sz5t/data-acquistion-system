/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var DA_SERVICE_TOKEN = new InjectionToken('DELON_AUTH_TOKEN_SERVICE_TOKEN');
/**
 * @record
 */
export function ITokenModel() { }
/* TODO: handle strange member:
[key: string]: any;
*/
/** @type {?} */
ITokenModel.prototype.token;
/**
 * @record
 */
export function ITokenService() { }
/** @type {?} */
ITokenService.prototype.set;
/**
 * 获取Token，形式包括：
 * - `get()` 获取 Simple Token
 * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
 * @type {?}
 */
ITokenService.prototype.get;
/**
 * 获取Token，形式包括：
 * - `get()` 获取 Simple Token
 * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
 * @type {?}
 */
ITokenService.prototype.get;
/** @type {?} */
ITokenService.prototype.clear;
/** @type {?} */
ITokenService.prototype.change;
/**
 * 获取登录地址
 * @type {?}
 */
ITokenService.prototype.login_url;
/**
 * 登录后跳转地址，未指定时返回 `/`
 * @type {?}
 */
ITokenService.prototype.redirect;
//# sourceMappingURL=interface.js.map