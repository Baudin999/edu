


angular.module('app').service('Person', function($rootScope, $timeout) {
    "use strict";


    function Person(name) {
        this.name = name;
    }
    Person.init = function(name) {
        var person = new Person(name);

        $timeout(function() {
            person.lastName = 'Kelkboom';
        }, 1000);

        setTimeout(function() {
            person.age = 35;
            $rootScope.$apply();
        }, 2000);

        setTimeout(function() {

            $rootScope.$apply(function() {
                person.address = 'Wizackle 2067';
            });
        }, 3000);

        return person;
    };

    return Person;

});
