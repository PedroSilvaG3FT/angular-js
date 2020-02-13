
angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.id) {

        $http.get('v1/fotos/' + $routeParams.id)
            .then(function (retorno) {
                console.log("FOTO : ", retorno);
                $scope.foto = retorno.data;
            })
            .catch(function (error) {
                console.log("ERRO : ", error);
            });
    }

    $scope.submeter = function () {
        console.log("CADASTRO", $scope.foto);

        if ($scope.formulario.$valid) {

            if ($scope.foto._id) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function () {
                        $scope.foto = {};
                        $scope.mensagem = "Foto alterada com sucesso";
                        console.log("FOTO CADASTRADA");
                    })
                    .error(function () {
                        $scope.mensagem = "Não foi possível incluir a foto";

                        console.log("ERRO : ", error);
                    });
            } else {

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
        }

    };

});