angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        // DDO = directive definition object;
        var ddo = {};

        // PODERA ULTILIZAR A DIRETIVA COMO ATRIBUTO OU COMO ELEMENTO
        ddo.restric = "AE";
        ddo.scope = {
            titulo: '@'
        };
        
        //RECEBE ELEMENTOS FILHOS DE UMA DIRETIVA A PARTIR DA DIRETIVA ng-transclude
        ddo.transclude = true;
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function () {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    })
    ;