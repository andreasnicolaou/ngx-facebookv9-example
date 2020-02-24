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
let FacebookService = class FacebookService {
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    init(params) {
        try {
            return Promise.resolve(FB.init(params));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
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
    api(path, method = 'get', params = {}) {
        return new Promise((resolve, reject) => {
            try {
                FB.api(path, method, params, (response) => {
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
    }
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
    ui(params) {
        return new Promise((resolve, reject) => {
            try {
                FB.ui(params, (response) => {
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
    }
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @param [forceFreshResponse=false] {boolean} Force a fresh response.
     * @returns {Promise<LoginStatus>}
     */
    getLoginStatus(forceFreshResponse) {
        return new Promise((resolve, reject) => {
            try {
                FB.getLoginStatus((response) => {
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
    }
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
    login(options) {
        return new Promise((resolve, reject) => {
            try {
                FB.login((response) => {
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
    }
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    logout() {
        return new Promise((resolve, reject) => {
            try {
                FB.logout((response) => {
                    resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
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
    getAuthResponse() {
        try {
            return FB.getAuthResponse();
        }
        catch (e) {
            console.error('ng2-facebook-sdk: ', e);
        }
    }
};
FacebookService = __decorate([
    Injectable()
], FacebookService);
export { FacebookService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL2ZhY2Vib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0IzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFMUI7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxNQUFrQjtRQUNyQixJQUFJO1lBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILEdBQUcsQ0FBQyxJQUFZLEVBQUUsU0FBb0IsS0FBSyxFQUFFLFNBQWMsRUFBRTtRQUMzRCxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRTFDLElBQUk7Z0JBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFO29CQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNiLE1BQU0sRUFBRSxDQUFDO3FCQUNWO3lCQUFNLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTt3QkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLENBQUMsQ0FB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bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvYXV0aC1yZXNwb25zZSc7XHJcbmltcG9ydCB7IEluaXRQYXJhbXMgfSBmcm9tICcuLi9tb2RlbHMvaW5pdC1wYXJhbXMnO1xyXG5pbXBvcnQgeyBMb2dpbk9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tb3B0aW9ucyc7XHJcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tcmVzcG9uc2UnO1xyXG5pbXBvcnQgeyBMb2dpblN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9sb2dpbi1zdGF0dXMnO1xyXG5pbXBvcnQgeyBVSVBhcmFtcyB9IGZyb20gJy4uL21vZGVscy91aS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBVSVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL3VpLXJlc3BvbnNlJztcclxuXHJcbmRlY2xhcmUgdmFyIEZCOiBhbnk7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXBpTWV0aG9kID0gJ2dldCcgfCAncG9zdCcgfCAnZGVsZXRlJztcclxuXHJcbi8qKlxyXG4gKiBAc2hvcnRkZXNjXHJcbiAqIEFuZ3VsYXIgMiBzZXJ2aWNlIHRvIGluamVjdCB0byB1c2UgRmFjZWJvb2sncyBTREtcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFlvdSBvbmx5IG5lZWQgdG8gaW5qZWN0IHRoaXMgc2VydmljZSBpbiB5b3VyIGFwcGxpY2F0aW9uIGlmIHlvdSBhcmVuJ3QgdXNpbmcgW2BGYWNlYm9va01vZHVsZWBdKC4uL2ZhY2Vib29rLW1vZHVsZSkuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZhY2Vib29rU2VydmljZSwgSW5pdFBhcmFtcyB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGYWNlYm9va1NlcnZpY2UpIHtcclxuICpcclxuICogICBjb25zdCBwYXJhbXM6IEluaXRQYXJhbXMgPSB7XHJcbiAqXHJcbiAqICAgfTtcclxuICpcclxuICogICBmYi5pbml0KHBhcmFtcyk7XHJcbiAqXHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va1NlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGluaXRpYWxpemUgYW5kIHNldHVwIHRoZSBTREsuXHJcbiAgICogQHBhcmFtIHBhcmFtcyB7SW5pdFBhcmFtc30gSW5pdGlhbGl6YXRpb24gcGFyYW1ldGVyc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgaW5pdChwYXJhbXM6IEluaXRQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShGQi5pbml0KHBhcmFtcykpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBsZXRzIHlvdSBtYWtlIGNhbGxzIHRvIHRoZSBHcmFwaCBBUElcclxuICAgKiBAdXNhZ2VcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogdGhpcy5mYi5hcGkoJ3NvbWVwYXRoJylcclxuICAgKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAqIGBgYFxyXG4gICAqIEBwYXJhbSBwYXRoIHtzdHJpbmd9IFRoZSBHcmFwaCBBUEkgZW5kcG9pbnQgcGF0aCB0aGF0IHlvdSB3YW50IHRvIGNhbGwuXHJcbiAgICogQHBhcmFtIFttZXRob2Q9Z2V0XSB7c3RyaW5nfSBUaGUgSFRUUCBtZXRob2QgdGhhdCB5b3Ugd2FudCB0byB1c2UgZm9yIHRoZSBBUEkgcmVxdWVzdC5cclxuICAgKiBAcGFyYW0gW3BhcmFtc10ge09iamVjdH0gQW4gb2JqZWN0IGNvbnNpc3Rpbmcgb2YgYW55IHBhcmFtZXRlcnMgdGhhdCB5b3Ugd2FudCB0byBwYXNzIGludG8geW91ciBHcmFwaCBBUEkgY2FsbC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIGFwaShwYXRoOiBzdHJpbmcsIG1ldGhvZDogQXBpTWV0aG9kID0gJ2dldCcsIHBhcmFtczogYW55ID0ge30pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBGQi5hcGkocGF0aCwgbWV0aG9kLCBwYXJhbXMsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdHJpZ2dlciBkaWZmZXJlbnQgZm9ybXMgb2YgRmFjZWJvb2sgY3JlYXRlZCBVSSBkaWFsb2dzLlxyXG4gICAqIFRoZXNlIGRpYWxvZ3MgaW5jbHVkZTpcclxuICAgKiAtIFNoYXJlIGRpYWxvZ1xyXG4gICAqIC0gTG9naW4gZGlhbG9nXHJcbiAgICogLSBBZGQgcGFnZSB0YWIgZGlhbG9nXHJcbiAgICogLSBSZXF1ZXN0cyBkaWFsb2dcclxuICAgKiAtIFNlbmQgZGlhbG9nXHJcbiAgICogLSBQYXltZW50cyBkaWFsb2dcclxuICAgKiAtIEdvIExpdmUgZGlhbG9nXHJcbiAgICogQHBhcmFtIHBhcmFtcyB7VUlQYXJhbXN9IEEgY29sbGVjdGlvbiBvZiBwYXJhbWV0ZXJzIHRoYXQgY29udHJvbCB3aGljaCBkaWFsb2cgaXMgbG9hZGVkLCBhbmQgcmVsZXZhbnQgc2V0dGluZ3MuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8VUlSZXNwb25zZT59XHJcbiAgICovXHJcbiAgdWkocGFyYW1zOiBVSVBhcmFtcyk6IFByb21pc2U8VUlSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBGQi51aShwYXJhbXMsIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZighcmVzcG9uc2UpIHJlamVjdCgpO1xyXG4gICAgICAgICAgZWxzZSBpZihyZXNwb25zZS5lcnJvcikgcmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gZGV0ZXJtaW5lIGlmIGEgdXNlciBpcyBsb2dnZWQgaW4gdG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwLlxyXG4gICAqIEBwYXJhbSBbZm9yY2VGcmVzaFJlc3BvbnNlPWZhbHNlXSB7Ym9vbGVhbn0gRm9yY2UgYSBmcmVzaCByZXNwb25zZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2dpblN0YXR1cz59XHJcbiAgICovXHJcbiAgZ2V0TG9naW5TdGF0dXMoZm9yY2VGcmVzaFJlc3BvbnNlPzogYm9vbGVhbik6IFByb21pc2U8TG9naW5TdGF0dXM+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxMb2dpblN0YXR1cz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBGQi5nZXRMb2dpblN0YXR1cygocmVzcG9uc2U6IExvZ2luU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZm9yY2VGcmVzaFJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlamVjdChlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9naW4gdGhlIHVzZXJcclxuICAgKiBAdXNhZ2VcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogLy8gbG9naW4gd2l0aG91dCBvcHRpb25zXHJcbiAgICogdGhpcy5mYi5sb2dpbigpXHJcbiAgICogICAudGhlbigocmVzcG9uc2U6IExvZ2luUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKCdMb2dnZWQgaW4nLCByZXNwb25zZSkpXHJcbiAgICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluJykpO1xyXG4gICAqXHJcbiAgICogLy8gbG9naW4gd2l0aCBvcHRpb25zXHJcbiAgICogY29uc3Qgb3B0aW9uczogTG9naW5PcHRpb25zID0ge1xyXG4gICAqICAgc2NvcGU6ICdwdWJsaWNfcHJvZmlsZSx1c2VyX2ZyaWVuZHMsZW1haWwscGFnZXNfc2hvd19saXN0JyxcclxuICAgKiAgIHJldHVybl9zY29wZXM6IHRydWUsXHJcbiAgICogICBlbmFibGVfcHJvZmlsZV9zZWxlY3RvcjogdHJ1ZVxyXG4gICAqIH07XHJcbiAgICogdGhpcy5mYi5sb2dpbihvcHRpb25zKVxyXG4gICAqICAgLnRoZW4oLi4uKVxyXG4gICAqICAgLmNhdGNoKC4uLik7XHJcbiAgICogYGBgXHJcbiAgICogQHBhcmFtIFtvcHRpb25zXSB7TG9naW5PcHRpb25zfSBMb2dpbiBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TG9naW5SZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBbTG9naW5SZXNwb25zZV0oLi4vbG9naW4tcmVzcG9uc2UpIG9iamVjdCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXHJcbiAgICovXHJcbiAgbG9naW4ob3B0aW9ucz86IExvZ2luT3B0aW9ucyk6IFByb21pc2U8TG9naW5SZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPExvZ2luUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgRkIubG9naW4oKHJlc3BvbnNlOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dvdXQgdGhlIHVzZXJcclxuICAgKiBAdXNhZ2VcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogdGhpcy5mYi5sb2dvdXQoKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0IScpKTtcclxuICAgKiBgYGBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXIgaXMgbG9nZ2VkIG91dFxyXG4gICAqL1xyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBGQi5sb2dvdXQoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHN5bmNocm9ub3VzIGZ1bmN0aW9uIHJldHVybnMgYmFjayB0aGUgY3VycmVudCBhdXRoUmVzcG9uc2UuXHJcbiAgICogQHVzYWdlXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIGltcG9ydCB7IEF1dGhSZXNwb25zZSwgRmFjZWJvb2tTZXJ2aWNlIH0gZnJvbSAnbmcyLWZhY2Vib29rLXNkayc7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIGNvbnN0IGF1dGhSZXNwb25zZTogQXV0aFJlc3BvbnNlID0gdGhpcy5mYi5nZXRBdXRoUmVzcG9uc2UoKTtcclxuICAgKiBgYGBcclxuICAgKiBAcmV0dXJucyB7QXV0aFJlc3BvbnNlfSByZXR1cm5zIGFuIFtBdXRoUmVzcG9uc2VdKC4uL2F1dGgtcmVzcG9uc2UpIG9iamVjdFxyXG4gICAqL1xyXG4gIGdldEF1dGhSZXNwb25zZSgpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIDxBdXRoUmVzcG9uc2U+RkIuZ2V0QXV0aFJlc3BvbnNlKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ25nMi1mYWNlYm9vay1zZGs6ICcsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==