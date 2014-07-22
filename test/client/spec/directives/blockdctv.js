'use strict';

describe('Directive: blockDctv', function () {

  // load the directive's module
  beforeEach(module('angularAppTestGeneratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<block-dctv></block-dctv>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blockDctv directive');
  }));
});
