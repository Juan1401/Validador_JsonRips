function sumarValoresQX() {
    if (!archivoJson) {
        alert("Por favor, carga un archivo JSON primero.");
        return;
    }

    let totalVrServicio = 0;

    // Verifica si hay usuarios
    if (archivoJson.rips && archivoJson.rips.usuarios) {
        archivoJson.rips.usuarios.forEach((usuario) => {
            if (usuario.servicios && usuario.servicios.procedimientos) {
                usuario.servicios.procedimientos.forEach((procedimiento) => {
                    totalVrServicio += procedimiento.vrServicio; // Suma el valor del servicio
                });
            }
        });
    } else {
        alert("El archivo JSON no contiene un arreglo de procedimientos válido.");
        return;
    }

    document.getElementById("resultadoQX").innerText =
        "Resultado: " + totalVrServicio;

    return totalVrServicio;
}
