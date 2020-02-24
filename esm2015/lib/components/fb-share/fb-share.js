import { __decorate } from "tslib";
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
let FBShareComponent = class FBShareComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-share-button');
    }
};
FBShareComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { FBShareComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2hhcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1zaGFyZS9mYi1zaGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGFBQWE7SUE4QmpELFlBQ0UsRUFBYyxFQUNkLEdBQWM7UUFFZCxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FFRixDQUFBOztZQU5PLFVBQVU7WUFDVCxTQUFTOztBQXpCaEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhOzhDQUNEO0FBT2I7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO2dEQUNDO0FBT2Y7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO3NEQUNRO0FBT3RCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs4Q0FDRDtBQTVCRixnQkFBZ0I7SUFKNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csZ0JBQWdCLENBcUM1QjtTQXJDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTaGFyZSBCdXR0b25cclxuICogQHNob3J0ZGVzYyBTaGFyZSBidXR0b24gY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9zaGFyZS1idXR0b25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBTaGFyZSBidXR0b24gbGV0cyBwZW9wbGUgYWRkIGEgcGVyc29uYWxpemVkIG1lc3NhZ2UgdG8gbGlua3MgYmVmb3JlIHNoYXJpbmcgb24gdGhlaXIgdGltZWxpbmUsIGluIGdyb3Vwcywgb3IgdG8gdGhlaXIgZnJpZW5kcyB2aWEgYSBGYWNlYm9vayBNZXNzYWdlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8ZmItc2hhcmUgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96eXJhL25nMi1mYWNlYm9vay1zZGsvXCI+PC9mYi1zaGFyZT5cclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZiLXNoYXJlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCU2hhcmVDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFic29sdXRlIFVSTCBvZiB0aGUgcGFnZSB0aGF0IHdpbGwgYmUgc2hhcmVkLiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0cyBvbmUgb2YgdGhlIGRpZmZlcmVudCBsYXlvdXRzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHBsdWdpbi4gQ2FuIGJlIG9uZSBvZiBgYm94X2NvdW50YCwgYGJ1dHRvbl9jb3VudGAsIGBidXR0b25gLiBEZWZhdWx0cyB0byBgaWNvbl9saW5rYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgbGF5b3V0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgc2hhcmUgYnV0dG9uIHdpbGwgb3BlbiB0aGUgc2hhcmUgZGlhbG9nIGluIGFuIGlmcmFtZSAoaW5zdGVhZCBvZiBhIHBvcHVwKSBvbiB0b3Agb2YgeW91ciB3ZWJzaXRlIG9uIG1vYmlsZS4gVGhpcyBvcHRpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIG1vYmlsZSwgbm90IGRlc2t0b3AuIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIG1vYmlsZUlmcmFtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJ1dHRvbiBpcyBvZmZlcmVkIGluIDIgc2l6ZXMgaS5lLiBsYXJnZSBhbmQgc21hbGwuIERlZmF1bHRzIHRvIGBzbWFsbGAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItc2hhcmUtYnV0dG9uJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=