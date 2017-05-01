(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'homeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }
 
     angular
         .module('blocitoff2', ['ui.router', 'firebase'])
         .config(config);
 })();