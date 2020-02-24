/**
 * @hidden
 */
export function FBMLAttribute(target, key) {
    var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
    Object.defineProperty(target, key, {
        set: function (value) {
            value = value.toString();
            this.setAttribute(processKey(key), value);
        },
        get: function () {
            return this.getAttribute(processKey(key));
        },
        enumerable: true
    });
}
/**
 * @hidden
 */
export function FBMLInstanceMethod(target, key) {
    return {
        enumerable: true,
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._instance) {
                return this._instance[key].apply(this._instance, args);
            }
            else {
                console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                return null;
            }
        }
    };
}
/**
 * @hidden
 */
var FBMLComponent = /** @class */ (function () {
    function FBMLComponent(el, rnd, fbClass) {
        this.el = el;
        this.rnd = rnd;
        this.fbClass = fbClass;
        this.nativeElement = this.el.nativeElement;
        this.rnd.addClass(this.nativeElement, this.fbClass);
    }
    FBMLComponent.prototype.setAttribute = function (name, value) {
        if (!name || !value)
            return;
        this.rnd.setAttribute(this.nativeElement, name, value);
    };
    FBMLComponent.prototype.getAttribute = function (name) {
        if (!name)
            return;
        return this.nativeElement.getAttribute(name);
    };
    return FBMLComponent;
}());
export { FBMLComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmJtbC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmFjZWJvb2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYm1sLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7R0FFRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBVyxFQUFFLEdBQVc7SUFDcEQsSUFBTSxVQUFVLEdBQUcsVUFBQyxFQUFVLElBQUssT0FBQSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBM0UsQ0FBMkUsQ0FBQztJQUMvRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDakMsR0FBRyxFQUFFLFVBQVUsS0FBSztZQUNsQixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDRCxHQUFHLEVBQUU7WUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFXLEVBQUUsR0FBVztJQUN6RCxPQUFPO1FBQ0wsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFO1lBQVUsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDRFQUE0RSxDQUFDLENBQUM7Z0JBQzNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNIO0lBSUUsdUJBQ1UsRUFBYyxFQUNkLEdBQWMsRUFDZCxPQUFlO1FBRmYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRXZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLG9DQUFZLEdBQXRCLFVBQXVCLElBQVksRUFBRSxLQUFhO1FBQ2hELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRVMsb0NBQVksR0FBdEIsVUFBdUIsSUFBWTtRQUNqQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZCTUxBdHRyaWJ1dGUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgY29uc3QgcHJvY2Vzc0tleSA9IChfazogc3RyaW5nKSA9PiAnZGF0YS0nICsgX2sudG9TdHJpbmcoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9jZXNzS2V5KGtleSksIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKHByb2Nlc3NLZXkoa2V5KSk7XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZCTUxJbnN0YW5jZU1ldGhvZCh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIHZhbHVlOiBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlW2tleV0uYXBwbHkodGhpcy5faW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignbmcyLWZhY2Vib29rLXNkazogdHJpZWQgY2FsbGluZyBpbnN0YW5jZSBtZXRob2QgYmVmb3JlIGNvbXBvbmVudCBpcyByZWFkeS4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRkJNTENvbXBvbmVudCB7XHJcblxyXG4gIHByb3RlY3RlZCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBybmQ6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZmJDbGFzczogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnJuZC5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZmJDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgdGhpcy5ybmQuc2V0QXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgbmFtZSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==