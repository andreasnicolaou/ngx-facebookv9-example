import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Comments
 * @shortdesc Embedded comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
 * @description
 * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public comments from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
 * ```
 */
let FBCommentEmbedComponent = class FBCommentEmbedComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-comment-embed');
    }
};
FBCommentEmbedComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBCommentEmbedComponent.prototype, "includeParent", void 0);
FBCommentEmbedComponent = __decorate([
    Component({
        selector: 'fb-comment-embed',
        template: ''
    })
], FBCommentEmbedComponent);
export { FBCommentEmbedComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudC1lbWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLWNvbW1lbnQtZW1iZWQvZmItY29tbWVudC1lbWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0gsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxhQUFhO0lBdUJ4RCxZQUNFLEVBQWMsRUFDZCxHQUFjO1FBRWQsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBRUYsQ0FBQTs7WUFOTyxVQUFVO1lBQ1QsU0FBUzs7QUFsQmhCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtxREFDRDtBQU9iO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTtzREFDQTtBQU9kO0lBRkMsS0FBSyxFQUFFO0lBQ1AsYUFBYTs4REFDUztBQXJCWix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyx1QkFBdUIsQ0E4Qm5DO1NBOUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGQk1MQXR0cmlidXRlLCBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEVtYmVkZGVkIENvbW1lbnRzXHJcbiAqIEBzaG9ydGRlc2MgRW1iZWRkZWQgY29tbWVudHMgY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9lbWJlZGRlZC1jb21tZW50c1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRW1iZWRkZWQgY29tbWVudHMgYXJlIGEgc2ltcGxlIHdheSB0byBwdXQgcHVibGljIHBvc3QgY29tbWVudHMgLSBieSBhIFBhZ2Ugb3IgYSBwZXJzb24gb24gRmFjZWJvb2sgLSBpbnRvIHRoZSBjb250ZW50IG9mIHlvdXIgd2ViIHNpdGUgb3Igd2ViIHBhZ2UuXHJcbiAqIE9ubHkgcHVibGljIGNvbW1lbnRzIGZyb20gRmFjZWJvb2sgUGFnZXMgYW5kIHByb2ZpbGVzIGNhbiBiZSBlbWJlZGRlZC5cclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLWNvbW1lbnQtZW1iZWQgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS96dWNrL3Bvc3RzLzEwMTAyNzM1NDUyNTMyOTkxP2NvbW1lbnRfaWQ9MTA3MDIzMzcwMzAzNjE4NVwiIHdpZHRoPVwiNTAwXCI+PC9mYi1jb21tZW50LWVtYmVkPlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItY29tbWVudC1lbWJlZCcsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQkNvbW1lbnRFbWJlZENvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBjb21tZW50LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBocmVmOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgZW1iZWRkZWQgY29tbWVudCBjb250YWluZXIuIE1pbi4gYDIyMHB4YC4gRGVmYXVsdHMgdG8gYDU2MHB4YC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgd2lkdGg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIGB0cnVlYCB0byBpbmNsdWRlIHBhcmVudCBjb21tZW50IChpZiBVUkwgaXMgYSByZXBseSkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGluY2x1ZGVQYXJlbnQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLWNvbW1lbnQtZW1iZWQnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==