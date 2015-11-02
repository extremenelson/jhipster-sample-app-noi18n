'use strict';

angular.module('sampleNo18nApp')
	.controller('LabelDeleteController', function($scope, $modalInstance, entity, Label) {

        $scope.label = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Label.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });