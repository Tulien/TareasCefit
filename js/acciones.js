var btn0 = document.getElementById("btnAgregar");
var tabla = document.getElementById("tablaRegistros");

btn0.addEventListener("click", function(){
    var codi =  document.getElementById("txtCodigo").value;
    var nom  =  document.getElementById("txtNombre").value;
    var tel =  document.getElementById("txtTelefono").value;
    var muni =  document.getElementById("txtMunicipio").value;

tabla.insertRow(-1).innerHTML ="<td>"+codi+"</td><td>"+nom+"</td><td>"+tel+"</td><td>"+muni+"</td><td></td>" ;
});



