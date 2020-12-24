angular.module("listaTelefonica").filter("ellipsis", function () {
    return function (input, size) {
        if (input.length <= size || size === undefined) return input;
        else {
            var nomeLimitado = input.substring(0, 2) + "...";
            return nomeLimitado;
        }
    }
})