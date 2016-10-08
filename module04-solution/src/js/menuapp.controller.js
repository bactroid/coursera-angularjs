(function () {
'use strict';

angular.module('data')
    .controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController (MenuDataService) {
    var menu = this;
    var promise = MenuDataService.getAllCategories();
    promise.then(function (response) {
        menu.items = response;
    });
}

})();
