
angular.module('alurapic').controller('FotoController', function ($scope, $http) {
    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function () {
        console.log("CADASTRO", $scope.foto);

        if ($scope.formulario.$valid) {

            $http.post('v1/fotos', $scope.foto)
                .success(function () {
                    $scope.foto = {};
                    $scope.mensagem = "Foto incluida com sucesso";
                    console.log("FOTO CADASTRADA");
                })
                .error(function () {
                    $scope.mensagem = "Não foi possível incluir a foto";

                    console.log("ERRO : ", error);
                });
        }

    };

});