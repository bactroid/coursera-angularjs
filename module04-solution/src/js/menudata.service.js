(function () {
'use strict';

angular.module('data')
    .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'restUrl'];
function MenuDataService ($http, restUrl) {
    this.getAllCategories = function () {
        return $http({
            url: restUrl + '/categories.json'
        })
        .then (
            function success (response) {
                console.log(response.data);
                return response.data;
            },
            function error (response) {
                console.log("Error getting HTTP response")
            }
        );
    };

    this.getItemsForCategory = function (categoryShortName) {
    };
}

})();
