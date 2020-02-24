import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
export { FBFollowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItZm9sbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZhY2Vib29rLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmItZm9sbG93L2ZiLWZvbGxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7R0FTRztBQUtILElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsYUFBYTtJQW9EbEQsWUFDRSxFQUFjLEVBQ2QsR0FBYztRQUVkLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FFRixDQUFBOztZQU5PLFVBQVU7WUFDVCxTQUFTOztBQS9DaEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO3NEQUNNO0FBT3BCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTsrQ0FDRDtBQU9iO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTswREFDVztBQVF6QjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7aURBQ0M7QUFPZjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7b0RBQ0k7QUFPbEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhOytDQUNEO0FBT2I7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO2dEQUNBO0FBbERILGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxpQkFBaUIsQ0EyRDdCO1NBM0RZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZvbGxvdyBCdXR0b25cclxuICogQHNob3J0ZGVzYyBGb2xsb3cgYnV0dG9uIGNvbXBvbmVudFxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvZm9sbG93LWJ1dHRvblxyXG4gKiBAZGVzY3JpcHRpb24gVGhlIEZvbGxvdyBidXR0b24gbGV0cyBwZW9wbGUgc3Vic2NyaWJlIHRvIHRoZSBwdWJsaWMgdXBkYXRlcyBvZiBvdGhlcnMgb24gRmFjZWJvb2suXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1mb2xsb3cgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS96dWNrXCI+PC9mYi1mb2xsb3c+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1mb2xsb3cnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJGb2xsb3dDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIHNjaGVtZSB1c2VkIGJ5IHRoZSBwbHVnaW4uIENhbiBiZSBgbGlnaHRgIG9yIGBkYXJrYC4gRGVmYXVsdHMgdG8gYGxpZ2h0YC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgY29sb3JTY2hlbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEZhY2Vib29rLmNvbSBwcm9maWxlIFVSTCBvZiB0aGUgdXNlciB0byBmb2xsb3cuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91ciB3ZWIgc2l0ZSBvciBvbmxpbmUgc2VydmljZSwgb3IgYSBwb3J0aW9uIG9mIHlvdXIgc2VydmljZSwgaXMgZGlyZWN0ZWQgdG8gY2hpbGRyZW4gdW5kZXIgMTMgeW91IG11c3QgZW5hYmxlIHRoaXMuIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGtpZERpcmVjdGVkU2l0ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0cyBvbmUgb2YgdGhlIGRpZmZlcmVudCBsYXlvdXRzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHBsdWdpbi4gQ2FuIGJlIG9uZSBvZiBgc3RhbmRhcmRgLCBgYnV0dG9uX2NvdW50YCwgb3IgYGJveF9jb3VudGAuXHJcbiAgICogRGVmYXVsdHMgdG8gYHN0YW5kYXJkYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgbGF5b3V0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgcHJvZmlsZSBwaG90b3MgYmVsb3cgdGhlIGJ1dHRvbi4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2hvd0ZhY2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBidXR0b24gaXMgb2ZmZXJlZCBpbiAyIHNpemVzIGkuZS4gYGxhcmdlYCBhbmQgYHNtYWxsYC4gRGVmYXVsdHMgdG8gYHNtYWxsYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2l6ZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHBsdWdpbi4gVGhlIGxheW91dCB5b3UgY2hvb3NlIGFmZmVjdHMgdGhlIG1pbmltdW0gYW5kIGRlZmF1bHQgd2lkdGhzIHlvdSBjYW4gdXNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1mb2xsb3cnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==