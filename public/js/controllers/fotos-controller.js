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

    // $http.get('v1/fotos')
    //     .then(function (retorno) {
    //         $scope.lstFotos = retorno.data;
    //     })
    //     .catch(function (error) {
    //         console.log("ERRO : ", error);
    //     });

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

        // $http.delete('v1/fotos' + foto.id)
        //     .then(function (retorno) {
        //         var indiceFoto = $scope.lstFotos.indexOf(foto);

        //         $scope.lstFotos.splice(indiceFoto, 1);
        //         $scope.mensagem = foto.titulo + " removida !";
        //     })
        //     .catch(function (error) {
        //         $scope.mensagem = "Não foi possivel remover a foto :" + foto.titulo;

        //         console.log("ERRO : ", error);
        //     });
    };

});