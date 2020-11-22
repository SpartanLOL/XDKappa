

let idioma = "esp";

function cambiarIdioma() {
    let ing = document.getElementsByClassName("ing");
    let esp = document.getElementsByClassName("esp");
    if (idioma == "esp") {
        idioma = "ing";

        for (let i = 0; i < ing.length; i++) {
            ing[i].style.display = "inline";
            esp[i].style.display = "none";
        }
    } else if (idioma == "ing") {
        idioma = "esp";
        for (let i = 0; i < ing.length; i++) {
            ing[i].style.display = "none";
            esp[i].style.display = "inline";
        }
    }
}
function download(email, nombre, apellido) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + "Correo: "+encodeURIComponent(email) + "\nNombre: " + encodeURIComponent(nombre) + "\nApellido: " + encodeURIComponent(apellido) +"\n Esto se merece un 10");
    element.setAttribute('download', "info");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}