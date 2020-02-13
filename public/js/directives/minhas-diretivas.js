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
    .directive("meuBotaoPerigo", function () {
        var ddo = {};

        ddo.restric = "E";

        ddo.scope = {
            nome: '@', //COPIA DE VALOR QUE É AVALIADO COMO STRING
            acao: '&' //ULTILIZA-SE '&' PARA EXECUTAR UMA EXPRESSAO
        };

        ddo.template = '<button ng-click="acao(foto)"  class="btn btn-danger btn-block">{{nome}}</button> ';
        return ddo;
    })
    .directive("meuFocus", function () {
        var ddo = {};

        ddo.restric = "A";
        ddo.scope = {
            focado: '=', // =: PERMITE UMA COMUNICAÇÃO BIDIMENSIONAL DE CONTROLLER COM DIRETIVA P/ CONTROLAR A MESMA PROP
        };

        //LINK: PERMITE ACESSO AO SCOPE DA DIRETIVA E O ELEMENTO QUE ACIONOU | PERMITE COLOCAR ESCULTADORES DE PROPS
        ddo.link = function (scope, element) {
            scope.$watch('focado', function () {
                if (scope.focado) {
                    element[0].focus();
                    scope.focado = false; //SETA O FOCADO DO CONTROLLER PARA FALSE
                }

            });
        };

        return ddo;
    })
    ;