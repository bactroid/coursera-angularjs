(function () {
'use strict';

angular.module('MenuApp')
    .controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['list'];
function ItemsComponentController (list) {
    var menu_items = this;
    menu_items.items = list;
}

})();
