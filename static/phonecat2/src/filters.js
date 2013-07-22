define(function(require, exports, module) {
  'use strict';

  var phonecat = require('./phonecat');
  /* Filters */

  phonecat.filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
})
