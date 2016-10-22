import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularVRAppComponent } from '../app/angular-vr.component';

beforeEachProviders(() => [AngularVRAppComponent]);

describe('App: AngularVR', () => {
  it('should create the app',
      inject([AngularVRAppComponent], (app: AngularVRAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-vr works!\'',
      inject([AngularVRAppComponent], (app: AngularVRAppComponent) => {
    expect(app.title).toEqual('angular-vr works!');
  }));
});
