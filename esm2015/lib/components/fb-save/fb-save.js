import { __decorate } from "tslib";
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
let FBSaveComponent = class FBSaveComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-save');
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        this.uri = window.location.href;
    }
};
FBSaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { FBSaveComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2F2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXNhdmUvZmItc2F2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7O0dBVUc7QUFLSCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGFBQWE7SUFVaEQsWUFDRSxFQUFjLEVBQ2QsR0FBYztRQUVkLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBWjVCOzs7V0FHRztRQUdILFFBQUcsR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQU9uQyxDQUFDO0NBRUYsQ0FBQTs7WUFOTyxVQUFVO1lBQ1QsU0FBUzs7QUFKaEI7SUFGQyxLQUFLLEVBQUU7SUFDUCxhQUFhOzRDQUNxQjtBQVJ4QixlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLGVBQWUsQ0FpQjNCO1NBakJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTYXZlIEJ1dHRvblxyXG4gKiBAc2hvcnRkZXNjIFNhdmUgYnV0dG9uIGNvbXBvbmVudC5cclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3NhdmVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBTYXZlIGJ1dHRvbiBsZXRzIHBlb3BsZSBzYXZlIGl0ZW1zIG9yIHNlcnZpY2VzIHRvIGEgcHJpdmF0ZSBsaXN0IG9uIEZhY2Vib29rLCBzaGFyZSBpdCB3aXRoIGZyaWVuZHMsIGFuZCByZWNlaXZlIHJlbGV2YW50IG5vdGlmaWNhdGlvbnMuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1zYXZlIHVyaT1cImh0dHBzOi8vZ2l0aHViLmNvbS96eXJhL25nMi1mYWNlYm9vay1zZGsvXCI+PC9mYi1zYXZlPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItc2F2ZScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlNhdmVDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFic29sdXRlIGxpbmsgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHNhdmVkLlxyXG4gICAqIEN1cnJlbnQgTGluay9BZGRyZXNzXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHVyaTogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLXNhdmUnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==