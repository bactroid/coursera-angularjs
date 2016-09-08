(function () {
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.message = '';
    $scope.lunchList = '';
    $scope.inputClass = '';
    $scope.msgClass = '';

    $scope.evalList = function () {
        $scope.lunchList = $scope.lunchList.trim();

        // Check for empty list box
        if ($scope.lunchList.length === 0) {
            $scope.message = 'Please enter data first';
	    $scope.msgClass = 'invalid_msg';
	    $scope.inputClass = 'invalid_input';
            return;
        }

        var list = $scope.lunchList.split(',');
	$scope.msgClass = 'valid_msg';
	$scope.inputClass = 'valid_msg';

        if (list.length <= 3) {
            $scope.message = 'Enjoy!';
        }

        else {
            $scope.message = 'Too much!';
        }
    };
}

})();
