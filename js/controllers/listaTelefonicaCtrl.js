angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefônica";

    $scope.contatos = [];

    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function successCallback(response) {
            $scope.contatos = response.data;
        }).catch(function (error) {
            $scope.message = "Aconteceu um problema" + error.data;
        });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function successCallback(response) {
            $scope.operadoras = response.data
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });

    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordernarPor = function (parametro) {
        $scope.criterioDeOrdenacao = parametro;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();

});