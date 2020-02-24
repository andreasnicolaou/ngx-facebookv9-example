import { __decorate, __extends } from "tslib";
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
var FBCommentsComponent = /** @class */ (function (_super) {
    __extends(FBCommentsComponent, _super);
    function FBCommentsComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-comments') || this;
        /**
         * The absolute URL that comments posted in the plugin will be permanently associated with.
         * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
         * Defaults to current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    FBCommentsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "colorscheme", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "href", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "mobile", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "numposts", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "orderBy", void 0);
    __decorate([
        Input(),
        FBMLAttribute
    ], FBCommentsComponent.prototype, "width", void 0);
    FBCommentsComponent = __decorate([
        Component({
            selector: 'fb-comments',
            template: ''
        })
    ], FBCommentsComponent);
    return FBCommentsComponent;
}(FBMLComponent));
export { FBCommentsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYi1jb21tZW50cy9mYi1jb21tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFLSDtJQUF5Qyx1Q0FBYTtJQWtEcEQsNkJBQ0UsRUFBYyxFQUNkLEdBQWM7UUFGaEIsWUFJRSxrQkFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxTQUM5QjtRQTlDRDs7OztXQUlHO1FBR0gsVUFBSSxHQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztJQXVDcEMsQ0FBQzs7Z0JBSkssVUFBVTtnQkFDVCxTQUFTOztJQTdDaEI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhOzREQUNNO0lBU3BCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTtxREFDc0I7SUFPcEM7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3VEQUNFO0lBT2hCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsYUFBYTt5REFDRztJQU9qQjtRQUZDLEtBQUssRUFBRTtRQUNQLGFBQWE7d0RBQ0U7SUFXaEI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3NEQUNBO0lBaERILG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxtQkFBbUIsQ0F5RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpERCxDQUF5QyxhQUFhLEdBeURyRDtTQXpEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDb21tZW50c1xyXG4gKiBAc2hvcnRkZXNjIENvbW1lbnRzIGNvbXBvbmVudFxyXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvY29tbWVudHNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBjb21tZW50cyBwbHVnaW4gbGV0cyBwZW9wbGUgY29tbWVudCBvbiBjb250ZW50IG9uIHlvdXIgc2l0ZSB1c2luZyB0aGVpciBGYWNlYm9vayBhY2NvdW50LlxyXG4gKiBQZW9wbGUgY2FuIGNob29zZSB0byBzaGFyZSB0aGVpciBjb21tZW50IGFjdGl2aXR5IHdpdGggdGhlaXIgZnJpZW5kcyAoYW5kIGZyaWVuZHMgb2YgdGhlaXIgZnJpZW5kcykgb24gRmFjZWJvb2sgYXMgd2VsbC5cclxuICogVGhlIGNvbW1lbnRzIHBsdWdpbiBhbHNvIGluY2x1ZGVzIGJ1aWx0LWluIG1vZGVyYXRpb24gdG9vbHMgYW5kIHNvY2lhbCByZWxldmFuY2UgcmFua2luZy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYGh0bWxcclxuICogPGZiLWNvbW1lbnRzPjwvZmItY29tbWVudHM+XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmYi1jb21tZW50cycsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQkNvbW1lbnRzQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb2xvciBzY2hlbWUgdXNlZCBieSB0aGUgY29tbWVudHMgcGx1Z2luLiBDYW4gYmUgYGxpZ2h0YCBvciBgZGFya2AuIERlZmF1bHRzIHRvIGBsaWdodGAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIGNvbG9yc2NoZW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhYnNvbHV0ZSBVUkwgdGhhdCBjb21tZW50cyBwb3N0ZWQgaW4gdGhlIHBsdWdpbiB3aWxsIGJlIHBlcm1hbmVudGx5IGFzc29jaWF0ZWQgd2l0aC5cclxuICAgKiBBbGwgc3RvcmllcyBzaGFyZWQgb24gRmFjZWJvb2sgYWJvdXQgY29tbWVudHMgcG9zdGVkIHVzaW5nIHRoZSBjb21tZW50cyBwbHVnaW4gd2lsbCBsaW5rIHRvIHRoaXMgVVJMLlxyXG4gICAqIERlZmF1bHRzIHRvIGN1cnJlbnQgVVJMLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBocmVmOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIHZhbHVlIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgbW9iaWxlLW9wdGltaXplZCB2ZXJzaW9uIG9yIG5vdC4gSWYgbm8gdmFsdWUgaXMgZ2l2ZW4sIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBkZXRlY3RlZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgbW9iaWxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbW1lbnRzIHRvIHNob3cgYnkgZGVmYXVsdC4gVGhlIG1pbmltdW0gdmFsdWUgaXMgYDFgLiBEZWZhdWx0cyB0byBgMTBgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICBudW1wb3N0czogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgb3JkZXIgdG8gdXNlIHdoZW4gZGlzcGxheWluZyBjb21tZW50cy4gQ2FuIGJlIGBzb2NpYWxgLCBgcmV2ZXJzZV90aW1lYCwgb3IgYHRpbWVgLiBUaGUgZGlmZmVyZW50IG9yZGVyIHR5cGVzIGFyZSBleHBsYWluZWQgW2luIHRoZSBGQVFdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2NvbW1lbnRzI2ZhcW9yZGVyKS4gRGVmYXVsdHMgdG8gYHNvY2lhbGBcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGNvbW1lbnRzIHBsdWdpbiBvbiB0aGUgd2VicGFnZS5cclxuICAgKiBUaGlzIGNhbiBiZSBlaXRoZXIgYSBwaXhlbCB2YWx1ZSBvciBhIHBlcmNlbnRhZ2UgKHN1Y2ggYXMgMTAwJSkgZm9yIGZsdWlkIHdpZHRoLlxyXG4gICAqIFRoZSBtb2JpbGUgdmVyc2lvbiBvZiB0aGUgY29tbWVudHMgcGx1Z2luIGlnbm9yZXMgdGhlIHdpZHRoIHBhcmFtZXRlciBhbmQgaW5zdGVhZCBoYXMgYSBmbHVpZCB3aWR0aCBvZiAxMDAlLlxyXG4gICAqIFRoZSBtaW5pbXVtIHdpZHRoIHN1cHBvcnRlZCBieSB0aGUgY29tbWVudHMgcGx1Z2luIGlzIDMyMHB4LlxyXG4gICAqIERlZmF1bHRzIHRvIGA1NTBweGAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBybmQ6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWwsIHJuZCwgJ2ZiLWNvbW1lbnRzJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=