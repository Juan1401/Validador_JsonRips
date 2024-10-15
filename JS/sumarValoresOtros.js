function sumarValoresOtros() {
    if (!archivoJson) {
        alert("Por favor, carga un archivo JSON primero.");
        return;
    }

    let totalVrServicio = 0;

    // Verifica si hay usuarios
    if (archivoJson.rips && archivoJson.rips.usuarios) {
        archivoJson.rips.usuarios.forEach((usuario) => {
            if (usuario.servicios && usuario.servicios.otrosServicios) {
                usuario.servicios.otrosServicios.forEach((otroServicio) => {
                    totalVrServicio += otroServicio.vrServicio; // Suma el valor del servicio
                });
            }
        });
    } else {
        alert("El archivo JSON no contiene un arreglo de otros servicios válido.");
        return;
    }

    document.getElementById("resultado2").innerText = "Resultado: " + totalVrServicio;
}

