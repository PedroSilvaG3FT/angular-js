
angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams, cadastroDeFotos) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .then(function (retorno) {
                $scope.foto = retorno.data;
                console.log("FOTO : ", $scope.foto);
            })
            .catch(function (error) {
                console.log("ERRO : ", error);
            });
    }

    $scope.submeter = function () {

        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
                .then(function (dados) {
                    $scope.mensagem = dados.mensagem;
                    // limpa o formulário se for inclusão
                    if ($scope.inclusao) $scope.foto = {};
                    $scope.focado = true;
                })
                .catch(function (dados) {
                    $scope.mensagem = dados.mensagem;
                });
        }

    };

});