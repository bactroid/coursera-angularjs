(function () {
'use strict';

angular.module('MenuApp')
    .controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['list'];
function CategoriesComponentController (list) {
    this.categories = list;
}

})();
