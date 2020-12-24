angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "views/alert.html",
        replace: true,
        scope: {
            title="@",
            message="="
        }
    }
});