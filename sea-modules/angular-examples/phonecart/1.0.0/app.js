define("angular-examples/phonecart/1.0.0/app",["angularjs","./filters","./services","ngResource","./controllers"],function(a){"use strict";var b=a("angularjs");a("./filters"),a("./services");var c=a("./controllers");return b.module("phonecat",["phonecatFilters","phonecatServices"]).config(["$routeProvider",function(a){a.when("/phones",{templateUrl:"partials/phone-list.html",controller:c.PhoneListCtrl}).when("/phones/:phoneId",{templateUrl:"partials/phone-detail.html",controller:c.PhoneDetailCtrl}).otherwise({redirectTo:"/phones"})}]),{init:function(){b.bootstrap(document.body,["phonecat"])}}}),define("angular-examples/phonecart/1.0.0/filters",["angularjs"],function(a){"use strict";var b=a("angularjs");b.module("phonecatFilters",[]).filter("checkmark",function(){return function(a){return a?"✓":"✘"}})}),define("angular-examples/phonecart/1.0.0/services",["angularjs","ngResource"],function(a){"use strict";var b=a("angularjs");a("ngResource"),b.module("phonecatServices",["ngResource"]).factory("Phone",["$resource",function(a){return a("phones/:phoneId.json",{},{query:{method:"GET",params:{phoneId:"phones"},isArray:!0}})}])}),define("angular-examples/phonecart/1.0.0/controllers",[],function(a,b){"use strict";function c(a,b){a.phones=b.query(),a.orderProp="age"}function d(a,b,c){a.phone=c.get({phoneId:b.phoneId},function(b){a.mainImageUrl=b.images[0]}),a.setImage=function(b){a.mainImageUrl=b}}c.$inject=["$scope","Phone"],d.$inject=["$scope","$routeParams","Phone"],b.PhoneListCtrl=c,b.PhoneDetailCtrl=d});
