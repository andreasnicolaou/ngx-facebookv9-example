import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
export { FBCommentsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1jb21tZW50cy9mYi1jb21tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFLSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGFBQWE7SUFrRHBELFlBQ0UsRUFBYyxFQUNkLEdBQWM7UUFFZCxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQTdDaEM7Ozs7V0FJRztRQUdILFNBQUksR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQXVDcEMsQ0FBQztDQUVGLENBQUE7O1lBTk8sVUFBVTtZQUNULFNBQVM7O0FBN0NoQjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7d0RBQ007QUFTcEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO2lEQUNzQjtBQU9wQztJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7bURBQ0U7QUFPaEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO3FEQUNHO0FBT2pCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtvREFDRTtBQVdoQjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7a0RBQ0E7QUFoREgsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLG1CQUFtQixDQXlEL0I7U0F6RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQ29tbWVudHNcclxuICogQHNob3J0ZGVzYyBDb21tZW50cyBjb21wb25lbnRcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2NvbW1lbnRzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgY29tbWVudHMgcGx1Z2luIGxldHMgcGVvcGxlIGNvbW1lbnQgb24gY29udGVudCBvbiB5b3VyIHNpdGUgdXNpbmcgdGhlaXIgRmFjZWJvb2sgYWNjb3VudC5cclxuICogUGVvcGxlIGNhbiBjaG9vc2UgdG8gc2hhcmUgdGhlaXIgY29tbWVudCBhY3Rpdml0eSB3aXRoIHRoZWlyIGZyaWVuZHMgKGFuZCBmcmllbmRzIG9mIHRoZWlyIGZyaWVuZHMpIG9uIEZhY2Vib29rIGFzIHdlbGwuXHJcbiAqIFRoZSBjb21tZW50cyBwbHVnaW4gYWxzbyBpbmNsdWRlcyBidWlsdC1pbiBtb2RlcmF0aW9uIHRvb2xzIGFuZCBzb2NpYWwgcmVsZXZhbmNlIHJhbmtpbmcuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1jb21tZW50cz48L2ZiLWNvbW1lbnRzPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItY29tbWVudHMnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJDb21tZW50c0NvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29sb3Igc2NoZW1lIHVzZWQgYnkgdGhlIGNvbW1lbnRzIHBsdWdpbi4gQ2FuIGJlIGBsaWdodGAgb3IgYGRhcmtgLiBEZWZhdWx0cyB0byBgbGlnaHRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBjb2xvcnNjaGVtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIHRoYXQgY29tbWVudHMgcG9zdGVkIGluIHRoZSBwbHVnaW4gd2lsbCBiZSBwZXJtYW5lbnRseSBhc3NvY2lhdGVkIHdpdGguXHJcbiAgICogQWxsIHN0b3JpZXMgc2hhcmVkIG9uIEZhY2Vib29rIGFib3V0IGNvbW1lbnRzIHBvc3RlZCB1c2luZyB0aGUgY29tbWVudHMgcGx1Z2luIHdpbGwgbGluayB0byB0aGlzIFVSTC5cclxuICAgKiBEZWZhdWx0cyB0byBjdXJyZW50IFVSTC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRvIHNob3cgdGhlIG1vYmlsZS1vcHRpbWl6ZWQgdmVyc2lvbiBvciBub3QuIElmIG5vIHZhbHVlIGlzIGdpdmVuLCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGV0ZWN0ZWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIG1vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBjb21tZW50cyB0byBzaG93IGJ5IGRlZmF1bHQuIFRoZSBtaW5pbXVtIHZhbHVlIGlzIGAxYC4gRGVmYXVsdHMgdG8gYDEwYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgbnVtcG9zdHM6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG9yZGVyIHRvIHVzZSB3aGVuIGRpc3BsYXlpbmcgY29tbWVudHMuIENhbiBiZSBgc29jaWFsYCwgYHJldmVyc2VfdGltZWAsIG9yIGB0aW1lYC4gVGhlIGRpZmZlcmVudCBvcmRlciB0eXBlcyBhcmUgZXhwbGFpbmVkIFtpbiB0aGUgRkFRXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9jb21tZW50cyNmYXFvcmRlcikuIERlZmF1bHRzIHRvIGBzb2NpYWxgXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIG9yZGVyQnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBjb21tZW50cyBwbHVnaW4gb24gdGhlIHdlYnBhZ2UuXHJcbiAgICogVGhpcyBjYW4gYmUgZWl0aGVyIGEgcGl4ZWwgdmFsdWUgb3IgYSBwZXJjZW50YWdlIChzdWNoIGFzIDEwMCUpIGZvciBmbHVpZCB3aWR0aC5cclxuICAgKiBUaGUgbW9iaWxlIHZlcnNpb24gb2YgdGhlIGNvbW1lbnRzIHBsdWdpbiBpZ25vcmVzIHRoZSB3aWR0aCBwYXJhbWV0ZXIgYW5kIGluc3RlYWQgaGFzIGEgZmx1aWQgd2lkdGggb2YgMTAwJS5cclxuICAgKiBUaGUgbWluaW11bSB3aWR0aCBzdXBwb3J0ZWQgYnkgdGhlIGNvbW1lbnRzIHBsdWdpbiBpcyAzMjBweC5cclxuICAgKiBEZWZhdWx0cyB0byBgNTUwcHhgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1jb21tZW50cycpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19