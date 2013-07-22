define(function(require, exports, module) {
  'use strict';

  var angular = require('angularjs');
  var ngResource = require('ngResource')

  /* Services */
  angular.module('phonecatServices', ['ngResource']).
      factory('Phone', ['$resource', function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
})

