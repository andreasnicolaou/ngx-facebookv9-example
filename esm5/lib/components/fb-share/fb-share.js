import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBShareComponent;
}(FBMLComponent));
export { FBShareComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2hhcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1zaGFyZS9mYi1zaGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSDtJQUFzQyxvQ0FBYTtJQThCakQsMEJBQ0UsRUFBYyxFQUNkLEdBQWM7ZUFFZCxrQkFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDO0lBQ25DLENBQUM7O2dCQUpLLFVBQVU7Z0JBQ1QsU0FBUzs7SUF6QmhCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtrREFDRDtJQU9iO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtvREFDQztJQU9mO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTswREFDUTtJQU90QjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7a0RBQ0Q7SUE1QkYsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLGdCQUFnQixDQXFDNUI7SUFBRCx1QkFBQztDQUFBLEFBckNELENBQXNDLGFBQWEsR0FxQ2xEO1NBckNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNoYXJlIEJ1dHRvblxyXG4gKiBAc2hvcnRkZXNjIFNoYXJlIGJ1dHRvbiBjb21wb25lbnRcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3NoYXJlLWJ1dHRvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFNoYXJlIGJ1dHRvbiBsZXRzIHBlb3BsZSBhZGQgYSBwZXJzb25hbGl6ZWQgbWVzc2FnZSB0byBsaW5rcyBiZWZvcmUgc2hhcmluZyBvbiB0aGVpciB0aW1lbGluZSwgaW4gZ3JvdXBzLCBvciB0byB0aGVpciBmcmllbmRzIHZpYSBhIEZhY2Vib29rIE1lc3NhZ2UuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1zaGFyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3p5cmEvbmcyLWZhY2Vib29rLXNkay9cIj48L2ZiLXNoYXJlPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItc2hhcmUnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJTaGFyZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBzaGFyZWQuIERlZmF1bHRzIHRvIHRoZSBjdXJyZW50IFVSTC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3RzIG9uZSBvZiB0aGUgZGlmZmVyZW50IGxheW91dHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciB0aGUgcGx1Z2luLiBDYW4gYmUgb25lIG9mIGBib3hfY291bnRgLCBgYnV0dG9uX2NvdW50YCwgYGJ1dHRvbmAuIERlZmF1bHRzIHRvIGBpY29uX2xpbmtgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBsYXlvdXQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSBzaGFyZSBidXR0b24gd2lsbCBvcGVuIHRoZSBzaGFyZSBkaWFsb2cgaW4gYW4gaWZyYW1lIChpbnN0ZWFkIG9mIGEgcG9wdXApIG9uIHRvcCBvZiB5b3VyIHdlYnNpdGUgb24gbW9iaWxlLiBUaGlzIG9wdGlvbiBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgbW9iaWxlLCBub3QgZGVza3RvcC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgbW9iaWxlSWZyYW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYnV0dG9uIGlzIG9mZmVyZWQgaW4gMiBzaXplcyBpLmUuIGxhcmdlIGFuZCBzbWFsbC4gRGVmYXVsdHMgdG8gYHNtYWxsYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgc2l6ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1zaGFyZS1idXR0b24nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==