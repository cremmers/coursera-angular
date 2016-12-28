(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
	var ddo = {
		templateUrl: 'items.html',
		scope: {
			items: '<',
			onRemove: '&'
		}
	};
	return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrow = this;

	narrow.getMatchedMenuItems = function () {
		narrow.found = [];
			var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
			promise.then(function (response) {
				narrow.found = response;
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})	
	};

	narrow.removeItem = function (index) {
		narrow.found.splice(index, 1);		
		console.log(narrow.found);
	};
};

MenuSearchService.$inject= ['$http']
function MenuSearchService ($http) {
	var service = this;

	service.getMatchedMenuItems =  function (searchTerm) {
		return $http ({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		})
		.then(function (result) {
			var items = result.data.menu_items;
			var foundItems = [];
			for (var i=0; i < items.length; i++) {
				if (items[i].description.indexOf(searchTerm) > -1) {
					foundItems.push(items[i]);				
				};						
			};
			return foundItems;
		});		
	};
};

})();