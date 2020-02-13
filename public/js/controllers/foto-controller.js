
angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams, $resource) {
    $scope.foto = {};
    $scope.mensagem = "";

    var recursoFoto = $resource('/v1/fotos/:id', null, {
        update: {
            method: "PUT"
        }
    });

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
                recursoFoto.update({ id: $scope.foto._fotoId }, $scope.foto, function () {
                    $scope.mensagem = "Foto alterada com sucesso";
                }, function (erro) {
                    $scope.mensagem = "Não foi possivel alterar";
                });
           
            } else {
                recursoFoto.save($scope.foto, function () {
                    $scope.mensagem = "Foto incluida com sucesso";

                }, function (erro) {
                    $scope.mensagem = "Não foi possivel Incluir";
                });

            }
        }

    };

});