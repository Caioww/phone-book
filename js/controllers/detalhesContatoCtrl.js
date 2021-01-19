angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, contato, $routeParams) {

    $scope.contato = contato.data;

});