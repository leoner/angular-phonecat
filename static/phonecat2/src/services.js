define(function(require, exports, module) {
  'use strict';

  var phonecat = require('./phonecat');


  /* Services */
  phonecat.factory('Phone', ['$resource', function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
})

