(function () {
'use strict';

angular.module('MenuApp')
    .controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['list'];
function ItemsComponentController (list) {
    var menu_items = this;
    // $ctrl.$onInit = function () {
    //     $ctrl.search({ shortName: $ctrl.category });
    // }

    console.log('In ItemsComponentController');
    console.log(list);
    menu_items.items = list;
}

})();
