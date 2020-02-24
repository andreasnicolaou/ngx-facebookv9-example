import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
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
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBSendComponent;
}(FBMLComponent));
export { FBSendComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2VuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXNlbmQvZmItc2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSDtJQUFxQyxtQ0FBYTtJQXFDaEQseUJBQ0UsRUFBYyxFQUNkLEdBQWM7UUFGaEIsWUFJRSxrQkFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUMxQjtRQWpDRDs7V0FFRztRQUdILFVBQUksR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7SUE0QnBDLENBQUM7O2dCQUpLLFVBQVU7Z0JBQ1QsU0FBUzs7SUFoQ2hCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTt3REFDTTtJQU9wQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7aURBQ3NCO0lBT3BDO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTs0REFDVztJQU96QjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7Z0RBQ0Y7SUFPWjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7aURBQ0Q7SUFuQ0YsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxlQUFlLENBNEMzQjtJQUFELHNCQUFDO0NBQUEsQUE1Q0QsQ0FBcUMsYUFBYSxHQTRDakQ7U0E1Q1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNlbmQgQnV0dG9uXHJcbiAqIEBzaG9ydGRlc2MgU2VuZCBidXR0b24gY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9zZW5kLWJ1dHRvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFNlbmQgYnV0dG9uIGxldHMgcGVvcGxlIHByaXZhdGVseSBzZW5kIGNvbnRlbnQgb24geW91ciBzaXRlIHRvIG9uZSBvciBtb3JlIGZyaWVuZHMgaW4gYSBGYWNlYm9vayBtZXNzYWdlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8ZmItc2VuZCBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3p5cmEvbmcyLWZhY2Vib29rLXNkay9cIj48L2ZiLXNlbmQ+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1zZW5kJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCU2VuZENvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29sb3Igc2NoZW1lIHVzZWQgYnkgdGhlIHBsdWdpbi4gQ2FuIGJlIFwibGlnaHRcIiBvciBcImRhcmtcIi4gRGVmYXVsdHMgdG8gbGlnaHQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGNvbG9yU2NoZW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHNlbnQuIERlZmF1bHRzIHRvIHRoZSBjdXJyZW50IFVSTC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHlvdXIgd2ViIHNpdGUgb3Igb25saW5lIHNlcnZpY2UsIG9yIGEgcG9ydGlvbiBvZiB5b3VyIHNlcnZpY2UsIGlzIGRpcmVjdGVkIHRvIGNoaWxkcmVuIHVuZGVyIDEzIHlvdSBtdXN0IGVuYWJsZSB0aGlzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBraWREaXJlY3RlZFNpdGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbGFiZWwgZm9yIHRyYWNraW5nIHJlZmVycmFscyB3aGljaCBtdXN0IGJlIGxlc3MgdGhhbiA1MCBjaGFyYWN0ZXJzLCBhbmQgY2FuIGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYW5kIHNvbWUgcHVuY3R1YXRpb24gKGN1cnJlbnRseSArLz0tLjpfKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgcmVmOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpemUgb2YgdGhlIGJ1dHRvbi4gRGVmYXVsdHMgdG8gc21hbGwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItc2VuZCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19