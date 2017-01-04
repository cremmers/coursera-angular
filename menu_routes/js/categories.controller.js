(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['items'];
function MenuCategoriesController (items) {
	var cat = this;
	cat.items = items;
}

})();


