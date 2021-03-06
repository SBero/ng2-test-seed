System.register(['./login-service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var login_service_1, core_1;
    var UserService;
    return {
        setters:[
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_loginService) {
                    this._loginService = _loginService;
                    this.pin = 1234;
                }
                UserService.prototype.isValidPin = function () {
                    return (this.pin >= 0 && this.pin < 10000);
                };
                UserService.prototype.getGreeting = function () {
                    return this._loginService.login(this.pin).then(function (success) {
                        return success ? 'Welcome!' : 'Login failure!';
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user-service.js.map