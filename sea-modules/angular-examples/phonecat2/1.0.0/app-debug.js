define("angular-examples/phonecat2/1.0.0/app-debug", [ "./phonecat-debug", "angularjs-debug", "ngResource-debug", "./controllers-debug", "./services-debug", "./filters-debug" ], function(require, exports, module) {
    "use strict";
    var phonecat = require("./phonecat-debug");
    var ctrl = require("./controllers-debug");
    // load modules
    var service = require("./services-debug");
    var filter = require("./filters-debug");
    /* App Module */
    phonecat.config([ "$routeProvider", function($routeProvider) {
        $routeProvider.when("/phones", {
            templateUrl: "partials/phone-list.html",
            controller: ctrl.PhoneListCtrl
        }).when("/phones/:phoneId", {
            templateUrl: "partials/phone-detail.html",
            controller: ctrl.PhoneDetailCtrl
        }).otherwise({
            redirectTo: "/phones"
        });
    } ]);
    return {
        init: function() {
            angular.bootstrap(document.body, [ "phonecat" ]);
        }
    };
});

define("angular-examples/phonecat2/1.0.0/phonecat-debug", [ "angularjs-debug", "ngResource-debug" ], function(require, exports, module) {
    "use strict";
    var angular = require("angularjs-debug");
    var ngResource = require("ngResource-debug");
    module.exports = angular.module("phonecat", [ "ngResource" ]);
});

define("angular-examples/phonecat2/1.0.0/controllers-debug", [], function(require, exports, module) {
    "use strict";
    /* Controllers */
    function PhoneListCtrl($scope, P) {
        $scope.phones = P.query();
        $scope.orderProp = "age";
    }
    PhoneListCtrl.$inject = [ "$scope", "Phone" ];
    function PhoneDetailCtrl($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
    PhoneDetailCtrl.$inject = [ "$scope", "$routeParams", "Phone" ];
    exports.PhoneListCtrl = PhoneListCtrl;
    exports.PhoneDetailCtrl = PhoneDetailCtrl;
});

define("angular-examples/phonecat2/1.0.0/services-debug", [ "angular-examples/phonecat2/1.0.0/phonecat-debug", "angularjs-debug", "ngResource-debug" ], function(require, exports, module) {
    "use strict";
    var phonecat = require("angular-examples/phonecat2/1.0.0/phonecat-debug");
    /* Services */
    phonecat.factory("Phone", [ "$resource", function($resource) {
        return $resource("phones/:phoneId.json", {}, {
            query: {
                method: "GET",
                params: {
                    phoneId: "phones"
                },
                isArray: true
            }
        });
    } ]);
});

define("angular-examples/phonecat2/1.0.0/filters-debug", [ "angular-examples/phonecat2/1.0.0/phonecat-debug", "angularjs-debug", "ngResource-debug" ], function(require, exports, module) {
    "use strict";
    var phonecat = require("angular-examples/phonecat2/1.0.0/phonecat-debug");
    /* Filters */
    phonecat.filter("checkmark", function() {
        return function(input) {
            return input ? "✓" : "✘";
        };
    });
});
