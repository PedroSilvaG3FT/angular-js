angular.module('alurapic').controller("FotosController", function ($scope, $http, $resource) {

    $scope.lstFotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    var recursoFoto = $resource("v1/fotos/:fotoId");

    recursoFoto.query(function(fotos) {
        $scope.lstFotos = fotos;
    }, function(erro) {
        console.log("ERRO : ", erro);
    });

    $scope.remover = function (foto) {
        console.log("ID REMOVER : ", foto);

        recursoFoto.delete({id: foto._id}, function() {
            var indiceFoto = $scope.lstFotos.indexOf(foto);

            $scope.lstFotos.splice(indiceFoto, 1);
            $scope.mensagem = foto.titulo + " removida !";
        }, function(erro) {
                $scope.mensagem = "Não foi possivel remover a foto :" + foto.titulo;

                console.log("ERRO : ", erro);
        });

    };

});