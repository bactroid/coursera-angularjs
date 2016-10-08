(function (){
'use strict';

angular.module('MenuApp', ['ui.router', 'data']);

angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider){
    // Make "home" the default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/views/home.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/views/categories.html'
        })

        .state('items', {
            url: '/items/{category}',
            templateUrl: 'src/views/items.html',
            controller: 'ItemsComponentController as menu_items',
            resolve: {
                list: ['$stateParams',
                       'MenuDataService',
                       function ($stateParams, MenuDataService) {
                             return MenuDataService.getItemsForCategory($stateParams.category)
                                .then(function (response) {
                                    console.log(response.menu_items);
                                    return response.menu_items;
                                });
                         }
                ]
            }
        });
}

})();
