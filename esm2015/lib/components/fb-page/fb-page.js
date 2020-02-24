import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
export { FBPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXBhZ2UvZmItcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGFBQWE7SUF5RWhELFlBQ0UsRUFBYyxFQUNkLEdBQWM7UUFFZCxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBRUYsQ0FBQTs7WUFOTyxVQUFVO1lBQ1QsU0FBUzs7QUFwRWhCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs2Q0FDRDtBQVFiO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs4Q0FDQTtBQVFkO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTsrQ0FDQztBQVFmO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs2Q0FDRDtBQVFiO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtrREFDSztBQVFuQjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7cURBQ1E7QUFRdEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO2dEQUNHO0FBUWpCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtvREFDTztBQVFyQjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7NERBQ2U7QUF2RWxCLGVBQWU7SUFKM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csZUFBZSxDQWdGM0I7U0FoRlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBhZ2UgUGx1Z2luXHJcbiAqIEBzaG9ydGRlc2MgUGFnZSBwbHVnaW4gY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9wYWdlLXBsdWdpblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFBhZ2UgcGx1Z2luIGxldHMgeW91IGVhc2lseSBlbWJlZCBhbmQgcHJvbW90ZSBhbnkgRmFjZWJvb2sgUGFnZSBvbiB5b3VyIHdlYnNpdGUuIEp1c3QgbGlrZSBvbiBGYWNlYm9vaywgeW91ciB2aXNpdG9ycyBjYW4gbGlrZSBhbmQgc2hhcmUgdGhlIFBhZ2Ugd2l0aG91dCBsZWF2aW5nIHlvdXIgc2l0ZS5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLXBhZ2UgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL2ZhY2Vib29rXCI+PC9mYi1wYWdlPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItcGFnZScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlBhZ2VDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIFVSTCBvZiB0aGUgRmFjZWJvb2sgUGFnZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBocmVmOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwaXhlbCB3aWR0aCBvZiB0aGUgcGx1Z2luLiBNaW4uIGlzIGAxODBgICYgTWF4LiBpcyBgNTAwYC5cclxuICAgKiBEZWZhdWx0cyB0byBgMzQwYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBpeGVsIGhlaWdodCBvZiB0aGUgcGx1Z2luLiBNaW4uIGlzIGA3MGAuXHJcbiAgICogRGVmYXVsdHMgdG8gYDUwMGAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUYWJzIHRvIHJlbmRlciBpLmUuIGB0aW1lbGluZWAsIGBldmVudHNgLCBgbWVzc2FnZXNgLiBVc2UgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCB0byBhZGQgbXVsdGlwbGUgdGFicywgaS5lLiBgdGltZWxpbmVgLCBgZXZlbnRzYC5cclxuICAgKiBEZWZhdWx0cyB0byBgdGltZWxpbmVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB0YWJzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgY292ZXIgcGhvdG8gaW4gdGhlIGhlYWRlci5cclxuICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBoaWRlQ292ZXI6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgcHJvZmlsZSBwaG90b3Mgd2hlbiBmcmllbmRzIGxpa2UgdGhpcy5cclxuICAgKiBEZWZhdWx0cyB0byBgdHJ1ZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNob3dGYWNlcGlsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSB0aGUgY3VzdG9tIGNhbGwgdG8gYWN0aW9uIGJ1dHRvbiAoaWYgYXZhaWxhYmxlKS5cclxuICAgKiBEZWZhdWx0IHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhpZGVDVEE6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGUgc21hbGwgaGVhZGVyIGluc3RlYWQuXHJcbiAgICogRGVmYXVsdHMgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc21hbGxIZWFkZXI6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyeSB0byBmaXQgaW5zaWRlIHRoZSBjb250YWluZXIgd2lkdGguXHJcbiAgICogRGVmYXVsdHMgdG8gYHRydWVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBhZGFwdENvbnRhaW5lcldpZHRoOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1wYWdlJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=