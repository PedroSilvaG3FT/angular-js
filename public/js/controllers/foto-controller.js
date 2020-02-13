
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
                })
                .catch(function (dados) {
                    $scope.mensagem = dados.mensagem;
                });

            // if ($scope.foto._id) {
            //     console.log("EDITA", $scope.foto);

            //     recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, function () {
            //         $scope.mensagem = "Foto alterada com sucesso";
            //     }, function (erro) {
            //         $scope.mensagem = "Não foi possivel alterar";
            //     });
                
            // } else {
            //     console.log("CADASTRO", $scope.foto);
            //     recursoFoto.save($scope.foto, function () {
            //         $scope.mensagem = "Foto incluida com sucesso";

            //     }, function (erro) {
            //         $scope.mensagem = "Não foi possivel Incluir";
            //     });

            // }
        }

    };

});