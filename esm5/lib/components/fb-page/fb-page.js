import { __decorate, __extends } from "tslib";
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
var FBPageComponent = /** @class */ (function (_super) {
    __extends(FBPageComponent, _super);
    function FBPageComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-page') || this;
    }
    FBPageComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBPageComponent;
}(FBMLComponent));
export { FBPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXBhZ2UvZmItcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSDtJQUFxQyxtQ0FBYTtJQXlFaEQseUJBQ0UsRUFBYyxFQUNkLEdBQWM7ZUFFZCxrQkFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQztJQUMzQixDQUFDOztnQkFKSyxVQUFVO2dCQUNULFNBQVM7O0lBcEVoQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7aURBQ0Q7SUFRYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7a0RBQ0E7SUFRZDtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7bURBQ0M7SUFRZjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7aURBQ0Q7SUFRYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7c0RBQ0s7SUFRbkI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3lEQUNRO0lBUXRCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtvREFDRztJQVFqQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7d0RBQ087SUFRckI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO2dFQUNlO0lBdkVsQixlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLGVBQWUsQ0FnRjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhGRCxDQUFxQyxhQUFhLEdBZ0ZqRDtTQWhGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgUGFnZSBQbHVnaW5cclxuICogQHNob3J0ZGVzYyBQYWdlIHBsdWdpbiBjb21wb25lbnRcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3BhZ2UtcGx1Z2luXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgUGFnZSBwbHVnaW4gbGV0cyB5b3UgZWFzaWx5IGVtYmVkIGFuZCBwcm9tb3RlIGFueSBGYWNlYm9vayBQYWdlIG9uIHlvdXIgd2Vic2l0ZS4gSnVzdCBsaWtlIG9uIEZhY2Vib29rLCB5b3VyIHZpc2l0b3JzIGNhbiBsaWtlIGFuZCBzaGFyZSB0aGUgUGFnZSB3aXRob3V0IGxlYXZpbmcgeW91ciBzaXRlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8ZmItcGFnZSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vZmFjZWJvb2tcIj48L2ZiLXBhZ2U+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1wYWdlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCUGFnZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgVVJMIG9mIHRoZSBGYWNlYm9vayBQYWdlXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBpeGVsIHdpZHRoIG9mIHRoZSBwbHVnaW4uIE1pbi4gaXMgYDE4MGAgJiBNYXguIGlzIGA1MDBgLlxyXG4gICAqIERlZmF1bHRzIHRvIGAzNDBgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGl4ZWwgaGVpZ2h0IG9mIHRoZSBwbHVnaW4uIE1pbi4gaXMgYDcwYC5cclxuICAgKiBEZWZhdWx0cyB0byBgNTAwYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRhYnMgdG8gcmVuZGVyIGkuZS4gYHRpbWVsaW5lYCwgYGV2ZW50c2AsIGBtZXNzYWdlc2AuIFVzZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IHRvIGFkZCBtdWx0aXBsZSB0YWJzLCBpLmUuIGB0aW1lbGluZWAsIGBldmVudHNgLlxyXG4gICAqIERlZmF1bHRzIHRvIGB0aW1lbGluZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHRhYnM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSBjb3ZlciBwaG90byBpbiB0aGUgaGVhZGVyLlxyXG4gICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhpZGVDb3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBwcm9maWxlIHBob3RvcyB3aGVuIGZyaWVuZHMgbGlrZSB0aGlzLlxyXG4gICAqIERlZmF1bHRzIHRvIGB0cnVlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2hvd0ZhY2VwaWxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBIaWRlIHRoZSBjdXN0b20gY2FsbCB0byBhY3Rpb24gYnV0dG9uIChpZiBhdmFpbGFibGUpLlxyXG4gICAqIERlZmF1bHQgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaGlkZUNUQTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoZSBzbWFsbCBoZWFkZXIgaW5zdGVhZC5cclxuICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzbWFsbEhlYWRlcjogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIGZpdCBpbnNpZGUgdGhlIGNvbnRhaW5lciB3aWR0aC5cclxuICAgKiBEZWZhdWx0cyB0byBgdHJ1ZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGFkYXB0Q29udGFpbmVyV2lkdGg6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLXBhZ2UnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==