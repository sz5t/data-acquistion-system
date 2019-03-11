/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
var LAYOUT_KEY = 'layout';
/** @type {?} */
var USER_KEY = 'user';
/** @type {?} */
var APP_KEY = 'app';
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SettingsService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    Object.defineProperty(SettingsService.prototype, "layout", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._layout) {
                this._layout = Object.assign(/** @type {?} */ ({
                    fixed: true,
                    collapsed: false,
                    boxed: false,
                    lang: null,
                }), this.get(LAYOUT_KEY));
                this.set(LAYOUT_KEY, this._layout);
            }
            return this._layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "app", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._app) {
                this._app = Object.assign(/** @type {?} */ ({
                    year: new Date().getFullYear(),
                }), this.get(APP_KEY));
                this.set(APP_KEY, this._app);
            }
            return this._app;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "user", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._user) {
                this._user = Object.assign(/** @type {?} */ ({}), this.get(USER_KEY));
                this.set(USER_KEY, this._user);
            }
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.setLayout = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            this.layout[name] = value;
            this.set(LAYOUT_KEY, this._layout);
            return true;
        }
        return false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SettingsService.prototype.setApp = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._app = val;
        this.set(APP_KEY, val);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SettingsService.prototype.setUser = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._user = val;
        this.set(USER_KEY, val);
    };
    SettingsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ SettingsService.ngInjectableDef = i0.defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
    return SettingsService;
}());
export { SettingsService };
if (false) {
    /** @type {?} */
    SettingsService.prototype._app;
    /** @type {?} */
    SettingsService.prototype._user;
    /** @type {?} */
    SettingsService.prototype._layout;
}
//# sourceMappingURL=settings.service.js.map