// Esperar 3 segundos (3000 milisegundos)
setTimeout(function () {
    // Ocultar la pantalla de carga
    document.querySelector(".container").style.display = "none";

    // Mostrar el contenido principal
    document.querySelector("main").style.visibility = "visible";
    document.querySelector("header").style.visibility = "visible";
    document.querySelector("footer").style.visibility = "visible";
}, 5000);

document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
    const htmlElement = document.documentElement; // Obtén el elemento <html>

    // Función para cambiar el tema de la página
    function toggleTheme() {
        if (themeSwitch.checked) {
            htmlElement.classList.add("dark-mode"); // Agrega la clase "dark-mode"
        } else {
            htmlElement.classList.remove("dark-mode"); // Elimina la clase "dark-mode"
        }
    }

    // Escucha el cambio en el interruptor de tema
    themeSwitch.addEventListener("change", toggleTheme);

    // Verifica el estado del interruptor de tema al cargar la página
    toggleTheme();
});

