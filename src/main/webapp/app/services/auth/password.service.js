(function() {
    'use strict';

    angular
        .module('jhipsterNoI18NSampleApplicationApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('api/account/change-password', {}, {});

        return service;
    }
})();
