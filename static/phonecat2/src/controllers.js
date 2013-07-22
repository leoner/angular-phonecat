define(function(require, exports, module) {
  'use strict';
  /* Controllers */

  function PhoneListCtrl($scope, P) {
    $scope.phones = P.query();
    $scope.orderProp = 'age';
  }

  PhoneListCtrl.$inject = ['$scope', 'Phone'];



  function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }

  PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];

  exports.PhoneListCtrl = PhoneListCtrl
  exports.PhoneDetailCtrl = PhoneDetailCtrl
})
