define(function(require, exports, module) {
  'use strict';

  var angular = require('angularjs')
  var filter = require('./filters')
  var service = require('./services')
  var ctrl = require('./controllers')


  /* App Module */
  angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/phone-list.html',   controller: ctrl.PhoneListCtrl}).
        when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: ctrl.PhoneDetailCtrl}).
        otherwise({redirectTo: '/phones'});
  }]);

  return {
    init: function() {
      //angular.bootstrap(document.body, ['phonecat'])
    }
  }
})



