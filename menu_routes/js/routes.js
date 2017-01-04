(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
	url: '/',
	templateUrl: 'templates/home.template.html'
})

.state('categories', {
	url: '/categories',
	templateUrl: 'templates/categories.template.html',
	controller: 'MenuCategoriesController as cat',
	resolve: {
		items: ['MenuDataService', function (MenuDataService) {
			return MenuDataService.getAllCategories();
		}]
	}
})

.state('categories.items', {
	url: '/{categoryShortName}/items',
	templateUrl: 'templates/items.template.html',
	controller: 'MenuItemsController as ite',
	resolve: {
		items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
			// console.log($stateParams.categoryShortName);
			return MenuDataService.getItemsForCategory($stateParams.categoryShortName);			
		}]

	}
});

}

})();