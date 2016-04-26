System.register(['angular2/testing', 'angular2/core', '../src/app/user-service', '../src/app/login-service', '../src/app/greeting-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, user_service_1, login_service_1, greeting_component_1;
    var MockLoginService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (greeting_component_1_1) {
                greeting_component_1 = greeting_component_1_1;
            }],
        execute: function() {
            MockLoginService = (function (_super) {
                __extends(MockLoginService, _super);
                function MockLoginService() {
                    _super.apply(this, arguments);
                }
                MockLoginService.prototype.login = function (pin) {
                    return Promise.resolve(true);
                };
                return MockLoginService;
            }(login_service_1.LoginService));
            testing_1.describe('greeting component', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(login_service_1.LoginService, { useClass: MockLoginService }),
                    user_service_1.UserService
                ]; });
                testing_1.it('should ask for PIN', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled).toContainText('Enter PIN');
                        testing_1.expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
                    });
                }));
                testing_1.it('should change greeting', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        fixture.debugElement.componentInstance.greeting = "Foobar";
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('h3')).toHaveText('Status: Foobar');
                    });
                }));
                testing_1.it('should override the template', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.overrideTemplate(greeting_component_1.GreetingComponent, "<span>{{greeting}}<span>")
                        .createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled).toHaveText('Enter PIN');
                    });
                }));
                testing_1.it('should accept pin', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(greeting_component_1.GreetingComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        compiled.querySelector('button').click();
                        return fixture.debugElement.componentInstance.pending.then(function () {
                            fixture.detectChanges();
                            testing_1.expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
                        });
                        ;
                    });
                }));
                testing_1.it('should accept pin (with fakeAsync)', testing_1.inject([testing_1.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
                    var fixture;
                    tcb.createAsync(greeting_component_1.GreetingComponent).then(function (rootFixture) {
                        fixture = rootFixture;
                    });
                    testing_1.tick();
                    var compiled = fixture.debugElement.nativeElement;
                    compiled.querySelector('button').click();
                    testing_1.tick();
                    fixture.detectChanges();
                    testing_1.expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
                })));
            });
        }
    }
});
//# sourceMappingURL=greeting-component_test.js.map