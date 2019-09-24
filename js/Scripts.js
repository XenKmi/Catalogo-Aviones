function validateMail(idMail, lbl) {
    //Creamos un objeto 
    object = document.getElementById(idMail);
    valueForm = object.value;

    // Patron para el correo
    var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (valueForm.search(patron) == 0) {
        //Mail correcto
        lbl.style.display = "";
        alert("cosas varias");
        object.style.color = "#000";
        return;
    }
    //Mail incorrecto
    object.style.color = "#f00";
}

function mostrar(lbl) {
    if (lbl.style.display == "none") {
        lbl.style.display = "";
    } else { lbl.style.display = "none"; }
}

function validarNumero() {
    var numeroTelefono = document.getElementById('fono');
    var expresionRegular1 = /^([0-9]+){9}$/; //<--- con esto vamos a validar el numero
    var expresionRegular2 = /\s/; //<--- con esto vamos a validar que no tenga espacios en blanco

    if (numeroTelefono.value == '')
        alert('campo es obligatorio');
    else if (expresionRegular2.test(numeroTelefono.value))
        alert('error existen espacios en blanco');
    else if (!expresionRegular1.test(numeroTelefono.value))
        alert('Numero de telefono incorrecto');
}