let numeroFila;
var tituloRegistro = document.getElementById('tituloRegistro');
var btn = document.getElementById('btnAgregar');
var tabla = document.getElementById('tablaRegistros');
tituloRegistro.innerHTML="Registro de asistencia";


btn.addEventListener('click', function(){

    var cedu =  document.getElementById("txtCedula").value;
    var nom1  =  document.getElementById("txtNombre1").value;
    var nom2 =  document.getElementById("txtNombre2").value;
    var ape1 =  document.getElementById("txtApellido1").value;
    var ape2 =  document.getElementById("txtApellido2").value;
    var eml =  document.getElementById("txtEmail").value;
    var naci =  document.getElementById("txtNacimiento").value;
    var dir =  document.getElementById("txtDireccion").value;
    var tel =  document.getElementById("txtTelefono").value;
    var cel =  document.getElementById("txtCelular").value;
    var san =  document.getElementById("txtTipoSangre").value;
    var sex =  document.getElementById("txtSexo").value;
    var rel =  document.getElementById("txtReligion").value;
                               
	if (btn.innerHTML=="Guardar"){
		guardarModificacion() 
	} else {

		tabla.insertRow(-1).innerHTML = '<td>'+cedu+'</td><td>'+nom1+'</td><td>'+nom2+'</td><td>'+ape1+'</td><td>'+ape2+'</td><td>'+eml+'</td><td>'+naci+'</td><td>'+dir+'</td><td>'+tel+'</td><td>'+cel+'</td><td>'+san+'</td><td>'+sex+'</td><td>'+rel+'</td><td><button class="btn btn-success " data-toggle="modal" data-target="#registro" onclick="nuevaFila()"><i class="far fa-file-alt"></i></button><button class="btn btn-warning " data-toggle="modal" data-target="#registro" onclick="modificarFila(this);"><i class="fas fa-pen"></i></button><button class="btn btn-danger " onclick="borrarFila(this);"><i class="fas fa-trash"></i></button></td>'
    }
});

function nuevaFila(){
	tituloRegistro.innerHTML="Nuevo registro";
	btn.innerHTML="Agregar";

    var cedu =  document.getElementById("txtCedula"). value = "";
    var nom1  =  document.getElementById("txtNombre1"). value = "";
    var nom2 =  document.getElementById("txtNombre2"). value = "";
    var ape1 =  document.getElementById("txtApellido1"). value = "";
    var ape2 =  document.getElementById("txtApellido2"). value = "";
    var eml =  document.getElementById("txtEmail"). value = "";
    var naci =  document.getElementById("txtNacimiento"). value = "";
    var dir =  document.getElementById("txtDireccion"). value = "";
    var tel =  document.getElementById("txtTelefono"). value = "";
    var cel =  document.getElementById("txtCelular"). value = "";
    var san =  document.getElementById("txtTipoSangre"). value = "";
    var sex =  document.getElementById("txtSexo"). value = "";
    var rel =  document.getElementById("txtReligion"). value = "";
}


function modificarFila(fila){

    

	numeroFila = fila.parentNode.parentNode.rowIndex;
	var miFila = document.getElementsByTagName("tr")[numeroFila];
	var Celda = miFila.getElementsByTagName("td");

	var cedu =  document.getElementById("txtCedula"). value = Celda[0].innerHTML;
    var nom1  =  document.getElementById("txtNombre1"). value = Celda[1].innerHTML;
    var nom2 =  document.getElementById("txtNombre2"). value = Celda[2].innerHTML;
    var ape1 =  document.getElementById("txtApellido1"). value = Celda[3].innerHTML;
    var ape2 =  document.getElementById("txtApellido2"). value = Celda[4].innerHTML;
    var eml =  document.getElementById("txtEmail"). value = Celda[5].innerHTML;
    var naci =  document.getElementById("txtNacimiento"). value = Celda[6].innerHTML;
    var dir =  document.getElementById("txtDireccion"). value = Celda[7].innerHTML;
    var tel =  document.getElementById("txtTelefono"). value = Celda[8].innerHTML;
    var cel =  document.getElementById("txtCelular"). value = Celda[9].innerHTML;
    var san =  document.getElementById("txtTipoSangre"). value = Celda[10].innerHTML;
    var sex =  document.getElementById("txtSexo"). value = Celda[11].innerHTML;
    var rel =  document.getElementById("txtReligion"). value = Celda[12].innerHTML;
    
    tituloRegistro.innerHTML="Modificar registro";
    btn.innerHTML="Guardar";

}
function guardarModificacion(){

    var cedu =  document.getElementById("txtCedula").value;
    var nom1  =  document.getElementById("txtNombre1").value;
    var nom2 =  document.getElementById("txtNombre2").value;
    var ape1 =  document.getElementById("txtApellido1").value;
    var ape2 =  document.getElementById("txtApellido2").value;
    var eml =  document.getElementById("txtEmail").value;
    var naci =  document.getElementById("txtNacimiento").value;
    var dir =  document.getElementById("txtDireccion").value;
    var tel =  document.getElementById("txtTelefono").value;
    var cel =  document.getElementById("txtCelular").value;
    var san =  document.getElementById("txtTipoSangre").value;
    var sex =  document.getElementById("txtSexo").value;
    var rel =  document.getElementById("txtReligion").value;


    var xcedu = tabla.rows[parseInt(numeroFila,10)].cells;
    var xnom1 = tabla.rows[parseInt(numeroFila,10)].cells;
    var xnom2 = tabla.rows[parseInt(numeroFila,10)].cells;
    var xape1 = tabla.rows[parseInt(numeroFila,10)].cells;
    var xape2 = tabla.rows[parseInt(numeroFila,10)].cells;
    var xeml = tabla.rows[parseInt(numeroFila,10)].cells;
    var xnaci = tabla.rows[parseInt(numeroFila,10)].cells;
    var xdir= tabla.rows[parseInt(numeroFila,10)].cells;
    var xtel = tabla.rows[parseInt(numeroFila,10)].cells;
    var xcel = tabla.rows[parseInt(numeroFila,10)].cells;
    var xsan = tabla.rows[parseInt(numeroFila,10)].cells;
    var xsex = tabla.rows[parseInt(numeroFila,10)].cells;
    var xrel = tabla.rows[parseInt(numeroFila,10)].cells;

     xcedu[parseInt(0,10)].innerHTML=cedu;
     xnom1[parseInt(1,10)].innerHTML=nom1;
     xnom2[parseInt(2,10)].innerHTML=nom2;
     xape1[parseInt(3,10)].innerHTML=ape1;
     xape2[parseInt(4,10)].innerHTML=ape2;
     xeml[parseInt(5,10)].innerHTML=eml;
     xnaci[parseInt(6,10)].innerHTML=naci;
     xdir[parseInt(7,10)].innerHTML=dir;
     xtel[parseInt(8,10)].innerHTML=tel;
     xcel[parseInt(9,10)].innerHTML=cel;
     xsan[parseInt(10,10)].innerHTML=san;
     xsex[parseInt(11,10)].innerHTML=sex;
     xrel[parseInt(12,10)].innerHTML=rel;

}
function borrarFila(fila){
	var numFil = fila.parentNode.parentNode.rowIndex;


	tabla.deleteRow(numFil);
}


    
         