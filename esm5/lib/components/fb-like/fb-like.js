import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBLikeComponent;
}(FBMLComponent));
export { FBLikeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItbGlrZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLWxpa2UvZmItbGlrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0g7SUFBcUMsbUNBQWE7SUFzRmhELHlCQUFZLEVBQWMsRUFBRSxHQUFjO1FBQTFDLFlBQ0Usa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FDMUI7UUF0RUQ7OztXQUdHO1FBR0gsVUFBSSxHQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztJQWdFcEMsQ0FBQzs7Z0JBRmUsVUFBVTtnQkFBTyxTQUFTOztJQTlFMUM7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO21EQUNDO0lBUWY7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3dEQUNNO0lBUXBCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtpREFDc0I7SUFRcEM7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhOzREQUNXO0lBVXpCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTttREFDQztJQVFmO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtnREFDRjtJQVNaO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtrREFDQztJQVNmO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtzREFDSztJQVFuQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7aURBQ0Q7SUFRYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7a0RBQ0E7SUFwRkgsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxlQUFlLENBMEYzQjtJQUFELHNCQUFDO0NBQUEsQUExRkQsQ0FBcUMsYUFBYSxHQTBGakQ7U0ExRlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExpa2UgQnV0dG9uXHJcbiAqIEBzaG9ydGRlc2MgTGlrZSBidXR0b24gY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9saWtlLWJ1dHRvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBzaW5nbGUgY2xpY2sgb24gdGhlIExpa2UgYnV0dG9uIHdpbGwgJ2xpa2UnIHBpZWNlcyBvZiBjb250ZW50IG9uIHRoZSB3ZWIgYW5kIHNoYXJlIHRoZW0gb24gRmFjZWJvb2suXHJcbiAqIFlvdSBjYW4gYWxzbyBkaXNwbGF5IGEgU2hhcmUgYnV0dG9uIG5leHQgdG8gdGhlIExpa2UgYnV0dG9uIHRvIGxldCBwZW9wbGUgYWRkIGEgcGVyc29uYWwgbWVzc2FnZSBhbmQgY3VzdG9taXplIHdobyB0aGV5IHNoYXJlIHdpdGguXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1saWtlIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20venVja1wiPjwvZmItbGlrZT5cclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZiLWxpa2UnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJMaWtlQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB2ZXJiIHRvIGRpc3BsYXkgb24gdGhlIGJ1dHRvbi4gQ2FuIGJlIGVpdGhlciBgbGlrZWAgb3IgYHJlY29tbWVuZGAuXHJcbiAgICogRGVmYXVsdHMgdG8gYGxpa2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBhY3Rpb246IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIHNjaGVtZSB1c2VkIGJ5IHRoZSBwbHVnaW4gZm9yIGFueSB0ZXh0IG91dHNpZGUgb2YgdGhlIGJ1dHRvbiBpdHNlbGYuIENhbiBiZSBgbGlnaHRgIG9yIGBkYXJrYC5cclxuICAgKiBEZWZhdWx0cyB0byBgbGlnaHRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBjb2xvclNjaGVtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBsaWtlZC5cclxuICAgKiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3VyIHdlYiBzaXRlIG9yIG9ubGluZSBzZXJ2aWNlLCBvciBhIHBvcnRpb24gb2YgeW91ciBzZXJ2aWNlLCBpcyBkaXJlY3RlZCB0byBjaGlsZHJlbiB1bmRlciAxMyBbeW91IG11c3QgZW5hYmxlIHRoaXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3Jlc3RyaWN0aW9ucy8pLlxyXG4gICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGtpZERpcmVjdGVkU2l0ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0cyBvbmUgb2YgdGhlIGRpZmZlcmVudCBsYXlvdXRzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHBsdWdpbi5cclxuICAgKiBDYW4gYmUgb25lIG9mIGBzdGFuZGFyZGAsIGBidXR0b25fY291bnRgLCBgYnV0dG9uYCBvciBgYm94X2NvdW50YC5cclxuICAgKiBTZWUgdGhlIFtGQVFdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2xpa2UtYnV0dG9uI2ZhcWxheW91dCkgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgKiBEZWZhdWx0cyB0byBgc3RhbmRhcmRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBsYXlvdXQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBsYWJlbCBmb3IgdHJhY2tpbmcgcmVmZXJyYWxzIHdoaWNoIG11c3QgYmUgbGVzcyB0aGFuIDUwIGNoYXJhY3RlcnMgYW5kIGNhbiBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCBzb21lIHB1bmN0dWF0aW9uIChjdXJyZW50bHkgKy89LS46XykuXHJcbiAgICogU2VlIHRoZSBbRkFRXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9mYXFzI3JlZikgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgcmVmOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGluY2x1ZGUgYSBzaGFyZSBidXR0b24gYmVzaWRlIHRoZSBMaWtlIGJ1dHRvbi5cclxuICAgKiBUaGlzIG9ubHkgd29ya3Mgd2l0aCB0aGUgWEZCTUwgdmVyc2lvbi5cclxuICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaGFyZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzcGxheSBwcm9maWxlIHBob3RvcyBiZWxvdyB0aGUgYnV0dG9uIChzdGFuZGFyZCBsYXlvdXQgb25seSkuXHJcbiAgICogWW91IG11c3Qgbm90IGVuYWJsZSB0aGlzIG9uIGNoaWxkLWRpcmVjdGVkIHNpdGVzLlxyXG4gICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNob3dGYWNlczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJ1dHRvbiBpcyBvZmZlcmVkIGluIDIgc2l6ZXMgaS5lLiBgbGFyZ2VgIGFuZCBgc21hbGxgLlxyXG4gICAqIERlZmF1bHRzIHRvIGBzbWFsbGAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNpemU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBwbHVnaW4gKHN0YW5kYXJkIGxheW91dCBvbmx5KSwgd2hpY2ggaXMgc3ViamVjdCB0byB0aGUgbWluaW11bSBhbmQgZGVmYXVsdCB3aWR0aC5cclxuICAgKiBTZWUgW0xheW91dCBTZXR0aW5nc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvbGlrZS1idXR0b24jZmFxbGF5b3V0KSBpbiB0aGUgb2ZmaWNpYWwgZG9jcyBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcm5kOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1saWtlJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=