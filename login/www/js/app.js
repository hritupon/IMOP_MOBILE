// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngMockE2E','ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.run(function($cordovaSplashscreen) {
  setTimeout(function() {
    $cordovaSplashscreen.hide()
  }, 20000)
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, USER_ROLES){

$ionicConfigProvider.tabs.position('bottom');

$stateProvider
.state('login',{
    url:'/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('main',{
    url: '/',
    abstract: 'true',
    templateUrl: 'templates/main.html'

  })
  .state('main.dash',{
    url:'main/dash',
    views: {
      'dash-tab': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('main.public',{
  url:'main/public',
  views: {
    'public-tab': {
      templateUrl: 'templates/public.html'
    }
  }
})
 .state('main.seek',{
  url:'main/seek',
  views: {
    'seek-tab': {
      templateUrl: 'templates/seek.html'
    }
  },
  data: {
    authorizedRoles:[USER_ROLES.admin] 
  }
});
  $urlRouterProvider.otherwise('/main/dash')

})

.run(function($httpBackend){
  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
});