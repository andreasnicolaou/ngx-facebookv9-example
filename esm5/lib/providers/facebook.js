import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * @shortdesc
 * Angular 2 service to inject to use Facebook's SDK
 * @description
 * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
 * @usage
 * ```typescript
 * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
 *
 * constructor(private fb: FacebookService) {
 *
 *   const params: InitParams = {
 *
 *   };
 *
 *   fb.init(params);
 *
 * }
 * ```
 */
var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    FacebookService.prototype.init = function (params) {
        try {
            return Promise.resolve(FB.init(params));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * This method lets you make calls to the Graph API
     * @usage
     * ```typescript
     * this.fb.api('somepath')
     *   .then(res => console.log(res))
     *   .catch(e => console.log(e));
     * ```
     * @param path {string} The Graph API endpoint path that you want to call.
     * @param [method=get] {string} The HTTP method that you want to use for the API request.
     * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    FacebookService.prototype.api = function (path, method, params) {
        if (method === void 0) { method = 'get'; }
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            try {
                FB.api(path, method, params, function (response) {
                    if (!response) {
                        reject();
                    }
                    else if (response.error) {
                        reject(response.error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<UIResponse>}
     */
    FacebookService.prototype.ui = function (params) {
        return new Promise(function (resolve, reject) {
            try {
                FB.ui(params, function (response) {
                    if (!response)
                        reject();
                    else if (response.error)
                        reject(response.error);
                    else
                        resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @param [forceFreshResponse=false] {boolean} Force a fresh response.
     * @returns {Promise<LoginStatus>}
     */
    FacebookService.prototype.getLoginStatus = function (forceFreshResponse) {
        return new Promise(function (resolve, reject) {
            try {
                FB.getLoginStatus(function (response) {
                    if (!response) {
                        reject();
                    }
                    else {
                        resolve(response);
                    }
                }, forceFreshResponse);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Login the user
     * @usage
     * ```typescript
     * // login without options
     * this.fb.login()
     *   .then((response: LoginResponse) => console.log('Logged in', response))
     *   .catch(e => console.error('Error logging in'));
     *
     * // login with options
     * const options: LoginOptions = {
     *   scope: 'public_profile,user_friends,email,pages_show_list',
     *   return_scopes: true,
     *   enable_profile_selector: true
     * };
     * this.fb.login(options)
     *   .then(...)
     *   .catch(...);
     * ```
     * @param [options] {LoginOptions} Login options
     * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
     */
    FacebookService.prototype.login = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                FB.login(function (response) {
                    if (response.authResponse) {
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }, options);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    FacebookService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.logout(function (response) {
                    resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This synchronous function returns back the current authResponse.
     * @usage
     * ```typescript
     * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
     *
     * ...
     *
     * const authResponse: AuthResponse = this.fb.getAuthResponse();
     * ```
     * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
     */
    FacebookService.prototype.getAuthResponse = function () {
        try {
            return FB.getAuthResponse();
        }
        catch (e) {
            console.error('ng2-facebook-sdk: ', e);
        }
    };
    FacebookService = __decorate([
        Injectable()
    ], FacebookService);
    return FacebookService;
}());
export { FacebookService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0IzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVIO0lBQUE7SUFzTEEsQ0FBQztJQXBMQzs7OztPQUlHO0lBQ0gsOEJBQUksR0FBSixVQUFLLE1BQWtCO1FBQ3JCLElBQUk7WUFDRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsNkJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxNQUF5QixFQUFFLE1BQWdCO1FBQTNDLHVCQUFBLEVBQUEsY0FBeUI7UUFBRSx1QkFBQSxFQUFBLFdBQWdCO1FBQzNELE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUV0QyxJQUFJO2dCQUNGLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBQyxRQUFhO29CQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNiLE1BQU0sRUFBRSxDQUFDO3FCQUNWO3lCQUFNLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTt3QkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1Ys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aW1wb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBJbml0UGFyYW1zIH0gZnJvbSAnLi4vbW9kZWxzL2luaXQtcGFyYW1zJztcclxuaW1wb3J0IHsgTG9naW5PcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcclxuaW1wb3J0IHsgTG9naW5TdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tc3RhdHVzJztcclxuaW1wb3J0IHsgVUlQYXJhbXMgfSBmcm9tICcuLi9tb2RlbHMvdWktcGFyYW1zJztcclxuaW1wb3J0IHsgVUlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy91aS1yZXNwb25zZSc7XHJcblxyXG5kZWNsYXJlIHZhciBGQjogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFwaU1ldGhvZCA9ICdnZXQnIHwgJ3Bvc3QnIHwgJ2RlbGV0ZSc7XHJcblxyXG4vKipcclxuICogQHNob3J0ZGVzY1xyXG4gKiBBbmd1bGFyIDIgc2VydmljZSB0byBpbmplY3QgdG8gdXNlIEZhY2Vib29rJ3MgU0RLXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBZb3Ugb25seSBuZWVkIHRvIGluamVjdCB0aGlzIHNlcnZpY2UgaW4geW91ciBhcHBsaWNhdGlvbiBpZiB5b3UgYXJlbid0IHVzaW5nIFtgRmFjZWJvb2tNb2R1bGVgXSguLi9mYWNlYm9vay1tb2R1bGUpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UsIEluaXRQYXJhbXMgfSBmcm9tICduZzItZmFjZWJvb2stc2RrJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRmFjZWJvb2tTZXJ2aWNlKSB7XHJcbiAqXHJcbiAqICAgY29uc3QgcGFyYW1zOiBJbml0UGFyYW1zID0ge1xyXG4gKlxyXG4gKiAgIH07XHJcbiAqXHJcbiAqICAgZmIuaW5pdChwYXJhbXMpO1xyXG4gKlxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBpbml0aWFsaXplIGFuZCBzZXR1cCB0aGUgU0RLLlxyXG4gICAqIEBwYXJhbSBwYXJhbXMge0luaXRQYXJhbXN9IEluaXRpYWxpemF0aW9uIHBhcmFtZXRlcnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIGluaXQocGFyYW1zOiBJbml0UGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoRkIuaW5pdChwYXJhbXMpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgbGV0cyB5b3UgbWFrZSBjYWxscyB0byB0aGUgR3JhcGggQVBJXHJcbiAgICogQHVzYWdlXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIHRoaXMuZmIuYXBpKCdzb21lcGF0aCcpXHJcbiAgICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgKiBgYGBcclxuICAgKiBAcGFyYW0gcGF0aCB7c3RyaW5nfSBUaGUgR3JhcGggQVBJIGVuZHBvaW50IHBhdGggdGhhdCB5b3Ugd2FudCB0byBjYWxsLlxyXG4gICAqIEBwYXJhbSBbbWV0aG9kPWdldF0ge3N0cmluZ30gVGhlIEhUVFAgbWV0aG9kIHRoYXQgeW91IHdhbnQgdG8gdXNlIGZvciB0aGUgQVBJIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIFtwYXJhbXNdIHtPYmplY3R9IEFuIG9iamVjdCBjb25zaXN0aW5nIG9mIGFueSBwYXJhbWV0ZXJzIHRoYXQgeW91IHdhbnQgdG8gcGFzcyBpbnRvIHlvdXIgR3JhcGggQVBJIGNhbGwuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBhcGkocGF0aDogc3RyaW5nLCBtZXRob2Q6IEFwaU1ldGhvZCA9ICdnZXQnLCBwYXJhbXM6IGFueSA9IHt9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgRkIuYXBpKHBhdGgsIG1ldGhvZCwgcGFyYW1zLCAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHRyaWdnZXIgZGlmZmVyZW50IGZvcm1zIG9mIEZhY2Vib29rIGNyZWF0ZWQgVUkgZGlhbG9ncy5cclxuICAgKiBUaGVzZSBkaWFsb2dzIGluY2x1ZGU6XHJcbiAgICogLSBTaGFyZSBkaWFsb2dcclxuICAgKiAtIExvZ2luIGRpYWxvZ1xyXG4gICAqIC0gQWRkIHBhZ2UgdGFiIGRpYWxvZ1xyXG4gICAqIC0gUmVxdWVzdHMgZGlhbG9nXHJcbiAgICogLSBTZW5kIGRpYWxvZ1xyXG4gICAqIC0gUGF5bWVudHMgZGlhbG9nXHJcbiAgICogLSBHbyBMaXZlIGRpYWxvZ1xyXG4gICAqIEBwYXJhbSBwYXJhbXMge1VJUGFyYW1zfSBBIGNvbGxlY3Rpb24gb2YgcGFyYW1ldGVycyB0aGF0IGNvbnRyb2wgd2hpY2ggZGlhbG9nIGlzIGxvYWRlZCwgYW5kIHJlbGV2YW50IHNldHRpbmdzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFVJUmVzcG9uc2U+fVxyXG4gICAqL1xyXG4gIHVpKHBhcmFtczogVUlQYXJhbXMpOiBQcm9taXNlPFVJUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgRkIudWkocGFyYW1zLCAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYoIXJlc3BvbnNlKSByZWplY3QoKTtcclxuICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZXJyb3IpIHJlamVjdChyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICBlbHNlIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgeW91IHRvIGRldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC5cclxuICAgKiBAcGFyYW0gW2ZvcmNlRnJlc2hSZXNwb25zZT1mYWxzZV0ge2Jvb2xlYW59IEZvcmNlIGEgZnJlc2ggcmVzcG9uc2UuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TG9naW5TdGF0dXM+fVxyXG4gICAqL1xyXG4gIGdldExvZ2luU3RhdHVzKGZvcmNlRnJlc2hSZXNwb25zZT86IGJvb2xlYW4pOiBQcm9taXNlPExvZ2luU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8TG9naW5TdGF0dXM+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoKHJlc3BvbnNlOiBMb2dpblN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZvcmNlRnJlc2hSZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ2luIHRoZSB1c2VyXHJcbiAgICogQHVzYWdlXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIC8vIGxvZ2luIHdpdGhvdXQgb3B0aW9uc1xyXG4gICAqIHRoaXMuZmIubG9naW4oKVxyXG4gICAqICAgLnRoZW4oKHJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygnTG9nZ2VkIGluJywgcmVzcG9uc2UpKVxyXG4gICAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbicpKTtcclxuICAgKlxyXG4gICAqIC8vIGxvZ2luIHdpdGggb3B0aW9uc1xyXG4gICAqIGNvbnN0IG9wdGlvbnM6IExvZ2luT3B0aW9ucyA9IHtcclxuICAgKiAgIHNjb3BlOiAncHVibGljX3Byb2ZpbGUsdXNlcl9mcmllbmRzLGVtYWlsLHBhZ2VzX3Nob3dfbGlzdCcsXHJcbiAgICogICByZXR1cm5fc2NvcGVzOiB0cnVlLFxyXG4gICAqICAgZW5hYmxlX3Byb2ZpbGVfc2VsZWN0b3I6IHRydWVcclxuICAgKiB9O1xyXG4gICAqIHRoaXMuZmIubG9naW4ob3B0aW9ucylcclxuICAgKiAgIC50aGVuKC4uLilcclxuICAgKiAgIC5jYXRjaCguLi4pO1xyXG4gICAqIGBgYFxyXG4gICAqIEBwYXJhbSBbb3B0aW9uc10ge0xvZ2luT3B0aW9uc30gTG9naW4gb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExvZ2luUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggW0xvZ2luUmVzcG9uc2VdKC4uL2xvZ2luLXJlc3BvbnNlKSBvYmplY3QsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxyXG4gICAqL1xyXG4gIGxvZ2luKG9wdGlvbnM/OiBMb2dpbk9wdGlvbnMpOiBQcm9taXNlPExvZ2luUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxMb2dpblJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIEZCLmxvZ2luKChyZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmF1dGhSZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlamVjdChlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0IHRoZSB1c2VyXHJcbiAgICogQHVzYWdlXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIHRoaXMuZmIubG9nb3V0KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTG9nZ2VkIG91dCEnKSk7XHJcbiAgICogYGBgXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB1c2VyIGlzIGxvZ2dlZCBvdXRcclxuICAgKi9cclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgRkIubG9nb3V0KChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlamVjdChlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzeW5jaHJvbm91cyBmdW5jdGlvbiByZXR1cm5zIGJhY2sgdGhlIGN1cnJlbnQgYXV0aFJlc3BvbnNlLlxyXG4gICAqIEB1c2FnZVxyXG4gICAqIGBgYHR5cGVzY3JpcHRcclxuICAgKiBpbXBvcnQgeyBBdXRoUmVzcG9uc2UsIEZhY2Vib29rU2VydmljZSB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiBjb25zdCBhdXRoUmVzcG9uc2U6IEF1dGhSZXNwb25zZSA9IHRoaXMuZmIuZ2V0QXV0aFJlc3BvbnNlKCk7XHJcbiAgICogYGBgXHJcbiAgICogQHJldHVybnMge0F1dGhSZXNwb25zZX0gcmV0dXJucyBhbiBbQXV0aFJlc3BvbnNlXSguLi9hdXRoLXJlc3BvbnNlKSBvYmplY3RcclxuICAgKi9cclxuICBnZXRBdXRoUmVzcG9uc2UoKTogQXV0aFJlc3BvbnNlIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiA8QXV0aFJlc3BvbnNlPkZCLmdldEF1dGhSZXNwb25zZSgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCduZzItZmFjZWJvb2stc2RrOiAnLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=