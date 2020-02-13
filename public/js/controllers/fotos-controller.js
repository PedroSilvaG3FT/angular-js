angular.module('alurapic').controller("FotosController", function ($scope, $http) {

    $scope.lstFotos = [];
    $scope.filtro = "";

    $http.get('v1/fotos')
        .then(function (retorno) {
            $scope.lstFotos = retorno.data;
        })
        .catch(function (error) {
            console.log("ERRO : ", error);
        });

    $scope.remover = function(foto) {
        console.log("ID REMOVER : ", foto);

        $http.delete('v1/fotos' + foto.id)
            .then(function (retorno) {
                var indiceFoto = $scope.lstFotos.indexOf(foto);
                $scope.lstFotos.splice(indiceFoto, 1);
            })
            .catch(function (error) {
                console.log("ERRO : ", error);
            });
    };

});