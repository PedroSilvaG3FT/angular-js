angular.module('alurapic').controller("FotosController", function ($scope, $http) {

    $scope.lstFotos = [];
    $scope.filtro = "";

    var promise = $http.get('v1/fotos');
    promise
        .then(function (retorno) {
            $scope.lstFotos = retorno.data;
        })
        .catch(function (error) {
            console.log("ERRO : ", error);
        });
});