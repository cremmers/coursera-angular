(function () {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $signCtrl = this;

  $signCtrl.submit = function () {
  	MenuService.getFavDish($signCtrl.user.favdish).then(function (response) {
  		$signCtrl.user.favdish = response.data;
  		MenuService.setUserProfile($signCtrl.user);
  		$signCtrl.success = true;
  		$signCtrl.error = false;
  	}, function (response){
  		$signCtrl.success = false;
    	$signCtrl.error = true;
    });
  };
}

})();