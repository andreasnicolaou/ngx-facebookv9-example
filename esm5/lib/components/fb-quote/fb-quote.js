import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
/**
 * @name Quote Plugin
 * @shortdesc Quote plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/quote
 * @description
 * The quote plugin lets people select text on your page and add it to their share, so they can tell a more expressive story.
 * Note that you do not need to implement Facebook login or request any additional permissions through app review in order to use this plugin.
 * @usage
 * ```html
 * <fb-quote></fb-quote>
 * ```
 */
var FBQuoteComponent = /** @class */ (function (_super) {
    __extends(FBQuoteComponent, _super);
    function FBQuoteComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-quote') || this;
    }
    FBQuoteComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        FBMLAttribute
    ], FBQuoteComponent.prototype, "href", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBQuoteComponent.prototype, "layout", void 0);
    FBQuoteComponent = __decorate([
        Component({
            selector: 'fb-quote',
            template: ''
        })
    ], FBQuoteComponent);
    return FBQuoteComponent;
}(FBMLComponent));
export { FBQuoteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcXVvdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1xdW90ZS9mYi1xdW90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0g7SUFBc0Msb0NBQWE7SUFpQmpELDBCQUNFLEVBQWMsRUFDZCxHQUFjO2VBRWQsa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUM7SUFDNUIsQ0FBQzs7Z0JBSkssVUFBVTtnQkFDVCxTQUFTOztJQVhoQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7a0RBQ0Q7SUFPYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7b0RBQ0M7SUFmSixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csZ0JBQWdCLENBd0I1QjtJQUFELHVCQUFDO0NBQUEsQUF4QkQsQ0FBc0MsYUFBYSxHQXdCbEQ7U0F4QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgUXVvdGUgUGx1Z2luXHJcbiAqIEBzaG9ydGRlc2MgUXVvdGUgcGx1Z2luIGNvbXBvbmVudFxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvcXVvdGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBxdW90ZSBwbHVnaW4gbGV0cyBwZW9wbGUgc2VsZWN0IHRleHQgb24geW91ciBwYWdlIGFuZCBhZGQgaXQgdG8gdGhlaXIgc2hhcmUsIHNvIHRoZXkgY2FuIHRlbGwgYSBtb3JlIGV4cHJlc3NpdmUgc3RvcnkuXHJcbiAqIE5vdGUgdGhhdCB5b3UgZG8gbm90IG5lZWQgdG8gaW1wbGVtZW50IEZhY2Vib29rIGxvZ2luIG9yIHJlcXVlc3QgYW55IGFkZGl0aW9uYWwgcGVybWlzc2lvbnMgdGhyb3VnaCBhcHAgcmV2aWV3IGluIG9yZGVyIHRvIHVzZSB0aGlzIHBsdWdpbi5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLXF1b3RlPjwvZmItcXVvdGU+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1xdW90ZScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlF1b3RlQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHF1b3RlZC5cclxuICAgKiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBVUkxcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDYW4gYmUgc2V0IHRvIHF1b3RlIG9yIGJ1dHRvbi4gRGVmYXVsdHMgdG8gcXVvdGUuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGxheW91dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1xdW90ZScpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19