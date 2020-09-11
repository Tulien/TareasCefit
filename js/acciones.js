var btn0 = document.getElementById("btnAgregar");
var tabla = document.getElementById("tablaRegistros");

btn0.addEventListener("click", function(){
    var codi =  document.getElementById("txtCodigo");
    var nom  =  document.getElementById("txtNombre");
    var tel =  document.getElementById("txtTelefono");
    var muni =  document.getElementById("txtMunicipio");

   tabla.insertRow(-1).innerHTML ="<td></td><td></td><td></td><td></td><td></td>" ;
});

