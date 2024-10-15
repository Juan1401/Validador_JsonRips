function sumarValoresConsulta() {
    if (!archivoJson) {
        alert("Por favor, carga un archivo JSON primero.");
        return;
    }

    let totalVrServicio = 0;

    // Verifica si hay usuarios
    if (archivoJson.rips && archivoJson.rips.usuarios) {
        archivoJson.rips.usuarios.forEach((usuario) => {
            if (usuario.servicios && usuario.servicios.consultas) {
                usuario.servicios.consultas.forEach((consulta) => {
                    totalVrServicio += consulta.vrServicio; // Suma el valor del servicio
                });
            }
        });
    } else {
        alert("El archivo JSON no contiene un arreglo de consultas válido.");
        return;
    }

    document.getElementById("resultadoC").innerText = "Resultado: " + totalVrServicio;
}
