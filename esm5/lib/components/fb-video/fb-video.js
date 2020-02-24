import { __decorate, __extends } from "tslib";
import { Component, Input, Output, ElementRef, Renderer2, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FBMLAttribute, FBMLComponent, FBMLInstanceMethod } from '../fbml-component';
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
        _this.startedPlaying = new EventEmitter();
        /**
         * Fired when video pauses.
         */
        _this.paused = new EventEmitter();
        /**
         *
         Fired when video finishes playing.
         */
        _this.finishedPlaying = new EventEmitter();
        /**
         * Fired when video starts to buffer.
         */
        _this.startedBuffering = new EventEmitter();
        /**
         * Fired when video recovers from buffering.
         */
        _this.finishedBuffering = new EventEmitter();
        /**
         * Fired when an error occurs on the video.
         */
        _this.error = new EventEmitter();
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
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBVideoComponent;
}(FBMLComponent));
export { FBVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItdmlkZW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi12aWRlby9mYi12aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRztBQUtIO0lBQXNDLG9DQUFhO0lBdUZqRCwwQkFDRSxFQUFjLEVBQ2QsR0FBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLFNBRTNCO1FBL0NEOztXQUVHO1FBRUgsb0JBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU1RDs7V0FFRztRQUVILFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVwRDs7O1dBR0c7UUFFSCxxQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdEOztXQUVHO1FBRUgsc0JBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFOUQ7O1dBRUc7UUFFSCx1QkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUvRDs7V0FFRztRQUVILFdBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUkzQyxnQkFBVSxHQUFVLEVBQUUsQ0FBQztRQU83QixLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVB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YUFBYTs2REFDVztJQU96QjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7c0RBQ0k7SUFPbEI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO21EQUNBO0lBT2Q7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3NEQUNJO0lBT2xCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTswREFDUTtJQU10QjtRQURDLE1BQU0sRUFBRTs0REFDbUQ7SUFNNUQ7UUFEQyxNQUFNLEVBQUU7b0RBQzJDO0lBT3BEO1FBREMsTUFBTSxFQUFFOzZEQUNvRDtJQU03RDtRQURDLE1BQU0sRUFBRTs4REFDcUQ7SUFNOUQ7UUFEQyxNQUFNLEVBQUU7K0RBQ3NEO0lBTS9EO1FBREMsTUFBTSxFQUFFO21EQUMwQztJQWdEbkQ7UUFEQyxrQkFBa0I7Z0RBQ1Q7SUFNVjtRQURDLGtCQUFrQjtpREFDUjtJQU9YO1FBREMsa0JBQWtCO2dEQUNNO0lBTXpCO1FBREMsa0JBQWtCO2dEQUNUO0lBTVY7UUFEQyxrQkFBa0I7a0RBQ1A7SUFNWjtRQURDLGtCQUFrQjttREFDVztJQU85QjtRQURDLGtCQUFrQjtxREFDVTtJQU03QjtRQURDLGtCQUFrQjtxREFDWTtJQU0vQjtRQURDLGtCQUFrQjs4REFDSztJQU14QjtRQURDLGtCQUFrQjt1REFDRjtJQXpMTixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csZ0JBQWdCLENBMkw1QjtJQUFELHVCQUFDO0NBQUEsQUEzTEQsQ0FBc0MsYUFBYSxHQTJMbEQ7U0EzTFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCwgRkJNTEluc3RhbmNlTWV0aG9kIH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5kZWNsYXJlIHZhciBGQjogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEVtYmVkZGVkIFZpZGVvXHJcbiAqIEBzaG9ydGRlc2MgQ29tcG9uZW50IHRvIGVtYmVkIEZhY2Vib29rIHZpZGVvc1xyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvZW1iZWRkZWQtdmlkZW8tcGxheWVyXHJcbiAqIEBkZXNjcmlwdGlvbiBDb21wb25lbnQgdG8gZW1iZWQgRmFjZWJvb2sgdmlkZW9zIGFuZCBjb250cm9sIHRoZW0uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDwhLS0gYmFzaWMgdXNhZ2UgLS0+XHJcbiAqIDxmYi12aWRlbyBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZhY2Vib29rL3ZpZGVvcy8xMDE1MzIzMTM3OTk0NjcyOS9cIj48L2ZiLXZpZGVvPlxyXG4gKlxyXG4gKiA8IS0tIGV2ZW50IGVtaXR0ZXJzIC0tPlxyXG4gKiA8ZmItdmlkZW8gaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mYWNlYm9vay92aWRlb3MvMTAxNTMyMzEzNzk5NDY3MjkvXCIgKHBhdXNlZCk9XCJvblZpZGVvUGF1c2VkKCRldmVudClcIj48L2ZiLXZpZGVvPlxyXG4gKiBgYGBcclxuICpcclxuICogVG8gbWFudWFsbHkgaW50ZXJhY3Qgd2l0aCB0aGUgdmlkZW8gcGxheWVyLCBmZXRjaCBpdCB1c2luZyBgVmlld0NoaWxkYC5cclxuICpcclxuICogYGBgdHNcclxuICogaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICogaW1wb3J0IHsgRkJWaWRlb0NvbXBvbmVudCB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xyXG4gKlxyXG4gKiBAQ29tcG9uZW50KC4uLilcclxuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IHtcclxuICpcclxuICogICBAVmlld0NoaWxkKEZCVmlkZW9Db21wb25lbnQpIHZpZGVvOiBGQlZpZGVvQ29tcG9uZW50O1xyXG4gKlxyXG4gKiAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICogICAgIHRoaXMudmlkZW8ucGxheSgpO1xyXG4gKiAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xyXG4gKiAgICAgdGhpcy52aWRlby5nZXRWb2x1bWUoKTtcclxuICogICB9XHJcbiAqXHJcbiAqIH1cclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZiLXZpZGVvJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCVmlkZW9Db21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSB2aWRlby5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBbGxvdyB0aGUgdmlkZW8gdG8gYmUgcGxheWVkIGluIGZ1bGxzY3JlZW4gbW9kZS4gQ2FuIGJlIGZhbHNlIG9yIHRydWUuIERlZmF1bHRzIHRvIGZhbHNlO1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBhbGxvd2Z1bGxzY3JlZW46IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEF1dG9tYXRpY2FsbHkgc3RhcnQgcGxheWluZyB0aGUgdmlkZW8gd2hlbiB0aGUgcGFnZSBsb2Fkcy4gVGhlIHZpZGVvIHdpbGwgYmUgcGxheWVkIHdpdGhvdXQgc291bmQgKG11dGVkKS4gUGVvcGxlIGNhbiB0dXJuIG9uIHNvdW5kIHZpYSB0aGUgdmlkZW8gcGxheWVyIGNvbnRyb2xzLiBUaGlzIHNldHRpbmcgZG9lcyBub3QgYXBwbHkgdG8gbW9iaWxlIGRldmljZXMuIENhbiBiZSBmYWxzZSBvciB0cnVlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgYXV0b3BsYXk6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdmlkZW8gY29udGFpbmVyLiBNaW4uIDIyMHB4LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHRoZSB0ZXh0IGZyb20gdGhlIEZhY2Vib29rIHBvc3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlbywgaWYgYW55LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaG93VGV4dDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gc2hvdyBjYXB0aW9ucyAoaWYgYXZhaWxhYmxlKSBieSBkZWZhdWx0LiBDYXB0aW9ucyBhcmUgb25seSBhdmFpbGFibGUgb24gZGVza3RvcC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2hvd0NhcHRpb25zOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCB3aGVuIHZpZGVvIHN0YXJ0cyB0byBwbGF5LlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHN0YXJ0ZWRQbGF5aW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCB3aGVuIHZpZGVvIHBhdXNlcy5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwYXVzZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgIEZpcmVkIHdoZW4gdmlkZW8gZmluaXNoZXMgcGxheWluZy5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBmaW5pc2hlZFBsYXlpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVkIHdoZW4gdmlkZW8gc3RhcnRzIHRvIGJ1ZmZlci5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBzdGFydGVkQnVmZmVyaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCB3aGVuIHZpZGVvIHJlY292ZXJzIGZyb20gYnVmZmVyaW5nLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZpbmlzaGVkQnVmZmVyaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCB3aGVuIGFuIGVycm9yIG9jY3VycyBvbiB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2xpc3RlbmVyczogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItdmlkZW8nKTtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudC5pZCA9IHRoaXMuX2lkID0gJ3ZpZGVvLScgKyBTdHJpbmcoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSArIDEpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIEZCLkV2ZW50LnN1YnNjcmliZSgneGZibWwucmVhZHknLCAobXNnOiBhbnkpID0+IHtcclxuICAgICAgaWYgKG1zZy50eXBlID09PSAndmlkZW8nICYmIG1zZy5pZCA9PT0gdGhpcy5faWQpIHtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG1zZy5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN1YnNjcmliZSgnc3RhcnRlZFBsYXlpbmcnLCAoZTogYW55KSA9PiB0aGlzLnN0YXJ0ZWRQbGF5aW5nLmVtaXQoZSkpLFxyXG4gICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc3Vic2NyaWJlKCdwYXVzZWQnLCAoZTogYW55KSA9PiB0aGlzLnBhdXNlZC5lbWl0KGUpKSxcclxuICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN1YnNjcmliZSgnZmluaXNoZWRQbGF5aW5nJywgKGU6IGFueSkgPT4gdGhpcy5maW5pc2hlZFBsYXlpbmcuZW1pdChlKSksXHJcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpYmUoJ3N0YXJ0ZWRCdWZmZXJpbmcnLCAoZTogYW55KSA9PiB0aGlzLnN0YXJ0ZWRCdWZmZXJpbmcuZW1pdChlKSksXHJcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpYmUoJ2ZpbmlzaGVkQnVmZmVyaW5nJywgKGU6IGFueSkgPT4gdGhpcy5maW5pc2hlZEJ1ZmZlcmluZy5lbWl0KGUpKSxcclxuICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN1YnNjcmliZSgnZXJyb3InLCAoZTogYW55KSA9PiB0aGlzLmVycm9yLmVtaXQoZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChsID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBsLnJlbGVhc2UgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBsLnJlbGVhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5cyB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIHBsYXkoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGF1c2VzIHRoZSB2aWRlby5cclxuICAgKi9cclxuICBARkJNTEluc3RhbmNlTWV0aG9kXHJcbiAgcGF1c2UoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Vla3MgdG8gc3BlY2lmaWVkIHBvc2l0aW9uLlxyXG4gICAqIEBwYXJhbSBzZWNvbmRzIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIHNlZWsoc2Vjb25kczogbnVtYmVyKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogTXV0ZSB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIG11dGUoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5tdXRlIHRoZSB2aWRlby5cclxuICAgKi9cclxuICBARkJNTEluc3RhbmNlTWV0aG9kXHJcbiAgdW5tdXRlKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB2aWRlbyBpcyBtdXRlZCwgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBpc011dGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSB2b2x1bWVcclxuICAgKiBAcGFyYW0gdm9sdW1lXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcikgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdm9sdW1lXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIGdldFZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm47IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2aWRlbyB0aW1lIHBvc2l0aW9uIGluIHNlY29uZHNcclxuICAgKi9cclxuICBARkJNTEluc3RhbmNlTWV0aG9kXHJcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHZpZGVvIGR1cmF0aW9uIGluIHNlY29uZHNcclxuICAgKi9cclxuICBARkJNTEluc3RhbmNlTWV0aG9kXHJcbiAgZ2V0RHVyYXRpb24oKSB7IH1cclxuXHJcbn1cclxuIl19