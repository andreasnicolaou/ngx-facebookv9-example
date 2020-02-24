import { __decorate, __extends } from "tslib";
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
var FBFollowComponent = /** @class */ (function (_super) {
    __extends(FBFollowComponent, _super);
    function FBFollowComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-follow') || this;
    }
    FBFollowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBFollowComponent;
}(FBMLComponent));
export { FBFollowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItZm9sbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZhY2Vib29rLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmItZm9sbG93L2ZiLWZvbGxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7R0FTRztBQUtIO0lBQXVDLHFDQUFhO0lBb0RsRCwyQkFDRSxFQUFjLEVBQ2QsR0FBYztlQUVkLGtCQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQzdCLENBQUM7O2dCQUpLLFVBQVU7Z0JBQ1QsU0FBUzs7SUEvQ2hCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTswREFDTTtJQU9wQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7bURBQ0Q7SUFPYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7OERBQ1c7SUFRekI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3FEQUNDO0lBT2Y7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3dEQUNJO0lBT2xCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTttREFDRDtJQU9iO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtvREFDQTtJQWxESCxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csaUJBQWlCLENBMkQ3QjtJQUFELHdCQUFDO0NBQUEsQUEzREQsQ0FBdUMsYUFBYSxHQTJEbkQ7U0EzRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRm9sbG93IEJ1dHRvblxyXG4gKiBAc2hvcnRkZXNjIEZvbGxvdyBidXR0b24gY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9mb2xsb3ctYnV0dG9uXHJcbiAqIEBkZXNjcmlwdGlvbiBUaGUgRm9sbG93IGJ1dHRvbiBsZXRzIHBlb3BsZSBzdWJzY3JpYmUgdG8gdGhlIHB1YmxpYyB1cGRhdGVzIG9mIG90aGVycyBvbiBGYWNlYm9vay5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLWZvbGxvdyBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3p1Y2tcIj48L2ZiLWZvbGxvdz5cclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZiLWZvbGxvdycsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQkZvbGxvd0NvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29sb3Igc2NoZW1lIHVzZWQgYnkgdGhlIHBsdWdpbi4gQ2FuIGJlIGBsaWdodGAgb3IgYGRhcmtgLiBEZWZhdWx0cyB0byBgbGlnaHRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBjb2xvclNjaGVtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgRmFjZWJvb2suY29tIHByb2ZpbGUgVVJMIG9mIHRoZSB1c2VyIHRvIGZvbGxvdy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3VyIHdlYiBzaXRlIG9yIG9ubGluZSBzZXJ2aWNlLCBvciBhIHBvcnRpb24gb2YgeW91ciBzZXJ2aWNlLCBpcyBkaXJlY3RlZCB0byBjaGlsZHJlbiB1bmRlciAxMyB5b3UgbXVzdCBlbmFibGUgdGhpcy4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAga2lkRGlyZWN0ZWRTaXRlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3RzIG9uZSBvZiB0aGUgZGlmZmVyZW50IGxheW91dHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciB0aGUgcGx1Z2luLiBDYW4gYmUgb25lIG9mIGBzdGFuZGFyZGAsIGBidXR0b25fY291bnRgLCBvciBgYm94X2NvdW50YC5cclxuICAgKiBEZWZhdWx0cyB0byBgc3RhbmRhcmRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBsYXlvdXQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZGlzcGxheSBwcm9maWxlIHBob3RvcyBiZWxvdyB0aGUgYnV0dG9uLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaG93RmFjZXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJ1dHRvbiBpcyBvZmZlcmVkIGluIDIgc2l6ZXMgaS5lLiBgbGFyZ2VgIGFuZCBgc21hbGxgLiBEZWZhdWx0cyB0byBgc21hbGxgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgcGx1Z2luLiBUaGUgbGF5b3V0IHlvdSBjaG9vc2UgYWZmZWN0cyB0aGUgbWluaW11bSBhbmQgZGVmYXVsdCB3aWR0aHMgeW91IGNhbiB1c2UuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLWZvbGxvdycpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19