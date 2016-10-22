"use strict";
var testing_1 = require('@angular/core/testing');
var angular_vr_component_1 = require('../app/angular-vr.component');
testing_1.beforeEachProviders(function () { return [angular_vr_component_1.AngularVRAppComponent]; });
testing_1.describe('App: AngularVR', function () {
    testing_1.it('should create the app', testing_1.inject([angular_vr_component_1.AngularVRAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular-vr works!\'', testing_1.inject([angular_vr_component_1.AngularVRAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular-vr works!');
    }));
});
//# sourceMappingURL=angular-vr.component.spec.js.map