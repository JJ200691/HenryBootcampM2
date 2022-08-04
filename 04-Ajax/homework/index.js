$("#boton").click(function () {
    $.get("http://localhost:5000/amigos", function (data) {
        var amigo = document.createElement("li");
        amigo.src = data.url;
    }
})