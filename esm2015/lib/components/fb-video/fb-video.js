import { __decorate } from "tslib";
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
export { FBVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItdmlkZW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi12aWRlby9mYi12aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRztBQUtILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWlCLFNBQVEsYUFBYTtJQXVGakQsWUFDRSxFQUFjLEVBQ2QsR0FBYztRQUVkLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBN0M3Qjs7V0FFRztRQUVILG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFNUQ7O1dBRUc7UUFFSCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEQ7OztXQUdHO1FBRUgsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3RDs7V0FFRztRQUVILHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTlEOztXQUVHO1FBRUgsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFL0Q7O1dBRUc7UUFFSCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFJM0MsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQU83QixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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Q0E7QUFPZDtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7a0RBQ0k7QUFPbEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO3NEQUNRO0FBTXRCO0lBREMsTUFBTSxFQUFFO3dEQUNtRDtBQU01RDtJQURDLE1BQU0sRUFBRTtnREFDMkM7QUFPcEQ7SUFEQyxNQUFNLEVBQUU7eURBQ29EO0FBTTdEO0lBREMsTUFBTSxFQUFFOzBEQUNxRDtBQU05RDtJQURDLE1BQU0sRUFBRTsyREFDc0Q7QUFNL0Q7SUFEQyxNQUFNLEVBQUU7K0NBQzBDO0FBZ0RuRDtJQURDLGtCQUFrQjs0Q0FDVDtBQU1WO0lBREMsa0JBQWtCOzZDQUNSO0FBT1g7SUFEQyxrQkFBa0I7NENBQ007QUFNekI7SUFEQyxrQkFBa0I7NENBQ1Q7QUFNVjtJQURDLGtCQUFrQjs4Q0FDUDtBQU1aO0lBREMsa0JBQWtCOytDQUNXO0FBTzlCO0lBREMsa0JBQWtCO2lEQUNVO0FBTTdCO0lBREMsa0JBQWtCO2lEQUNZO0FBTS9CO0lBREMsa0JBQWtCOzBEQUNLO0FBTXhCO0lBREMsa0JBQWtCO21EQUNGO0FBekxOLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxnQkFBZ0IsQ0EyTDVCO1NBM0xZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQsIEZCTUxJbnN0YW5jZU1ldGhvZCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgRkI6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBFbWJlZGRlZCBWaWRlb1xyXG4gKiBAc2hvcnRkZXNjIENvbXBvbmVudCB0byBlbWJlZCBGYWNlYm9vayB2aWRlb3NcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2VtYmVkZGVkLXZpZGVvLXBsYXllclxyXG4gKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IHRvIGVtYmVkIEZhY2Vib29rIHZpZGVvcyBhbmQgY29udHJvbCB0aGVtLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8IS0tIGJhc2ljIHVzYWdlIC0tPlxyXG4gKiA8ZmItdmlkZW8gaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mYWNlYm9vay92aWRlb3MvMTAxNTMyMzEzNzk5NDY3MjkvXCI+PC9mYi12aWRlbz5cclxuICpcclxuICogPCEtLSBldmVudCBlbWl0dGVycyAtLT5cclxuICogPGZiLXZpZGVvIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZmFjZWJvb2svdmlkZW9zLzEwMTUzMjMxMzc5OTQ2NzI5L1wiIChwYXVzZWQpPVwib25WaWRlb1BhdXNlZCgkZXZlbnQpXCI+PC9mYi12aWRlbz5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRvIG1hbnVhbGx5IGludGVyYWN0IHdpdGggdGhlIHZpZGVvIHBsYXllciwgZmV0Y2ggaXQgdXNpbmcgYFZpZXdDaGlsZGAuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqIGltcG9ydCB7IEZCVmlkZW9Db21wb25lbnQgfSBmcm9tICduZzItZmFjZWJvb2stc2RrJztcclxuICpcclxuICogQENvbXBvbmVudCguLi4pXHJcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqXHJcbiAqICAgQFZpZXdDaGlsZChGQlZpZGVvQ29tcG9uZW50KSB2aWRlbzogRkJWaWRlb0NvbXBvbmVudDtcclxuICpcclxuICogICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAqICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcclxuICogICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcclxuICogICAgIHRoaXMudmlkZW8uZ2V0Vm9sdW1lKCk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi12aWRlbycsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlZpZGVvQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFic29sdXRlIFVSTCBvZiB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3cgdGhlIHZpZGVvIHRvIGJlIHBsYXllZCBpbiBmdWxsc2NyZWVuIG1vZGUuIENhbiBiZSBmYWxzZSBvciB0cnVlLiBEZWZhdWx0cyB0byBmYWxzZTtcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgYWxsb3dmdWxsc2NyZWVuOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBdXRvbWF0aWNhbGx5IHN0YXJ0IHBsYXlpbmcgdGhlIHZpZGVvIHdoZW4gdGhlIHBhZ2UgbG9hZHMuIFRoZSB2aWRlbyB3aWxsIGJlIHBsYXllZCB3aXRob3V0IHNvdW5kIChtdXRlZCkuIFBlb3BsZSBjYW4gdHVybiBvbiBzb3VuZCB2aWEgdGhlIHZpZGVvIHBsYXllciBjb250cm9scy4gVGhpcyBzZXR0aW5nIGRvZXMgbm90IGFwcGx5IHRvIG1vYmlsZSBkZXZpY2VzLiBDYW4gYmUgZmFsc2Ugb3IgdHJ1ZS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGF1dG9wbGF5OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHZpZGVvIGNvbnRhaW5lci4gTWluLiAyMjBweC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgd2lkdGg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gaW5jbHVkZSB0aGUgdGV4dCBmcm9tIHRoZSBGYWNlYm9vayBwb3N0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW8sIGlmIGFueS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2hvd1RleHQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIHNob3cgY2FwdGlvbnMgKGlmIGF2YWlsYWJsZSkgYnkgZGVmYXVsdC4gQ2FwdGlvbnMgYXJlIG9ubHkgYXZhaWxhYmxlIG9uIGRlc2t0b3AuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNob3dDYXB0aW9uczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZWQgd2hlbiB2aWRlbyBzdGFydHMgdG8gcGxheS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBzdGFydGVkUGxheWluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZWQgd2hlbiB2aWRlbyBwYXVzZXMuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcGF1c2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICBGaXJlZCB3aGVuIHZpZGVvIGZpbmlzaGVzIHBsYXlpbmcuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZmluaXNoZWRQbGF5aW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlZCB3aGVuIHZpZGVvIHN0YXJ0cyB0byBidWZmZXIuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgc3RhcnRlZEJ1ZmZlcmluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZWQgd2hlbiB2aWRlbyByZWNvdmVycyBmcm9tIGJ1ZmZlcmluZy5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBmaW5pc2hlZEJ1ZmZlcmluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMgb24gdGhlIHZpZGVvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9saXN0ZW5lcnM6IGFueVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLXZpZGVvJyk7XHJcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuaWQgPSB0aGlzLl9pZCA9ICd2aWRlby0nICsgU3RyaW5nKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgKyAxKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBGQi5FdmVudC5zdWJzY3JpYmUoJ3hmYm1sLnJlYWR5JywgKG1zZzogYW55KSA9PiB7XHJcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3ZpZGVvJyAmJiBtc2cuaWQgPT09IHRoaXMuX2lkKSB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBtc2cuaW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpYmUoJ3N0YXJ0ZWRQbGF5aW5nJywgKGU6IGFueSkgPT4gdGhpcy5zdGFydGVkUGxheWluZy5lbWl0KGUpKSxcclxuICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN1YnNjcmliZSgncGF1c2VkJywgKGU6IGFueSkgPT4gdGhpcy5wYXVzZWQuZW1pdChlKSksXHJcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpYmUoJ2ZpbmlzaGVkUGxheWluZycsIChlOiBhbnkpID0+IHRoaXMuZmluaXNoZWRQbGF5aW5nLmVtaXQoZSkpLFxyXG4gICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc3Vic2NyaWJlKCdzdGFydGVkQnVmZmVyaW5nJywgKGU6IGFueSkgPT4gdGhpcy5zdGFydGVkQnVmZmVyaW5nLmVtaXQoZSkpLFxyXG4gICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc3Vic2NyaWJlKCdmaW5pc2hlZEJ1ZmZlcmluZycsIChlOiBhbnkpID0+IHRoaXMuZmluaXNoZWRCdWZmZXJpbmcuZW1pdChlKSksXHJcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zdWJzY3JpYmUoJ2Vycm9yJywgKGU6IGFueSkgPT4gdGhpcy5lcnJvci5lbWl0KGUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobCA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgbC5yZWxlYXNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbC5yZWxlYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxheXMgdGhlIHZpZGVvLlxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBwbGF5KCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIHBhdXNlKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlZWtzIHRvIHNwZWNpZmllZCBwb3NpdGlvbi5cclxuICAgKiBAcGFyYW0gc2Vjb25kcyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBzZWVrKHNlY29uZHM6IG51bWJlcikgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE11dGUgdGhlIHZpZGVvLlxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBtdXRlKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVubXV0ZSB0aGUgdmlkZW8uXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIHVubXV0ZSgpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdmlkZW8gaXMgbXV0ZWQsIGZhbHNlIGlmIG5vdC5cclxuICAgKi9cclxuICBARkJNTEluc3RhbmNlTWV0aG9kXHJcbiAgaXNNdXRlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdm9sdW1lXHJcbiAgICogQHBhcmFtIHZvbHVtZVxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBzZXRWb2x1bWUodm9sdW1lOiBudW1iZXIpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHZvbHVtZVxyXG4gICAqL1xyXG4gIEBGQk1MSW5zdGFuY2VNZXRob2RcclxuICBnZXRWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlkZW8gdGltZSBwb3NpdGlvbiBpbiBzZWNvbmRzXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB2aWRlbyBkdXJhdGlvbiBpbiBzZWNvbmRzXHJcbiAgICovXHJcbiAgQEZCTUxJbnN0YW5jZU1ldGhvZFxyXG4gIGdldER1cmF0aW9uKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==