import { __decorate, __extends } from "tslib";
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
var FBPostComponent = /** @class */ (function (_super) {
    __extends(FBPostComponent, _super);
    function FBPostComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-post') || this;
    }
    FBPostComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FBPostComponent;
}(FBMLComponent));
export { FBPostComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcG9zdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mYWNlYm9vay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZiLXBvc3QvZmItcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFOzs7Ozs7Ozs7OztHQVdHO0FBS0g7SUFBcUMsbUNBQWE7SUF1QmhELHlCQUNFLEVBQWMsRUFDZCxHQUFjO2VBRWQsa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Z0JBSkssVUFBVTtnQkFDVCxTQUFTOztJQWxCaEI7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO2lEQUNEO0lBT2I7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO2tEQUNBO0lBT2Q7UUFGQyxLQUFLLEVBQUU7UUFDUCxhQUFhO3FEQUNJO0lBckJQLGVBQWU7UUFKM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csZUFBZSxDQThCM0I7SUFBRCxzQkFBQztDQUFBLEFBOUJELENBQXFDLGFBQWEsR0E4QmpEO1NBOUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkJNTEF0dHJpYnV0ZSwgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBFbWJlZGRlZCBQb3N0c1xyXG4gKiBAc2hvcnRkZXNjIEVtYmVkZGVkIHBvc3QgY29tcG9uZW50XHJcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9lbWJlZGRlZC1wb3N0c1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRW1iZWRkZWQgUG9zdHMgYXJlIGEgc2ltcGxlIHdheSB0byBwdXQgcHVibGljIHBvc3RzIC0gYnkgYSBQYWdlIG9yIGEgcGVyc29uIG9uIEZhY2Vib29rIC0gaW50byB0aGUgY29udGVudCBvZiB5b3VyIHdlYiBzaXRlIG9yIHdlYiBwYWdlLlxyXG4gKiBPbmx5IHB1YmxpYyBwb3N0cyBmcm9tIEZhY2Vib29rIFBhZ2VzIGFuZCBwcm9maWxlcyBjYW4gYmUgZW1iZWRkZWQuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBodG1sXHJcbiAqIDxmYi1wb3N0IGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vMjA1MzEzMTY3MjgvcG9zdHMvMTAxNTQwMDk5OTA1MDY3MjkvXCI+PC9mYi1wb3N0PlxyXG4gKiBgYGBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmItcG9zdCcsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGQlBvc3RDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFic29sdXRlIFVSTCBvZiB0aGUgcG9zdC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBGQk1MQXR0cmlidXRlXHJcbiAgaHJlZjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHBvc3QuIE1pbi4gYDM1MGAgcGl4ZWw7IE1heC4gYDc1MGAgcGl4ZWwuIFNldCB0byBhdXRvIHRvIHVzZSBmbHVpZCB3aWR0aC4gRGVmYXVsdHMgdG8gYGF1dG9gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQEZCTUxBdHRyaWJ1dGVcclxuICB3aWR0aDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBcHBsaWVkIHRvIHBob3RvIHBvc3QuIFNldCB0byBgdHJ1ZWAgdG8gaW5jbHVkZSB0aGUgdGV4dCBmcm9tIHRoZSBGYWNlYm9vayBwb3N0LCBpZiBhbnkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBARkJNTEF0dHJpYnV0ZVxyXG4gIHNob3dUZXh0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcm5kOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKGVsLCBybmQsICdmYi1wb3N0Jyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=