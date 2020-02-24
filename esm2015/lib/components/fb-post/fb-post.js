import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Posts
 * @shortdesc Embedded post component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
 * ```
 */
let FBPostComponent = class FBPostComponent extends FBMLComponent {
    constructor(el, rnd) {
        super(el, rnd, 'fb-post');
    }
};
FBPostComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "href", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "width", void 0);
__decorate([
    Input(),
    FBMLAttribute
], FBPostComponent.prototype, "showText", void 0);
FBPostComponent = __decorate([
    Component({
        selector: 'fb-post',
        template: ''
    })
], FBPostComponent);
export { FBPostComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcG9zdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXBvc3QvZmItcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0gsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxhQUFhO0lBdUJoRCxZQUNFLEVBQWMsRUFDZCxHQUFjO1FBRWQsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUVGLENBQUE7O1lBTk8sVUFBVTtZQUNULFNBQVM7O0FBbEJoQjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7NkNBQ0Q7QUFPYjtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7OENBQ0E7QUFPZDtJQUZDLEtBQUssRUFBRTtJQUNQLGFBQWE7aURBQ0k7QUFyQlAsZUFBZTtJQUozQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxlQUFlLENBOEIzQjtTQTlCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZCTUxBdHRyaWJ1dGUsIEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRW1iZWRkZWQgUG9zdHNcclxuICogQHNob3J0ZGVzYyBFbWJlZGRlZCBwb3N0IGNvbXBvbmVudFxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvZW1iZWRkZWQtcG9zdHNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEVtYmVkZGVkIFBvc3RzIGFyZSBhIHNpbXBsZSB3YXkgdG8gcHV0IHB1YmxpYyBwb3N0cyAtIGJ5IGEgUGFnZSBvciBhIHBlcnNvbiBvbiBGYWNlYm9vayAtIGludG8gdGhlIGNvbnRlbnQgb2YgeW91ciB3ZWIgc2l0ZSBvciB3ZWIgcGFnZS5cclxuICogT25seSBwdWJsaWMgcG9zdHMgZnJvbSBGYWNlYm9vayBQYWdlcyBhbmQgcHJvZmlsZXMgY2FuIGJlIGVtYmVkZGVkLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgaHRtbFxyXG4gKiA8ZmItcG9zdCBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzIwNTMxMzE2NzI4L3Bvc3RzLzEwMTU0MDA5OTkwNTA2NzI5L1wiPjwvZmItcG9zdD5cclxuICogYGBgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZiLXBvc3QnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRkJQb3N0Q29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIHBvc3QuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGhyZWY6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBwb3N0LiBNaW4uIGAzNTBgIHBpeGVsOyBNYXguIGA3NTBgIHBpeGVsLiBTZXQgdG8gYXV0byB0byB1c2UgZmx1aWQgd2lkdGguIERlZmF1bHRzIHRvIGBhdXRvYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgd2lkdGg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbGllZCB0byBwaG90byBwb3N0LiBTZXQgdG8gYHRydWVgIHRvIGluY2x1ZGUgdGhlIHRleHQgZnJvbSB0aGUgRmFjZWJvb2sgcG9zdCwgaWYgYW55LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBzaG93VGV4dDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHJuZDogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbCwgcm5kLCAnZmItcG9zdCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19