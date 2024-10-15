function sumarValoresMedicamentos(codTecnologiaSalud) {
  if (!archivoJson) {
      alert("Por favor, carga un archivo JSON primero.");
      return;
  }

  let totalCantidad = 0;

  // Verifica si el archivo JSON tiene la propiedad medicamentos
  if (archivoJson.rips && archivoJson.rips.usuarios) {
      // Filtramos medicamentos según el código de tecnología de salud
      const medicamentosFiltrados = archivoJson.rips.usuarios.flatMap(usuario => 
          usuario.servicios.medicamentos || []
      ).filter((medicamento) => {
          return medicamento.codTecnologiaSalud === codTecnologiaSalud;
      });

      // Sumamos las cantidades de medicamentos filtrados
      medicamentosFiltrados.forEach((medicamento) => {
          totalCantidad += medicamento.cantidadMedicamento;
      });
  } else {
      alert("El archivo JSON no contiene un arreglo de medicamentos válido.");
      return;
  }

  document.getElementById("resultado3").innerText = "Resultado: " + totalCantidad;
}
