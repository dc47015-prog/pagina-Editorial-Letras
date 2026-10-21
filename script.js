const lista = document.querySelector("#lista");
const totalTexto = document.querySelector("#total");
const botones = document.querySelectorAll(".agregar");
const botonVaciar = document.querySelector("#vaciar");

let total = 0;

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {

        // Buscamos la tarjeta del libro seleccionado
        const tarjeta = boton.closest(".tarjeta-libro");

        // Obtenemos el nombre y el precio
        const nombre = tarjeta.querySelector("h3").textContent;
        const precioTexto = tarjeta.querySelector(".precio").textContent;
        const precio = Number(
            precioTexto.replace(/[^\d.]/g, "")
        );

        // Agregamos el libro al carrito
        const renglon = document.createElement("li");
        renglon.textContent = nombre + " - $" + precio + " MXN";
        lista.appendChild(renglon);

        // Actualizamos el total
        total = total + precio;
        totalTexto.textContent = total;
    });
});

// Vaciar el carrito
botonVaciar.addEventListener("click", function () {
    lista.innerHTML = "";
    total = 0;
    totalTexto.textContent = total;
});