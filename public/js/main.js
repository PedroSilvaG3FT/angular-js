angular
    .module('alurapic',
        [
            'ngAnimate',
            'ngRoute',
            'minhasDiretivas',
        ]
    )
    .config(function ($routeProvider) {
        $routeProvider.when('/fotos', {
            templateUrl:'partials/principal.html',
            controller:'FotosController'
        });
    })
    ;