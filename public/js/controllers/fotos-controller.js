angular.module('alurapic').controller("FotosController", function ($scope, recursoFoto) {

    $scope.lstFotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    recursoFoto.query(function(fotos) {
        $scope.lstFotos = fotos;
    }, function(erro) {
        console.log("ERRO : ", erro);
    });

    $scope.remover = function (foto) {
        console.log("ID REMOVER : ", foto);

        recursoFoto.delete({ fotoId: foto._id}, function() {
            var indiceFoto = $scope.lstFotos.indexOf(foto);

            $scope.lstFotos.splice(indiceFoto, 1);
            $scope.mensagem = foto.titulo + " removida !";
        }, function(erro) {
                $scope.mensagem = "Não foi possivel remover a foto :" + foto.titulo;

                console.log("ERRO : ", erro);
        });

    };

});