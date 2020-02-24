import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FacebookService } from './providers/facebook';
import { FBCommentEmbedComponent } from './components/fb-comment-embed/fb-comment-embed';
import { FBCommentsComponent } from './components/fb-comments/fb-comments';
import { FBFollowComponent } from './components/fb-follow/fb-follow';
import { FBLikeComponent } from './components/fb-like/fb-like';
import { FBPageComponent } from './components/fb-page/fb-page';
import { FBPostComponent } from './components/fb-post/fb-post';
import { FBQuoteComponent } from './components/fb-quote/fb-quote';
import { FBSaveComponent } from './components/fb-save/fb-save';
import { FBSendComponent } from './components/fb-send/fb-send';
import { FBShareComponent } from './components/fb-share/fb-share';
import { FBVideoComponent } from './components/fb-video/fb-video';
var components = [
    FBCommentEmbedComponent,
    FBCommentsComponent,
    FBFollowComponent,
    FBLikeComponent,
    FBPageComponent,
    FBPostComponent,
    FBQuoteComponent,
    FBSaveComponent,
    FBSendComponent,
    FBShareComponent,
    FBVideoComponent
];
export function getComponents() {
    return components;
}
/**
 * @shortdesc The module to import to add this library
 * @description
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
 *
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     ...
 *     FacebookModule.forRoot()
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
var FacebookModule = /** @class */ (function () {
    function FacebookModule() {
    }
    FacebookModule_1 = FacebookModule;
    FacebookModule.forRoot = function () {
        return {
            ngModule: FacebookModule_1,
            providers: [FacebookService]
        };
    };
    var FacebookModule_1;
    FacebookModule = FacebookModule_1 = __decorate([
        NgModule({
            declarations: getComponents(),
            exports: getComponents()
        })
    ], FacebookModule);
    return FacebookModule;
}());
export { FacebookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZhY2Vib29rLyIsInNvdXJjZXMiOlsibGliL2ZhY2Vib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbEUsSUFBTSxVQUFVLEdBQVU7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsTUFBTSxVQUFVLGFBQWE7SUFDM0IsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUtIO0lBQUE7SUFPQSxDQUFDO3VCQVBZLGNBQWM7SUFDbEIsc0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztJQU5VLGNBQWM7UUFKMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLGFBQWEsRUFBRTtZQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFO1NBQ3pCLENBQUM7T0FDVyxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZhY2Vib29rU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2ZhY2Vib29rJztcclxuXHJcbmltcG9ydCB7IEZCQ29tbWVudEVtYmVkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLWNvbW1lbnQtZW1iZWQvZmItY29tbWVudC1lbWJlZCc7XHJcbmltcG9ydCB7IEZCQ29tbWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItY29tbWVudHMvZmItY29tbWVudHMnO1xyXG5pbXBvcnQgeyBGQkZvbGxvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1mb2xsb3cvZmItZm9sbG93JztcclxuaW1wb3J0IHsgRkJMaWtlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLWxpa2UvZmItbGlrZSc7XHJcbmltcG9ydCB7IEZCUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1wYWdlL2ZiLXBhZ2UnO1xyXG5pbXBvcnQgeyBGQlBvc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItcG9zdC9mYi1wb3N0JztcclxuaW1wb3J0IHsgRkJRdW90ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1xdW90ZS9mYi1xdW90ZSc7XHJcbmltcG9ydCB7IEZCU2F2ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1zYXZlL2ZiLXNhdmUnO1xyXG5pbXBvcnQgeyBGQlNlbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItc2VuZC9mYi1zZW5kJztcclxuaW1wb3J0IHsgRkJTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1zaGFyZS9mYi1zaGFyZSc7XHJcbmltcG9ydCB7IEZCVmlkZW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItdmlkZW8vZmItdmlkZW8nO1xyXG5cclxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXHJcbiAgRkJDb21tZW50RW1iZWRDb21wb25lbnQsXHJcbiAgRkJDb21tZW50c0NvbXBvbmVudCxcclxuICBGQkZvbGxvd0NvbXBvbmVudCxcclxuICBGQkxpa2VDb21wb25lbnQsXHJcbiAgRkJQYWdlQ29tcG9uZW50LFxyXG4gIEZCUG9zdENvbXBvbmVudCxcclxuICBGQlF1b3RlQ29tcG9uZW50LFxyXG4gIEZCU2F2ZUNvbXBvbmVudCxcclxuICBGQlNlbmRDb21wb25lbnQsXHJcbiAgRkJTaGFyZUNvbXBvbmVudCxcclxuICBGQlZpZGVvQ29tcG9uZW50XHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50cygpIHtcclxuICByZXR1cm4gY29tcG9uZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzaG9ydGRlc2MgVGhlIG1vZHVsZSB0byBpbXBvcnQgdG8gYWRkIHRoaXMgbGlicmFyeVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIG1haW4gbW9kdWxlIHRvIGltcG9ydCBpbnRvIHlvdXIgYXBwbGljYXRpb24uXHJcbiAqIFlvdSBvbmx5IG5lZWQgdG8gaW1wb3J0IHRoaXMgbW9kdWxlIGlmIHlvdSB3aXNoIHRvIHVzZSB0aGUgY29tcG9uZW50cyBpbiB0aGlzIGxpYnJhcnk7IG90aGVyd2lzZSwgeW91IGNvdWxkIGp1c3QgaW1wb3J0IFtGYWNlYm9va1NlcnZpY2VdKC4uL2ZhY2Vib29rLXNlcnZpY2UpIGludG8geW91ciBtb2R1bGUgaW5zdGVhZC5cclxuICogVGhpcyBtb2R1bGUgd2lsbCBtYWtlIGFsbCBjb21wb25lbnRzIGFuZCBwcm92aWRlcnMgYXZhaWxhYmxlIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBJbiBvcmRlciB0byB1c2UgdGhpcyBsaWJyYXJ5LCB5b3UgbmVlZCB0byBpbXBvcnQgYEZhY2Vib29rTW9kdWxlYCBpbnRvIHlvdXIgYXBwJ3MgbWFpbiBgTmdNb2R1bGVgLlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZhY2Vib29rTW9kdWxlIH0gZnJvbSAnbmcyLWZhY2Vib29rLXNkayc7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgLi4uXHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgLi4uXHJcbiAqICAgICBGYWNlYm9va01vZHVsZS5mb3JSb290KClcclxuICogICBdLFxyXG4gKiAgIC4uLlxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBnZXRDb21wb25lbnRzKCksXHJcbiAgZXhwb3J0czogZ2V0Q29tcG9uZW50cygpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmFjZWJvb2tNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZhY2Vib29rU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==