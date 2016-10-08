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
                return response.data;
            },
            function error (response) {
                console.log("Error getting HTTP response for Categories")
            }
        );
    };

    this.getItemsForCategory = function (categoryShortName) {
        return $http({
            url: restUrl + '/menu_items.json?category=' + categoryShortName
        })
        .then(
            function success (response) {
                return response.data;
            },
            function error (response) {
                console.log("Error getting HTTP response for Menu Items")
            }
        );
    };
}

})();
