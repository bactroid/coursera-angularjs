(function () {
'use strict';

angular.module('MenuApp')
    .controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['list'];
function ItemsComponentController (list) {
    this.items = list;
}

})();
