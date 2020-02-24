import { __decorate } from "tslib";
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
let FBQuoteComponent = class FBQuoteComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-quote');
    }
};
FBQuoteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { FBQuoteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcXVvdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1xdW90ZS9mYi1xdW90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0gsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxhQUFhO0lBaUJqRCxZQUNFLEVBQWMsRUFDZCxHQUFjO1FBRWQsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUVGLENBQUE7O1lBTk8sVUFBVTtZQUNULFNBQVM7O0FBWGhCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs4Q0FDRDtBQU9iO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtnREFDQztBQWZKLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxnQkFBZ0IsQ0F3QjVCO1NBeEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFF1b3RlIFBsdWdpblxyXG4gKiBAc2hvcnRkZXNjIFF1b3RlIHBsdWdpbiBjb21wb25lbnRcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3F1b3RlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgcXVvdGUgcGx1Z2luIGxldHMgcGVvcGxlIHNlbGVjdCB0ZXh0IG9uIHlvdXIgcGFnZSBhbmQgYWRkIGl0IHRvIHRoZWlyIHNoYXJlLCBzbyB0aGV5IGNhbiB0ZWxsIGEgbW9yZSBleHByZXNzaXZlIHN0b3J5LlxyXG4gKiBOb3RlIHRoYXQgeW91IGRvIG5vdCBuZWVkIHRvIGltcGxlbWVudCBGYWNlYm9vayBsb2dpbiBvciByZXF1ZXN0IGFueSBhZGRpdGlvbmFsIHBlcm1pc3Npb25zIHRocm91Z2ggYXBwIHJldmlldyBpbiBvcmRlciB0byB1c2UgdGhpcyBwbHVnaW4uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1xdW90ZT48L2ZiLXF1b3RlPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItcXVvdGUnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJRdW90ZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBxdW90ZWQuXHJcbiAgICogRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgVVJMXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FuIGJlIHNldCB0byBxdW90ZSBvciBidXR0b24uIERlZmF1bHRzIHRvIHF1b3RlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBsYXlvdXQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItcXVvdGUnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==