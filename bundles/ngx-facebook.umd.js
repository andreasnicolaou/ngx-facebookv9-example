(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-facebook', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-facebook'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @hidden
     */
    function FBMLAttribute(target, key) {
        var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
        Object.defineProperty(target, key, {
            set: function (value) {
                value = value.toString();
                this.setAttribute(processKey(key), value);
            },
            get: function () {
                return this.getAttribute(processKey(key));
            },
            enumerable: true
        });
    }
    /**
     * @hidden
     */
    function FBMLInstanceMethod(target, key) {
        return {
            enumerable: true,
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this._instance) {
                    return this._instance[key].apply(this._instance, args);
                }
                else {
                    console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                    return null;
                }
            }
        };
    }
    /**
     * @hidden
     */
    var FBMLComponent = /** @class */ (function () {
        function FBMLComponent(el, rnd, fbClass) {
            this.el = el;
            this.rnd = rnd;
            this.fbClass = fbClass;
            this.nativeElement = this.el.nativeElement;
            this.rnd.addClass(this.nativeElement, this.fbClass);
        }
        FBMLComponent.prototype.setAttribute = function (name, value) {
            if (!name || !value)
                return;
            this.rnd.setAttribute(this.nativeElement, name, value);
        };
        FBMLComponent.prototype.getAttribute = function (name) {
            if (!name)
                return;
            return this.nativeElement.getAttribute(name);
        };
        return FBMLComponent;
    }());

    /**
     * @name Embedded Comments
     * @shortdesc Embedded comments component
     * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
     * @description
     * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
     * Only public comments from Facebook Pages and profiles can be embedded.
     * @usage
     * ```html
     * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
     * ```
     */
    var FBCommentEmbedComponent = /** @class */ (function (_super) {
        __extends(FBCommentEmbedComponent, _super);
        function FBCommentEmbedComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-comment-embed') || this;
        }
        FBCommentEmbedComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentEmbedComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentEmbedComponent.prototype, "width", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentEmbedComponent.prototype, "includeParent", void 0);
        FBCommentEmbedComponent = __decorate([
            core.Component({
                selector: 'fb-comment-embed',
                template: ''
            })
        ], FBCommentEmbedComponent);
        return FBCommentEmbedComponent;
    }(FBMLComponent));

    /**
     * @name Comments
     * @shortdesc Comments component
     * @fbdoc https://developers.facebook.com/docs/plugins/comments
     * @description
     * The comments plugin lets people comment on content on your site using their Facebook account.
     * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
     * The comments plugin also includes built-in moderation tools and social relevance ranking.
     *
     * @usage
     * ```html
     * <fb-comments></fb-comments>
     * ```
     */
    var FBCommentsComponent = /** @class */ (function (_super) {
        __extends(FBCommentsComponent, _super);
        function FBCommentsComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-comments') || this;
            /**
             * The absolute URL that comments posted in the plugin will be permanently associated with.
             * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
             * Defaults to current URL.
             */
            _this.href = window.location.href;
            return _this;
        }
        FBCommentsComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "colorscheme", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "mobile", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "numposts", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "orderBy", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBCommentsComponent.prototype, "width", void 0);
        FBCommentsComponent = __decorate([
            core.Component({
                selector: 'fb-comments',
                template: ''
            })
        ], FBCommentsComponent);
        return FBCommentsComponent;
    }(FBMLComponent));

    /**
     * @name Follow Button
     * @shortdesc Follow button component
     * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
     * @description The Follow button lets people subscribe to the public updates of others on Facebook.
     * @usage
     * ```html
     * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
     * ```
     */
    var FBFollowComponent = /** @class */ (function (_super) {
        __extends(FBFollowComponent, _super);
        function FBFollowComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-follow') || this;
        }
        FBFollowComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "colorScheme", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "kidDirectedSite", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "layout", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "showFaces", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "size", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBFollowComponent.prototype, "width", void 0);
        FBFollowComponent = __decorate([
            core.Component({
                selector: 'fb-follow',
                template: ''
            })
        ], FBFollowComponent);
        return FBFollowComponent;
    }(FBMLComponent));

    /**
     * @name Like Button
     * @shortdesc Like button component
     * @fbdoc https://developers.facebook.com/docs/plugins/like-button
     * @description
     * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
     * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
     * @usage
     * ```html
     * <fb-like href="https://www.facebook.com/zuck"></fb-like>
     * ```
     */
    var FBLikeComponent = /** @class */ (function (_super) {
        __extends(FBLikeComponent, _super);
        function FBLikeComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-like') || this;
            /**
             * The absolute URL of the page that will be liked.
             * Defaults to the current URL.
             */
            _this.href = window.location.href;
            return _this;
        }
        FBLikeComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "action", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "colorScheme", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "kidDirectedSite", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "layout", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "ref", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "share", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "showFaces", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "size", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBLikeComponent.prototype, "width", void 0);
        FBLikeComponent = __decorate([
            core.Component({
                selector: 'fb-like',
                template: ''
            })
        ], FBLikeComponent);
        return FBLikeComponent;
    }(FBMLComponent));

    /**
     * @name Page Plugin
     * @shortdesc Page plugin component
     * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
     * @description
     * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
     * @usage
     * ```html
     * <fb-page href="https://facebook.com/facebook"></fb-page>
     * ```
     */
    var FBPageComponent = /** @class */ (function (_super) {
        __extends(FBPageComponent, _super);
        function FBPageComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-page') || this;
        }
        FBPageComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "width", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "height", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "tabs", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "hideCover", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "showFacepile", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "hideCTA", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "smallHeader", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPageComponent.prototype, "adaptContainerWidth", void 0);
        FBPageComponent = __decorate([
            core.Component({
                selector: 'fb-page',
                template: ''
            })
        ], FBPageComponent);
        return FBPageComponent;
    }(FBMLComponent));

    /**
     * @name Embedded Posts
     * @shortdesc Embedded post component
     * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
     * @description
     * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
     * Only public posts from Facebook Pages and profiles can be embedded.
     * @usage
     * ```html
     * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
     * ```
     */
    var FBPostComponent = /** @class */ (function (_super) {
        __extends(FBPostComponent, _super);
        function FBPostComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-post') || this;
        }
        FBPostComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPostComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPostComponent.prototype, "width", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBPostComponent.prototype, "showText", void 0);
        FBPostComponent = __decorate([
            core.Component({
                selector: 'fb-post',
                template: ''
            })
        ], FBPostComponent);
        return FBPostComponent;
    }(FBMLComponent));

    /**
     * @name Quote Plugin
     * @shortdesc Quote plugin component
     * @fbdoc https://developers.facebook.com/docs/plugins/quote
     * @description
     * The quote plugin lets people select text on your page and add it to their share, so they can tell a more expressive story.
     * Note that you do not need to implement Facebook login or request any additional permissions through app review in order to use this plugin.
     * @usage
     * ```html
     * <fb-quote></fb-quote>
     * ```
     */
    var FBQuoteComponent = /** @class */ (function (_super) {
        __extends(FBQuoteComponent, _super);
        function FBQuoteComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-quote') || this;
        }
        FBQuoteComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBQuoteComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBQuoteComponent.prototype, "layout", void 0);
        FBQuoteComponent = __decorate([
            core.Component({
                selector: 'fb-quote',
                template: ''
            })
        ], FBQuoteComponent);
        return FBQuoteComponent;
    }(FBMLComponent));

    /**
     * @name Save Button
     * @shortdesc Save button component.
     * @fbdoc https://developers.facebook.com/docs/plugins/save
     * @description
     * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
     * @usage
     * ```html
     * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
     * ```
     */
    var FBSaveComponent = /** @class */ (function (_super) {
        __extends(FBSaveComponent, _super);
        function FBSaveComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-save') || this;
            /**
             * The absolute link of the page that will be saved.
             * Current Link/Address
             */
            _this.uri = window.location.href;
            return _this;
        }
        FBSaveComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSaveComponent.prototype, "uri", void 0);
        FBSaveComponent = __decorate([
            core.Component({
                selector: 'fb-save',
                template: ''
            })
        ], FBSaveComponent);
        return FBSaveComponent;
    }(FBMLComponent));

    /**
     * @name Send Button
     * @shortdesc Send button component
     * @fbdoc https://developers.facebook.com/docs/plugins/send-button
     * @description
     * The Send button lets people privately send content on your site to one or more friends in a Facebook message.
     * @usage
     * ```html
     * <fb-send href="https://github.com/zyra/ng2-facebook-sdk/"></fb-send>
     * ```
     */
    var FBSendComponent = /** @class */ (function (_super) {
        __extends(FBSendComponent, _super);
        function FBSendComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-send') || this;
            /**
             * The absolute URL of the page that will be sent. Defaults to the current URL.
             */
            _this.href = window.location.href;
            return _this;
        }
        FBSendComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSendComponent.prototype, "colorScheme", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSendComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSendComponent.prototype, "kidDirectedSite", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSendComponent.prototype, "ref", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBSendComponent.prototype, "size", void 0);
        FBSendComponent = __decorate([
            core.Component({
                selector: 'fb-send',
                template: ''
            })
        ], FBSendComponent);
        return FBSendComponent;
    }(FBMLComponent));

    /**
     * @name Share Button
     * @shortdesc Share button component
     * @fbdoc https://developers.facebook.com/docs/plugins/share-button
     * @description
     * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
     * @usage
     * ```html
     * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
     * ```
     */
    var FBShareComponent = /** @class */ (function (_super) {
        __extends(FBShareComponent, _super);
        function FBShareComponent(el, rnd) {
            return _super.call(this, el, rnd, 'fb-share-button') || this;
        }
        FBShareComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBShareComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBShareComponent.prototype, "layout", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBShareComponent.prototype, "mobileIframe", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBShareComponent.prototype, "size", void 0);
        FBShareComponent = __decorate([
            core.Component({
                selector: 'fb-share',
                template: ''
            })
        ], FBShareComponent);
        return FBShareComponent;
    }(FBMLComponent));

    /**
     * @name Embedded Video
     * @shortdesc Component to embed Facebook videos
     * @fbdoc https://developers.facebook.com/docs/plugins/embedded-video-player
     * @description Component to embed Facebook videos and control them.
     * @usage
     * ```html
     * <!-- basic usage -->
     * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
     *
     * <!-- event emitters -->
     * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
     * ```
     *
     * To manually interact with the video player, fetch it using `ViewChild`.
     *
     * ```ts
     * import { Component, ViewChild } from '@angular/core';
     * import { FBVideoComponent } from 'ng2-facebook-sdk';
     *
     * @Component(...)
     * export class MyComponent {
     *
     *   @ViewChild(FBVideoComponent) video: FBVideoComponent;
     *
     *   ngAfterViewInit() {
     *     this.video.play();
     *     this.video.pause();
     *     this.video.getVolume();
     *   }
     *
     * }
     *
     * ```
     */
    var FBVideoComponent = /** @class */ (function (_super) {
        __extends(FBVideoComponent, _super);
        function FBVideoComponent(el, rnd) {
            var _this = _super.call(this, el, rnd, 'fb-video') || this;
            /**
             * Fired when video starts to play.
             */
            _this.startedPlaying = new core.EventEmitter();
            /**
             * Fired when video pauses.
             */
            _this.paused = new core.EventEmitter();
            /**
             *
             Fired when video finishes playing.
             */
            _this.finishedPlaying = new core.EventEmitter();
            /**
             * Fired when video starts to buffer.
             */
            _this.startedBuffering = new core.EventEmitter();
            /**
             * Fired when video recovers from buffering.
             */
            _this.finishedBuffering = new core.EventEmitter();
            /**
             * Fired when an error occurs on the video.
             */
            _this.error = new core.EventEmitter();
            _this._listeners = [];
            _this.nativeElement.id = _this._id = 'video-' + String(Math.floor((Math.random() * 10000) + 1));
            return _this;
        }
        /**
         * @hidden
         */
        FBVideoComponent.prototype.ngOnInit = function () {
            var _this = this;
            FB.Event.subscribe('xfbml.ready', function (msg) {
                if (msg.type === 'video' && msg.id === _this._id) {
                    _this._instance = msg.instance;
                    _this._listeners.push(_this._instance.subscribe('startedPlaying', function (e) { return _this.startedPlaying.emit(e); }), _this._instance.subscribe('paused', function (e) { return _this.paused.emit(e); }), _this._instance.subscribe('finishedPlaying', function (e) { return _this.finishedPlaying.emit(e); }), _this._instance.subscribe('startedBuffering', function (e) { return _this.startedBuffering.emit(e); }), _this._instance.subscribe('finishedBuffering', function (e) { return _this.finishedBuffering.emit(e); }), _this._instance.subscribe('error', function (e) { return _this.error.emit(e); }));
                }
            });
        };
        /**
         * @hidden
         */
        FBVideoComponent.prototype.ngOnDestroy = function () {
            this._listeners.forEach(function (l) {
                if (typeof l.release === 'function') {
                    l.release();
                }
            });
        };
        /**
         * Plays the video.
         */
        FBVideoComponent.prototype.play = function () { };
        /**
         * Pauses the video.
         */
        FBVideoComponent.prototype.pause = function () { };
        /**
         * Seeks to specified position.
         * @param seconds {number}
         */
        FBVideoComponent.prototype.seek = function (seconds) { };
        /**
         * Mute the video.
         */
        FBVideoComponent.prototype.mute = function () { };
        /**
         * Unmute the video.
         */
        FBVideoComponent.prototype.unmute = function () { };
        /**
         * Returns true if video is muted, false if not.
         */
        FBVideoComponent.prototype.isMuted = function () { return; };
        /**
         * Set the volume
         * @param volume
         */
        FBVideoComponent.prototype.setVolume = function (volume) { };
        /**
         * Get the volume
         */
        FBVideoComponent.prototype.getVolume = function () { return; };
        /**
         * Returns the current video time position in seconds
         */
        FBVideoComponent.prototype.getCurrentPosition = function () { };
        /**
         * Returns the video duration in seconds
         */
        FBVideoComponent.prototype.getDuration = function () { };
        FBVideoComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "href", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "allowfullscreen", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "autoplay", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "width", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "showText", void 0);
        __decorate([
            core.Input(),
            FBMLAttribute
        ], FBVideoComponent.prototype, "showCaptions", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "startedPlaying", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "paused", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "finishedPlaying", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "startedBuffering", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "finishedBuffering", void 0);
        __decorate([
            core.Output()
        ], FBVideoComponent.prototype, "error", void 0);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "play", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "pause", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "seek", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "mute", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "unmute", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "isMuted", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "setVolume", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "getVolume", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "getCurrentPosition", null);
        __decorate([
            FBMLInstanceMethod
        ], FBVideoComponent.prototype, "getDuration", null);
        FBVideoComponent = __decorate([
            core.Component({
                selector: 'fb-video',
                template: ''
            })
        ], FBVideoComponent);
        return FBVideoComponent;
    }(FBMLComponent));

    /**
     * @shortdesc
     * Angular 2 service to inject to use Facebook's SDK
     * @description
     * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
     * @usage
     * ```typescript
     * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
     *
     * constructor(private fb: FacebookService) {
     *
     *   const params: InitParams = {
     *
     *   };
     *
     *   fb.init(params);
     *
     * }
     * ```
     */
    var FacebookService = /** @class */ (function () {
        function FacebookService() {
        }
        /**
         * This method is used to initialize and setup the SDK.
         * @param params {InitParams} Initialization parameters
         * @returns {Promise<any>}
         */
        FacebookService.prototype.init = function (params) {
            try {
                return Promise.resolve(FB.init(params));
            }
            catch (e) {
                return Promise.reject(e);
            }
        };
        /**
         * This method lets you make calls to the Graph API
         * @usage
         * ```typescript
         * this.fb.api('somepath')
         *   .then(res => console.log(res))
         *   .catch(e => console.log(e));
         * ```
         * @param path {string} The Graph API endpoint path that you want to call.
         * @param [method=get] {string} The HTTP method that you want to use for the API request.
         * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
         * @returns {Promise<any>}
         */
        FacebookService.prototype.api = function (path, method, params) {
            if (method === void 0) { method = 'get'; }
            if (params === void 0) { params = {}; }
            return new Promise(function (resolve, reject) {
                try {
                    FB.api(path, method, params, function (response) {
                        if (!response) {
                            reject();
                        }
                        else if (response.error) {
                            reject(response.error);
                        }
                        else {
                            resolve(response);
                        }
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        /**
         * This method is used to trigger different forms of Facebook created UI dialogs.
         * These dialogs include:
         * - Share dialog
         * - Login dialog
         * - Add page tab dialog
         * - Requests dialog
         * - Send dialog
         * - Payments dialog
         * - Go Live dialog
         * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
         * @returns {Promise<UIResponse>}
         */
        FacebookService.prototype.ui = function (params) {
            return new Promise(function (resolve, reject) {
                try {
                    FB.ui(params, function (response) {
                        if (!response)
                            reject();
                        else if (response.error)
                            reject(response.error);
                        else
                            resolve(response);
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        /**
         * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
         * @param [forceFreshResponse=false] {boolean} Force a fresh response.
         * @returns {Promise<LoginStatus>}
         */
        FacebookService.prototype.getLoginStatus = function (forceFreshResponse) {
            return new Promise(function (resolve, reject) {
                try {
                    FB.getLoginStatus(function (response) {
                        if (!response) {
                            reject();
                        }
                        else {
                            resolve(response);
                        }
                    }, forceFreshResponse);
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        /**
         * Login the user
         * @usage
         * ```typescript
         * // login without options
         * this.fb.login()
         *   .then((response: LoginResponse) => console.log('Logged in', response))
         *   .catch(e => console.error('Error logging in'));
         *
         * // login with options
         * const options: LoginOptions = {
         *   scope: 'public_profile,user_friends,email,pages_show_list',
         *   return_scopes: true,
         *   enable_profile_selector: true
         * };
         * this.fb.login(options)
         *   .then(...)
         *   .catch(...);
         * ```
         * @param [options] {LoginOptions} Login options
         * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
         */
        FacebookService.prototype.login = function (options) {
            return new Promise(function (resolve, reject) {
                try {
                    FB.login(function (response) {
                        if (response.authResponse) {
                            resolve(response);
                        }
                        else {
                            reject();
                        }
                    }, options);
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        /**
         * Logout the user
         * @usage
         * ```typescript
         * this.fb.logout().then(() => console.log('Logged out!'));
         * ```
         * @returns {Promise<any>} returns a promise that resolves when the user is logged out
         */
        FacebookService.prototype.logout = function () {
            return new Promise(function (resolve, reject) {
                try {
                    FB.logout(function (response) {
                        resolve(response);
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        };
        /**
         * This synchronous function returns back the current authResponse.
         * @usage
         * ```typescript
         * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
         *
         * ...
         *
         * const authResponse: AuthResponse = this.fb.getAuthResponse();
         * ```
         * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
         */
        FacebookService.prototype.getAuthResponse = function () {
            try {
                return FB.getAuthResponse();
            }
            catch (e) {
                console.error('ng2-facebook-sdk: ', e);
            }
        };
        FacebookService = __decorate([
            core.Injectable()
        ], FacebookService);
        return FacebookService;
    }());

    var components = [
        FBCommentEmbedComponent,
        FBCommentsComponent,
        FBFollowComponent,
        FBLikeComponent,
        FBPageComponent,
        FBPostComponent,
        FBQuoteComponent,
        FBSaveComponent,
        FBSendComponent,
        FBShareComponent,
        FBVideoComponent
    ];
    function getComponents() {
        return components;
    }
    /**
     * @shortdesc The module to import to add this library
     * @description
     * The main module to import into your application.
     * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
     * This module will make all components and providers available in your application.
     *
     * @usage
     * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
     *
     * ```typescript
     * import { FacebookModule } from 'ng2-facebook-sdk';
     *
     * @NgModule({
     *   ...
     *   imports: [
     *     ...
     *     FacebookModule.forRoot()
     *   ],
     *   ...
     * })
     * export class AppModule { }
     * ```
     */
    var FacebookModule = /** @class */ (function () {
        function FacebookModule() {
        }
        FacebookModule_1 = FacebookModule;
        FacebookModule.forRoot = function () {
            return {
                ngModule: FacebookModule_1,
                providers: [FacebookService]
            };
        };
        var FacebookModule_1;
        FacebookModule = FacebookModule_1 = __decorate([
            core.NgModule({
                declarations: getComponents(),
                exports: getComponents()
            })
        ], FacebookModule);
        return FacebookModule;
    }());

    exports.FBCommentEmbedComponent = FBCommentEmbedComponent;
    exports.FBCommentsComponent = FBCommentsComponent;
    exports.FBFollowComponent = FBFollowComponent;
    exports.FBLikeComponent = FBLikeComponent;
    exports.FBPageComponent = FBPageComponent;
    exports.FBPostComponent = FBPostComponent;
    exports.FBQuoteComponent = FBQuoteComponent;
    exports.FBSaveComponent = FBSaveComponent;
    exports.FBSendComponent = FBSendComponent;
    exports.FBShareComponent = FBShareComponent;
    exports.FBVideoComponent = FBVideoComponent;
    exports.FacebookModule = FacebookModule;
    exports.FacebookService = FacebookService;
    exports.ɵa = getComponents;
    exports.ɵb = FBMLAttribute;
    exports.ɵc = FBMLInstanceMethod;
    exports.ɵd = FBMLComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-facebook.umd.js.map
