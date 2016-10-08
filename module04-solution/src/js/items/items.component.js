(function () {
'use strict';

angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/js/items/items.template.html',
        controller: ItemsComponentController,
        bindings: {
            category: '<',
            search: '&',
            data: '<'
        }
    })

function ItemsComponentController () {
    var $ctrl = this;
    $ctrl.$onInit = function () {
        $ctrl.search({ shortName: $ctrl.category });
    }
}

})();
