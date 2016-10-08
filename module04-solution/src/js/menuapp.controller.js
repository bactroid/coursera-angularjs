(function () {
'use strict';

angular.module('data')
    .controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController (MenuDataService) {
    var menu = this;

    var promise = MenuDataService.getAllCategories();
    promise.then(function (response) {
        menu.categories = response;
    });

    menu.getItemsForCategory = function (categoryShortName) {
        var promise = MenuDataService.getItemsForCategory (categoryShortName);
        promise.then(function (response) {
            menu.items = response.menu_items;
        });
    };
}

})();
