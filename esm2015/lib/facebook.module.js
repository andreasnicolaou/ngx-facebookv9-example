var FacebookModule_1;
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
const components = [
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
let FacebookModule = FacebookModule_1 = class FacebookModule {
    static forRoot() {
        return {
            ngModule: FacebookModule_1,
            providers: [FacebookService]
        };
    }
};
FacebookModule = FacebookModule_1 = __decorate([
    NgModule({
        declarations: getComponents(),
        exports: getComponents()
    })
], FacebookModule);
export { FacebookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZhY2Vib29rLyIsInNvdXJjZXMiOlsibGliL2ZhY2Vib29rLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE1BQU0sVUFBVSxHQUFVO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGLE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFLSCxJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLGNBQWM7SUFKMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLGFBQWEsRUFBRTtRQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFO0tBQ3pCLENBQUM7R0FDVyxjQUFjLENBTzFCO1NBUFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9mYWNlYm9vayc7XHJcblxyXG5pbXBvcnQgeyBGQkNvbW1lbnRFbWJlZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1jb21tZW50LWVtYmVkL2ZiLWNvbW1lbnQtZW1iZWQnO1xyXG5pbXBvcnQgeyBGQkNvbW1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLWNvbW1lbnRzL2ZiLWNvbW1lbnRzJztcclxuaW1wb3J0IHsgRkJGb2xsb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItZm9sbG93L2ZiLWZvbGxvdyc7XHJcbmltcG9ydCB7IEZCTGlrZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYi1saWtlL2ZiLWxpa2UnO1xyXG5pbXBvcnQgeyBGQlBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItcGFnZS9mYi1wYWdlJztcclxuaW1wb3J0IHsgRkJQb3N0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLXBvc3QvZmItcG9zdCc7XHJcbmltcG9ydCB7IEZCUXVvdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItcXVvdGUvZmItcXVvdGUnO1xyXG5pbXBvcnQgeyBGQlNhdmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItc2F2ZS9mYi1zYXZlJztcclxuaW1wb3J0IHsgRkJTZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLXNlbmQvZmItc2VuZCc7XHJcbmltcG9ydCB7IEZCU2hhcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmItc2hhcmUvZmItc2hhcmUnO1xyXG5pbXBvcnQgeyBGQlZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZiLXZpZGVvL2ZiLXZpZGVvJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6IGFueVtdID0gW1xyXG4gIEZCQ29tbWVudEVtYmVkQ29tcG9uZW50LFxyXG4gIEZCQ29tbWVudHNDb21wb25lbnQsXHJcbiAgRkJGb2xsb3dDb21wb25lbnQsXHJcbiAgRkJMaWtlQ29tcG9uZW50LFxyXG4gIEZCUGFnZUNvbXBvbmVudCxcclxuICBGQlBvc3RDb21wb25lbnQsXHJcbiAgRkJRdW90ZUNvbXBvbmVudCxcclxuICBGQlNhdmVDb21wb25lbnQsXHJcbiAgRkJTZW5kQ29tcG9uZW50LFxyXG4gIEZCU2hhcmVDb21wb25lbnQsXHJcbiAgRkJWaWRlb0NvbXBvbmVudFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudHMoKSB7XHJcbiAgcmV0dXJuIGNvbXBvbmVudHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc2hvcnRkZXNjIFRoZSBtb2R1bGUgdG8gaW1wb3J0IHRvIGFkZCB0aGlzIGxpYnJhcnlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBtYWluIG1vZHVsZSB0byBpbXBvcnQgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gKiBZb3Ugb25seSBuZWVkIHRvIGltcG9ydCB0aGlzIG1vZHVsZSBpZiB5b3Ugd2lzaCB0byB1c2UgdGhlIGNvbXBvbmVudHMgaW4gdGhpcyBsaWJyYXJ5OyBvdGhlcndpc2UsIHlvdSBjb3VsZCBqdXN0IGltcG9ydCBbRmFjZWJvb2tTZXJ2aWNlXSguLi9mYWNlYm9vay1zZXJ2aWNlKSBpbnRvIHlvdXIgbW9kdWxlIGluc3RlYWQuXHJcbiAqIFRoaXMgbW9kdWxlIHdpbGwgbWFrZSBhbGwgY29tcG9uZW50cyBhbmQgcHJvdmlkZXJzIGF2YWlsYWJsZSBpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogSW4gb3JkZXIgdG8gdXNlIHRoaXMgbGlicmFyeSwgeW91IG5lZWQgdG8gaW1wb3J0IGBGYWNlYm9va01vZHVsZWAgaW50byB5b3VyIGFwcCdzIG1haW4gYE5nTW9kdWxlYC5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGYWNlYm9va01vZHVsZSB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIC4uLlxyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIC4uLlxyXG4gKiAgICAgRmFjZWJvb2tNb2R1bGUuZm9yUm9vdCgpXHJcbiAqICAgXSxcclxuICogICAuLi5cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogZ2V0Q29tcG9uZW50cygpLFxyXG4gIGV4cG9ydHM6IGdldENvbXBvbmVudHMoKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZhY2Vib29rTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGYWNlYm9va1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=