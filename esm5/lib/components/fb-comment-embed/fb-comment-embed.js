import { __decorate, __extends } from "tslib";
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
var FBCommentEmbedComponent = /** @class */ (function (_super) {
    __extends(FBCommentEmbedComponent, _super);
    function FBCommentEmbedComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-comment-embed') || this;
    }
    FBCommentEmbedComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBCommentEmbedComponent;
}(FBMLComponent));
export { FBCommentEmbedComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudC1lbWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLWNvbW1lbnQtZW1iZWQvZmItY29tbWVudC1lbWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0g7SUFBNkMsMkNBQWE7SUF1QnhELGlDQUNFLEVBQWMsRUFDZCxHQUFjO2VBRWQsa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQztJQUNwQyxDQUFDOztnQkFKSyxVQUFVO2dCQUNULFNBQVM7O0lBbEJoQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7eURBQ0Q7SUFPYjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7MERBQ0E7SUFPZDtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7a0VBQ1M7SUFyQlosdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csdUJBQXVCLENBOEJuQztJQUFELDhCQUFDO0NBQUEsQUE5QkQsQ0FBNkMsYUFBYSxHQThCekQ7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRW1iZWRkZWQgQ29tbWVudHNcclxuICogQHNob3J0ZGVzYyBFbWJlZGRlZCBjb21tZW50cyBjb21wb25lbnRcclxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2VtYmVkZGVkLWNvbW1lbnRzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBFbWJlZGRlZCBjb21tZW50cyBhcmUgYSBzaW1wbGUgd2F5IHRvIHB1dCBwdWJsaWMgcG9zdCBjb21tZW50cyAtIGJ5IGEgUGFnZSBvciBhIHBlcnNvbiBvbiBGYWNlYm9vayAtIGludG8gdGhlIGNvbnRlbnQgb2YgeW91ciB3ZWIgc2l0ZSBvciB3ZWIgcGFnZS5cclxuICogT25seSBwdWJsaWMgY29tbWVudHMgZnJvbSBGYWNlYm9vayBQYWdlcyBhbmQgcHJvZmlsZXMgY2FuIGJlIGVtYmVkZGVkLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8ZmItY29tbWVudC1lbWJlZCBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3p1Y2svcG9zdHMvMTAxMDI3MzU0NTI1MzI5OTE/Y29tbWVudF9pZD0xMDcwMjMzNzAzMDM2MTg1XCIgd2lkdGg9XCI1MDBcIj48L2ZiLWNvbW1lbnQtZW1iZWQ+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1jb21tZW50LWVtYmVkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZCQ29tbWVudEVtYmVkQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIGNvbW1lbnQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBlbWJlZGRlZCBjb21tZW50IGNvbnRhaW5lci4gTWluLiBgMjIwcHhgLiBEZWZhdWx0cyB0byBgNTYwcHhgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gYHRydWVgIHRvIGluY2x1ZGUgcGFyZW50IGNvbW1lbnQgKGlmIFVSTCBpcyBhIHJlcGx5KS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaW5jbHVkZVBhcmVudDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItY29tbWVudC1lbWJlZCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19