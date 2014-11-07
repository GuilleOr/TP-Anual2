function confirmarEnvio(){

	var mensaje = 'Si pulsa el botón "Aceptar", se enviará el formulario';

	if(  confirm(mensaje)  ){
		return true;
	}

	//redirección
	window.location = 'http://www.google.com';
	return false;

}