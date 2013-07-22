define(function(require, exports, module) {
  'use strict';

  var angular = require('angularjs');
  /* Filters */

  angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
})
