(function () {
'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['userInfo'];
function MyinfoController(userInfo) {
  var $infoCtrl = this;

  $infoCtrl.user = userInfo;
}

})();