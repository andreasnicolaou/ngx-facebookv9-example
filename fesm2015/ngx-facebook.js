import { __decorate } from 'tslib';
import { ElementRef, Renderer2, Input, Component, EventEmitter, Output, Injectable, NgModule } from '@angular/core';

/**
 * @hidden
 */
function FBMLAttribute(target, key) {
    const processKey = (_k) => 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
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
        value: function (...args) {
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
class FBMLComponent {
    constructor(el, rnd, fbClass) {
        this.el = el;
        this.rnd = rnd;
        this.fbClass = fbClass;
        this.nativeElement = this.el.nativeElement;
        this.rnd.addClass(this.nativeElement, this.fbClass);
    }
    setAttribute(name, value) {
        if (!name || !value)
            return;
        this.rnd.setAttribute(this.nativeElement, name, value);
    }
    getAttribute(name) {
        if (!name)
            return;
        return this.nativeElement.getAttribute(name);
    }
}

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
let FBCommentEmbedComponent = class FBCommentEmbedComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-comment-embed');
    }
};
FBCommentEmbedComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "includeParent", void 0);
FBCommentEmbedComponent = __decorate([
    Component({
        selector: 'fb-comment-embed',
        template: ''
    })
], FBCommentEmbedComponent);

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
let FBCommentsComponent = class FBCommentsComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-comments');
        /**
         * The absolute URL that comments posted in the plugin will be permanently associated with.
         * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
         * Defaults to current URL.
         */
        this.href = window.location.href;
    }
};
FBCommentsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "colorscheme", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "mobile", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "numposts", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "orderBy", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentsComponent.prototype, "width", void 0);
FBCommentsComponent = __decorate([
    Component({
        selector: 'fb-comments',
        template: ''
    })
], FBCommentsComponent);

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
let FBFollowComponent = class FBFollowComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-follow');
    }
};
FBFollowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "colorScheme", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "layout", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "showFaces", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "size", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBFollowComponent.prototype, "width", void 0);
FBFollowComponent = __decorate([
    Component({
        selector: 'fb-follow',
        template: ''
    })
], FBFollowComponent);

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
let FBLikeComponent = class FBLikeComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-like');
        /**
         * The absolute URL of the page that will be liked.
         * Defaults to the current URL.
         */
        this.href = window.location.href;
    }
};
FBLikeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "action", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "colorScheme", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "layout", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "ref", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "share", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "showFaces", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "size", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBLikeComponent.prototype, "width", void 0);
FBLikeComponent = __decorate([
    Component({
        selector: 'fb-like',
        template: ''
    })
], FBLikeComponent);

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
let FBPageComponent = class FBPageComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-page');
    }
};
FBPageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "height", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "tabs", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "hideCover", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "showFacepile", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "hideCTA", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "smallHeader", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPageComponent.prototype, "adaptContainerWidth", void 0);
FBPageComponent = __decorate([
    Component({
        selector: 'fb-page',
        template: ''
    })
], FBPageComponent);

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
let FBPostComponent = class FBPostComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-post');
    }
};
FBPostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "showText", void 0);
FBPostComponent = __decorate([
    Component({
        selector: 'fb-post',
        template: ''
    })
], FBPostComponent);

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
let FBQuoteComponent = class FBQuoteComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-quote');
    }
};
FBQuoteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBQuoteComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBQuoteComponent.prototype, "layout", void 0);
FBQuoteComponent = __decorate([
    Component({
        selector: 'fb-quote',
        template: ''
    })
], FBQuoteComponent);

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
let FBSaveComponent = class FBSaveComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-save');
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        this.uri = window.location.href;
    }
};
FBSaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBSaveComponent.prototype, "uri", void 0);
FBSaveComponent = __decorate([
    Component({
        selector: 'fb-save',
        template: ''
    })
], FBSaveComponent);

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
let FBSendComponent = class FBSendComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-send');
        /**
         * The absolute URL of the page that will be sent. Defaults to the current URL.
         */
        this.href = window.location.href;
    }
};
FBSendComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBSendComponent.prototype, "colorScheme", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBSendComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBSendComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBSendComponent.prototype, "ref", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBSendComponent.prototype, "size", void 0);
FBSendComponent = __decorate([
    Component({
        selector: 'fb-send',
        template: ''
    })
], FBSendComponent);

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
let FBShareComponent = class FBShareComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-share-button');
    }
};
FBShareComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBShareComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBShareComponent.prototype, "layout", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBShareComponent.prototype, "mobileIframe", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBShareComponent.prototype, "size", void 0);
FBShareComponent = __decorate([
    Component({
        selector: 'fb-share',
        template: ''
    })
], FBShareComponent);

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
let FBVideoComponent = class FBVideoComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-video');
        /**
         * Fired when video starts to play.
         */
        this.startedPlaying = new EventEmitter();
        /**
         * Fired when video pauses.
         */
        this.paused = new EventEmitter();
        /**
         *
         Fired when video finishes playing.
         */
        this.finishedPlaying = new EventEmitter();
        /**
         * Fired when video starts to buffer.
         */
        this.startedBuffering = new EventEmitter();
        /**
         * Fired when video recovers from buffering.
         */
        this.finishedBuffering = new EventEmitter();
        /**
         * Fired when an error occurs on the video.
         */
        this.error = new EventEmitter();
        this._listeners = [];
        this.nativeElement.id = this._id = 'video-' + String(Math.floor((Math.random() * 10000) + 1));
    }
    /**
     * @hidden
     */
    ngOnInit() {
        FB.Event.subscribe('xfbml.ready', (msg) => {
            if (msg.type === 'video' && msg.id === this._id) {
                this._instance = msg.instance;
                this._listeners.push(this._instance.subscribe('startedPlaying', (e) => this.startedPlaying.emit(e)), this._instance.subscribe('paused', (e) => this.paused.emit(e)), this._instance.subscribe('finishedPlaying', (e) => this.finishedPlaying.emit(e)), this._instance.subscribe('startedBuffering', (e) => this.startedBuffering.emit(e)), this._instance.subscribe('finishedBuffering', (e) => this.finishedBuffering.emit(e)), this._instance.subscribe('error', (e) => this.error.emit(e)));
            }
        });
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this._listeners.forEach(l => {
            if (typeof l.release === 'function') {
                l.release();
            }
        });
    }
    /**
     * Plays the video.
     */
    play() { }
    /**
     * Pauses the video.
     */
    pause() { }
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    seek(seconds) { }
    /**
     * Mute the video.
     */
    mute() { }
    /**
     * Unmute the video.
     */
    unmute() { }
    /**
     * Returns true if video is muted, false if not.
     */
    isMuted() { return; }
    /**
     * Set the volume
     * @param volume
     */
    setVolume(volume) { }
    /**
     * Get the volume
     */
    getVolume() { return; }
    /**
     * Returns the current video time position in seconds
     */
    getCurrentPosition() { }
    /**
     * Returns the video duration in seconds
     */
    getDuration() { }
};
FBVideoComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "allowfullscreen", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "autoplay", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "showText", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBVideoComponent.prototype, "showCaptions", void 0);
__decorate([
    Output()
], FBVideoComponent.prototype, "startedPlaying", void 0);
__decorate([
    Output()
], FBVideoComponent.prototype, "paused", void 0);
__decorate([
    Output()
], FBVideoComponent.prototype, "finishedPlaying", void 0);
__decorate([
    Output()
], FBVideoComponent.prototype, "startedBuffering", void 0);
__decorate([
    Output()
], FBVideoComponent.prototype, "finishedBuffering", void 0);
__decorate([
    Output()
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
    Component({
        selector: 'fb-video',
        template: ''
    })
], FBVideoComponent);

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
let FacebookService = class FacebookService {
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    init(params) {
        try {
            return Promise.resolve(FB.init(params));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
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
    api(path, method = 'get', params = {}) {
        return new Promise((resolve, reject) => {
            try {
                FB.api(path, method, params, (response) => {
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
    }
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
    ui(params) {
        return new Promise((resolve, reject) => {
            try {
                FB.ui(params, (response) => {
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
    }
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @param [forceFreshResponse=false] {boolean} Force a fresh response.
     * @returns {Promise<LoginStatus>}
     */
    getLoginStatus(forceFreshResponse) {
        return new Promise((resolve, reject) => {
            try {
                FB.getLoginStatus((response) => {
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
    }
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
    login(options) {
        return new Promise((resolve, reject) => {
            try {
                FB.login((response) => {
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
    }
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    logout() {
        return new Promise((resolve, reject) => {
            try {
                FB.logout((response) => {
                    resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
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
    getAuthResponse() {
        try {
            return FB.getAuthResponse();
        }
        catch (e) {
            console.error('ng2-facebook-sdk: ', e);
        }
    }
};
FacebookService = __decorate([
    Injectable()
], FacebookService);

var FacebookModule_1;
const components = [
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
let FacebookModule = FacebookModule_1 = class FacebookModule {
    static forRoot() {
        return {
            ngModule: FacebookModule_1,
            providers: [FacebookService]
        };
    }
};
FacebookModule = FacebookModule_1 = __decorate([
    NgModule({
        declarations: getComponents(),
        exports: getComponents()
    })
], FacebookModule);

/*
 * Public API Surface of ngx-facebook
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FBCommentEmbedComponent, FBCommentsComponent, FBFollowComponent, FBLikeComponent, FBPageComponent, FBPostComponent, FBQuoteComponent, FBSaveComponent, FBSendComponent, FBShareComponent, FBVideoComponent, FacebookModule, FacebookService, getComponents as ɵa, FBMLAttribute as ɵb, FBMLInstanceMethod as ɵc, FBMLComponent as ɵd };
//# sourceMappingURL=ngx-facebook.js.map
