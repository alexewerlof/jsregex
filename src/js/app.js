'use strict';

class AppController {
  constructor() {
    this.foo = 'ber';
  }

  toggleSidenav (menuId) {
    $mdSidenav(menuId).toggle();
  }
}

angular.module('app', ['ngMaterial']).controller('AppController', () => new AppController);
