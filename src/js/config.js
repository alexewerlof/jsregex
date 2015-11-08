'use strict';

angular.module('app', ['ngMaterial']).config(function config($mdIconProvider) {
  // Configure URLs for icons specified by [set:]id.
  // TODO: revise this
  $mdIconProvider
       .defaultFontSet('zmdi')
       .defaultIconSet('my/app/icons.svg')       // Register a default set of SVG icons
       .iconSet('social', 'my/app/social.svg')   // Register a named icon set of SVGs
       .icon('check', 'img/icon/ic_check_black_24px.svg')
       .icon('flag', 'img/icon/ic_flag_black_24px.svg')
       .icon('work:chair', 'my/app/chair.svg');  // Register icon in a specific set
});
