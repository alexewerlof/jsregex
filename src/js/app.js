angular.module('app', ['ngMaterial'])
.controller('AppController', function($mdSidenav) {
  var vm = this;

  vm.foo = 'bar';

  vm.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

});
