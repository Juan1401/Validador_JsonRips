
function valoresTotales(){
let totalConsulta = sumarValoresConsulta();
let totalProcedimiento = sumarValoresQX (); 
let totalMedicamentos = sumarValores();
let totalOtros = sumarValoresOtros();

let totalServicios = (totalConsulta + totalProcedimiento + totalMedicamentos + totalOtros);

console.log(totalServicios);

document.getElementById("resultadototal").innerText = "Resultado: " + totalServicios;
return totalServicios;

}