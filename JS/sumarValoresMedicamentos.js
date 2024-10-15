function sumarValores() {
    if (!archivoJson) {
        alert("Por favor, carga un archivo JSON primero.");
        return;
    }

    let totalVrServicio = 0;

    // Verifica si hay usuarios
    if (archivoJson.rips && archivoJson.rips.usuarios) {
        archivoJson.rips.usuarios.forEach((usuario) => {
            if (usuario.servicios && usuario.servicios.medicamentos) {
                usuario.servicios.medicamentos.forEach((medicamento) => {
                    totalVrServicio += medicamento.vrServicio; // Suma el valor del servicio
                });
            }
        });
    } else {
        alert("El archivo JSON no contiene un arreglo de medicamentos válido.");
        return;
    }

    document.getElementById("resultado").innerText =
        "Resultado: " + totalVrServicio;
}
