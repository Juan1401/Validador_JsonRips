// Variable global para almacenar el contenido del archivo JSON cargado
let archivoJson = null;

function cargarArchivo() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            archivoJson = JSON.parse(e.target.result);
            console.log(archivoJson); // Muestra el contenido del archivo cargado en la consola
            alert('Archivo cargado correctamente');
        };
        reader.readAsText(file);
    } else {
        alert('Por favor, selecciona un archivo.');
    }
}
