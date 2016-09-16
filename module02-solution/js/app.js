(function () {

'use strict';
angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService () {
  this.buy = [
    {
      name: "apple",
      quantity: 7
    },
    {
      name: "tofu",
      quantity: 2
    },
    {
      name: "rice",
      quantity: 1
    },
    {
      name: "kale",
      quantity: 3
    },
    {
      name: "collard greens",
      quantity: 3
    },
    {
      name: "pasta",
      quantity: 1
    }
  ];

  this.bought = [];

  this.buyItem = function (index) {
    var boughtItem = this.buy.splice(index, 1);
    this.bought.push(boughtItem[0]);
    console.log(this.bought);
  };
}

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.buy;
  this.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.bought;
}

})();
