define(function(require, exports, module) {
  'use strict';

  var phonecat = require('./phonecat')
  var ctrl = require('./controllers')
  // load modules
  var service = require('./services')
  var filter = require('./filters')

  /* App Module */
  phonecat.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {templateUrl: 'partials/phone-list.html',   controller: ctrl.PhoneListCtrl}).
        when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: ctrl.PhoneDetailCtrl}).
        otherwise({redirectTo: '/phones'});
  }]);

  return {
    init: function() {
      angular.bootstrap(document.body, ['phonecat'])
    }
  }
})



