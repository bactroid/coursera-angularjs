(function () {
'use strict';

angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/js/items/items.template.html',
        bindings: {
            data: '<'
        }
    })

})();
