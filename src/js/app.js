'use strict';

class AppController {
  constructor($mdDialog, functions) {
    this.$mdDialog = $mdDialog;
    this.foo = 'ber';
    this.flags = {
      g: false,
      m: false,
      i: false
    };
    this.selectedFunction = this.functions[0];
    this.testString = 'abababababab';
    this.parameter = 'wololo';
  }

  toggleSidenav (menuId) {
    $mdSidenav(menuId).toggle();
  }

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

  clear() {
    this.testString = '';
    this.parameter = '';
  }
}

angular.module('app').controller('AppController', () => AppController);
