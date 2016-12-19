(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var to_buy = this;

	to_buy.buy_array = ShoppingListCheckOffService.showBuy();

	to_buy.putItems = function (itemIndex) {		
		ShoppingListCheckOffService.putItems(itemIndex);
	};
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var already_bought = this;

	already_bought.bought_array = ShoppingListCheckOffService.showBought();
};

function ShoppingListCheckOffService () {
	var service = this;

	var buy_array = [{name: "cereal", quantity: 2}, {name: "coffee", quantity: 3}, {name: "salad", quantity: 1}, {name: "turkey", quantity: 0.25}, {name: "soda", quantity: 12}];

	var bought_array = [];

	service.putItems =  function (itemIndex) {
		var grocery = buy_array.splice(itemIndex, 1);
		bought_array.push(grocery[0]);
	};

	service.showBuy = function () {
		return buy_array;
	};

	service.showBought = function () {
		return bought_array;
	};
};

})();