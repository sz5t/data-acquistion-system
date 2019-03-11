/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as addSeconds from 'date-fns/add_seconds';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { DC_STORE_STORAGE_TOKEN, } from './interface';
import { DelonCacheConfig } from '../cache.config';
var CacheService = /** @class */ (function () {
    function CacheService(options, store, http) {
        this.options = options;
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freq_tick = 3000;
        this.loadMeta();
        this.startExpireNotify();
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    CacheService.prototype._deepGet = /**
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    function (obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            var checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce(function (o, k) { return o[k]; }, obj) || defaultValue;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.pushMeta = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.removeMeta = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    };
    /**
     * @return {?}
     */
    CacheService.prototype.loadMeta = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ret = this.store.get(this.options.meta_key);
        if (ret && ret.v) {
            (/** @type {?} */ (ret.v)).forEach(function (key) { return _this.meta.add(key); });
        }
    };
    /**
     * @return {?}
     */
    CacheService.prototype.saveMeta = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var metaData = [];
        this.meta.forEach(function (key) { return metaData.push(key); });
        this.store.set(this.options.meta_key, { v: metaData, e: 0 });
    };
    /**
     * @return {?}
     */
    CacheService.prototype.getMeta = /**
     * @return {?}
     */
    function () {
        return this.meta;
    };
    /**
     * 缓存对象
     */
    /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.set = /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var e = 0;
        if (options.expire) {
            e = addSeconds(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save(options.type, key, { v: data, e: e });
            return;
        }
        return data.pipe(tap(function (v) {
            _this.save(options.type, key, { v: v, e: e });
        }));
    };
    /**
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CacheService.prototype.save = /**
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (type, key, value) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.options.prefix + key, value);
            this.pushMeta(key);
        }
        this.runNotify(key, 'set');
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.get = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var isPromise = options.mode !== 'none' && this.options.mode === 'promise';
        /** @type {?} */
        var value = this.memory.has(key)
            ? this.memory.get(key)
            : this.store.get(this.options.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http
                    .get(key)
                    .pipe(map(function (ret) {
                    return _this._deepGet(ret, /** @type {?} */ (_this.options.reName), null);
                }), tap(function (v) { return _this.set(key, v); }));
            }
            return null;
        }
        return isPromise ? of(value.v) : value.v;
    };
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.getNone = /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.get(key, { mode: 'none' });
    };
    /**
     * 获取缓存，若不存在则设置缓存对象
     */
    /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.tryGet = /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof Observable)) {
                this.set(key, data, /** @type {?} */ (options));
                return data;
            }
            return this.set(key, /** @type {?} */ (data), /** @type {?} */ (options));
        }
        return of(ret);
    };
    // endregion
    // region: has
    /** 是否缓存 `key` */
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.has = /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.memory.has(key) || this.meta.has(key);
    };
    /**
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    CacheService.prototype._remove = /**
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    function (key, needNotify) {
        if (needNotify)
            this.runNotify(key, 'remove');
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
        }
        this.store.remove(this.options.prefix + key);
        this.removeMeta(key);
    };
    /** 移除缓存 */
    /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.remove = /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this._remove(key, true);
    };
    /** 清空所有缓存 */
    /**
     * 清空所有缓存
     * @return {?}
     */
    CacheService.prototype.clear = /**
     * 清空所有缓存
     * @return {?}
     */
    function () {
        var _this = this;
        this.notifyBuffer.forEach(function (v, k) { return _this.runNotify(k, 'remove'); });
        this.memory.clear();
        this.meta.forEach(function (key) { return _this.store.remove(_this.options.prefix + key); });
    };
    Object.defineProperty(CacheService.prototype, "freq", {
        // endregion
        // region: notify
        /**
         * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
         */
        set: /**
         * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.freq_tick = Math.max(20, value);
            this.abortExpireNotify();
            this.startExpireNotify();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CacheService.prototype.startExpireNotify = /**
     * @return {?}
     */
    function () {
        this.checkExpireNotify();
        this.runExpireNotify();
    };
    /**
     * @return {?}
     */
    CacheService.prototype.runExpireNotify = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.freq_time = setTimeout(function () {
            _this.checkExpireNotify();
            _this.runExpireNotify();
        }, this.freq_tick);
    };
    /**
     * @return {?}
     */
    CacheService.prototype.checkExpireNotify = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var removed = [];
        this.notifyBuffer.forEach(function (v, key) {
            if (_this.has(key) && _this.getNone(key) === null)
                removed.push(key);
        });
        removed.forEach(function (key) {
            _this.runNotify(key, 'expire');
            _this._remove(key, false);
        });
    };
    /**
     * @return {?}
     */
    CacheService.prototype.abortExpireNotify = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.freq_time);
    };
    /**
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    CacheService.prototype.runNotify = /**
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    function (key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).next({ type: type, value: this.getNone(key) });
    };
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     */
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.notify = /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            var change$ = new BehaviorSubject(this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return this.notifyBuffer.get(key).asObservable();
    };
    /**
     * 取消 `key` 监听
     */
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.cancelNotify = /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).unsubscribe();
        this.notifyBuffer.delete(key);
    };
    /** `key` 是否已经监听 */
    /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.hasNotify = /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.notifyBuffer.has(key);
    };
    /** 清空所有 `key` 的监听 */
    /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    CacheService.prototype.clearNotify = /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    function () {
        this.notifyBuffer.forEach(function (v) { return v.unsubscribe(); });
        this.notifyBuffer.clear();
    };
    // endregion
    /**
     * @return {?}
     */
    CacheService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    };
    CacheService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CacheService.ctorParameters = function () { return [
        { type: DelonCacheConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: HttpClient }
    ]; };
    return CacheService;
}());
export { CacheService };
if (false) {
    /** @type {?} */
    CacheService.prototype.memory;
    /** @type {?} */
    CacheService.prototype.notifyBuffer;
    /** @type {?} */
    CacheService.prototype.meta;
    /** @type {?} */
    CacheService.prototype.freq_tick;
    /** @type {?} */
    CacheService.prototype.freq_time;
    /** @type {?} */
    CacheService.prototype.options;
    /** @type {?} */
    CacheService.prototype.store;
    /** @type {?} */
    CacheService.prototype.http;
}
//# sourceMappingURL=cache.service.js.map