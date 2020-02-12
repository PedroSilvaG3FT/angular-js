
angular.module('alurapic').controller('FotoController', function ($scope, $http) {
    $scope.foto = {};

    $scope.submeter = function () {
        console.log("CADASTRO", $scope.foto);

        if ($scope.formulario.$valid) {

            $http.post('v1/fotos', $scope.foto)
                .success(function () {
                    $scope.foto = {};
                    console.log("FOTO CADASTRADA");
                })
                .error(function () {
                    console.log("ERRO : ", error);
                });
        }

    };

});