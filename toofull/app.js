(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController); 

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.add=function(lunchItems) {
		if (!lunchItems) {
			$scope.message = "Please enter data first";
			console.log("Please enter data first");
			return;
		}
		var lunchArray = lunchItems.split(",");
		console.log(lunchArray.length);
		if (lunchArray.length <= 3) {
			$scope.message = "Enjoy!";
			console.log("Enjoy!");
		}
		else  {
			$scope.message = "Too much!";
			console.log("Too much!");
		}
 	}
}

})();