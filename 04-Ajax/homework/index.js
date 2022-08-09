$("#boton").click(() => {
    let lista = $("#lista");
    lista.empty();
    $.get("http://localhost:5000/amigos", (friends) => {
        friends.forEach((friend) => lista.append(`<li>${friend.name}</li>`));
    });
});

$("#search").click(() => {
    let id = $("#input").val();
    $.get(`http://localhost:5000/amigos${id}`, (friend) => {
        $("#amigo").text(friend.name);
    });
});

$("#delete").click(() => {
    let id = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos${id}`,
        method: "DELETE",
        succes: () => {
            $("#succes").text(`Amigo ${id} eliminado con éxito`)
        }
    });
});

