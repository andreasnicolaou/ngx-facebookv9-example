import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
var FBSaveComponent = /** @class */ (function (_super) {
    __extends(FBSaveComponent, _super);
    function FBSaveComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-save') || this;
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        _this.uri = window.location.href;
        return _this;
    }
    FBSaveComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        FBMLAttribute
    ], FBSaveComponent.prototype, "uri", void 0);
    FBSaveComponent = __decorate([
        Component({
            selector: 'fb-save',
            template: ''
        })
    ], FBSaveComponent);
    return FBSaveComponent;
}(FBMLComponent));
export { FBSaveComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2F2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXNhdmUvZmItc2F2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSDtJQUFxQyxtQ0FBYTtJQVVoRCx5QkFDRSxFQUFjLEVBQ2QsR0FBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQzFCO1FBYkQ7OztXQUdHO1FBR0gsU0FBRyxHQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztJQU9uQyxDQUFDOztnQkFKSyxVQUFVO2dCQUNULFNBQVM7O0lBSmhCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtnREFDcUI7SUFSeEIsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxlQUFlLENBaUIzQjtJQUFELHNCQUFDO0NBQUEsQUFqQkQsQ0FBcUMsYUFBYSxHQWlCakQ7U0FqQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNhdmUgQnV0dG9uXHJcbiAqIEBzaG9ydGRlc2MgU2F2ZSBidXR0b24gY29tcG9uZW50LlxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvc2F2ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFNhdmUgYnV0dG9uIGxldHMgcGVvcGxlIHNhdmUgaXRlbXMgb3Igc2VydmljZXMgdG8gYSBwcml2YXRlIGxpc3Qgb24gRmFjZWJvb2ssIHNoYXJlIGl0IHdpdGggZnJpZW5kcywgYW5kIHJlY2VpdmUgcmVsZXZhbnQgbm90aWZpY2F0aW9ucy5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLXNhdmUgdXJpPVwiaHR0cHM6Ly9naXRodWIuY29tL3p5cmEvbmcyLWZhY2Vib29rLXNkay9cIj48L2ZiLXNhdmU+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1zYXZlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCU2F2ZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgbGluayBvZiB0aGUgcGFnZSB0aGF0IHdpbGwgYmUgc2F2ZWQuXHJcbiAgICogQ3VycmVudCBMaW5rL0FkZHJlc3NcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgdXJpOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItc2F2ZScpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19