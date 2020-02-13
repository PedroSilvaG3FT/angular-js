angular
    .module('alurapic',
        [
            'ngAnimate',
            'ngRoute',
            'ngResource',
            'minhasDiretivas',
        ]
    )
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({ redirectTo: '/fotos' });


        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:id', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });
    })
