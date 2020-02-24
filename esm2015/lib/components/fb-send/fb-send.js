import { __decorate } from "tslib";
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
let FBSendComponent = class FBSendComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-send');
        /**
         * The absolute URL of the page that will be sent. Defaults to the current URL.
         */
        this.href = window.location.href;
    }
};
FBSendComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { FBSendComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2VuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXNlbmQvZmItc2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGFBQWE7SUFxQ2hELFlBQ0UsRUFBYyxFQUNkLEdBQWM7UUFFZCxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQWhDNUI7O1dBRUc7UUFHSCxTQUFJLEdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUE0QnBDLENBQUM7Q0FFRixDQUFBOztZQU5PLFVBQVU7WUFDVCxTQUFTOztBQWhDaEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO29EQUNNO0FBT3BCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs2Q0FDc0I7QUFPcEM7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhO3dEQUNXO0FBT3pCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs0Q0FDRjtBQU9aO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs2Q0FDRDtBQW5DRixlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLGVBQWUsQ0E0QzNCO1NBNUNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTZW5kIEJ1dHRvblxyXG4gKiBAc2hvcnRkZXNjIFNlbmQgYnV0dG9uIGNvbXBvbmVudFxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvc2VuZC1idXR0b25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBTZW5kIGJ1dHRvbiBsZXRzIHBlb3BsZSBwcml2YXRlbHkgc2VuZCBjb250ZW50IG9uIHlvdXIgc2l0ZSB0byBvbmUgb3IgbW9yZSBmcmllbmRzIGluIGEgRmFjZWJvb2sgbWVzc2FnZS5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLXNlbmQgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96eXJhL25nMi1mYWNlYm9vay1zZGsvXCI+PC9mYi1zZW5kPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItc2VuZCcsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlNlbmRDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIHNjaGVtZSB1c2VkIGJ5IHRoZSBwbHVnaW4uIENhbiBiZSBcImxpZ2h0XCIgb3IgXCJkYXJrXCIuIERlZmF1bHRzIHRvIGxpZ2h0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBjb2xvclNjaGVtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBzZW50LiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3VyIHdlYiBzaXRlIG9yIG9ubGluZSBzZXJ2aWNlLCBvciBhIHBvcnRpb24gb2YgeW91ciBzZXJ2aWNlLCBpcyBkaXJlY3RlZCB0byBjaGlsZHJlbiB1bmRlciAxMyB5b3UgbXVzdCBlbmFibGUgdGhpcy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAga2lkRGlyZWN0ZWRTaXRlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBIGxhYmVsIGZvciB0cmFja2luZyByZWZlcnJhbHMgd2hpY2ggbXVzdCBiZSBsZXNzIHRoYW4gNTAgY2hhcmFjdGVycywgYW5kIGNhbiBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCBzb21lIHB1bmN0dWF0aW9uIChjdXJyZW50bHkgKy89LS46XykuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTaXplIG9mIHRoZSBidXR0b24uIERlZmF1bHRzIHRvIHNtYWxsLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLXNlbmQnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==