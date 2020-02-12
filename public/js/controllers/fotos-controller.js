angular.module('alurapic').controller("FotosController", function ($scope, $http) {

    $scope.foto = {};

    $scope.lstFotos = [];

    var promise = $http.get('v1/fotos');

    promise
        .then(function (retorno) {
            $scope.lstFotos = retorno.data;
        })
        .catch(function (error) {
            console.log("ERRO : ", error);
        });
});