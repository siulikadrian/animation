'use strict';

angular.module('angularAppTestGeneratorApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
