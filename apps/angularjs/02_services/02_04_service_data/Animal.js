

angular.module('app').service('Animal', function($http) {
    "use strict";


    /*
    A CTOR taking a future or an actual object
     */
    function Animal($future) {
        var self = this;

        if (typeof $future.then === 'function') {
            $future.then(function(result) {
                angular.extend(self, result.data);
            });
        }
        else {
            angular.extend(self, result.data);
        }
    }
    Animal.init = function(original) {
        return new Animal(original || $http.get('animal.json'));
    };


    return Animal;

});
