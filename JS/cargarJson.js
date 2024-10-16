// Variable global para almacenar el contenido del archivo JSON cargado
let archivoJson = null;

function cargarArchivo() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            archivoJson = JSON.parse(e.target.result);
            console.log(archivoJson);
            alert('Archivo cargado correctamente');
            sumarValoresConsulta();
            sumarValoresQX();
            sumarValores(); //medicamentos
            sumarValoresOtros();
            valoresTotales();
        };
        reader.readAsText(file);
    } else {
        alert('Por favor, selecciona un archivo.');
    }
}