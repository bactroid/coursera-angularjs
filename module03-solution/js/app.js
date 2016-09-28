(function () {
angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service ('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems)
  .constant('restUrl', 'https://davids-restaurant.herokuapp.com');

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ctrl = this;
  //ctrl.foundItems = [];
  ctrl.searchDisplay = true;

  ctrl.searchItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
      ctrl.foundItems = response;
    });
  };

  ctrl.removeItem = function (index) {
    ctrl.foundItems.splice(index, 1);
  };

  ctrl.checkSearchDisplay = function () {
    if (ctrl.foundItems.length !== 0) {
      ctrl.searchDisplay = true;
    }

    else {
      ctrl.searchDisplay = false;
    }

    console.log(ctrl.searchDisplay);
    return ctrl.searchDisplay;
  };
}

MenuSearchService.$inject = ['$http', 'restUrl'];
function MenuSearchService ($http, restUrl) {
  this.getMatchedMenuItems = function getMatchedMenuItems (searchTerm) {
    return $http({
      url: restUrl + '/menu_items.json'
    })
    .then (
      function success (response) {
        //var foundItems = response.data.menu_items;
        var foundItems = [];
        response.data.menu_items.forEach(function (element, index, array) {
          if (element.description.search(searchTerm) !== -1) {
            foundItems.push(element);
          }
        });
        return foundItems;
      },
      function error (response) {
        console.log("Error getting HTTP response.")
      }
    );
  }
}

function foundItems () {
  var ddo = {
    templateUrl: 'templates/found-items.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

})();
