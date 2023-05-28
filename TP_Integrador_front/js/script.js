function opcSelec(){
    let categoria = document.getElementById("categoria");
    let opcSelec = categoria.options[categoria.selectedIndex];
    return opcSelec.value;
}
function dto(){
    let categoria = opcSelec();
    let porcentaje;
    switch(categoria){
        case "1": porcentaje = 0.80; break; //1 = estudiante
        case "2": porcentaje = 0.50; break; //2 = trainee
        case "3": porcentaje = 0.15; break; //3 = junior
    }
    let res = 1 - porcentaje;
    return Math.round(res*100)/100;
}
function cantidad(){
    return document.getElementById("cant").value; 
}
function  importe(){
    const valor = 200;
    const cant = parseInt(cantidad());
    
    return cant * parseInt(valor);
}
function aplicarDto(){
    return importe() * dto();
}
function valido(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const cantidad = document.getElementById("cant").value;
    
    if(nombre == ""){
        document.getElementById("alerta").innerHTML =
        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"+
            "<strong>Advertencia!</strong> Debes completar el campo 'Nombre'."+
            "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"+
        "</div>";
    }else if(apellido == ""){
        document.getElementById("alerta").innerHTML =
        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"+
            "<strong>Advertencia!</strong> Debes completar el campo 'Apellido'."+
            "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"+
        "</div>";
    }else if(email == ""){
        document.getElementById("alerta").innerHTML =
        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"+
            "<strong>Advertencia!</strong> Debes completar el campo 'Correo'."+
            "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"+
        "</div>";
    }else if(cantidad == ""){
        document.getElementById("alerta").innerHTML =
        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"+
            "<strong>Advertencia!</strong> Debes completar el campo 'Cantidad'."+
            "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"+
        "</div>";
    }else{
        document.getElementById("alerta").innerHTML =
        "<div class='alert alert-success alert-dismissible fade show' role='alert'>"+
            "<strong>Exito!</strong> Todos los campos han sido completados."+
            "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"+
        "</div>";
    }
    // return console.log(`Nombre: ${nombre} Apellido: ${apellido} Email: ${email}`);
}
const calcularPrecio = () => {
    if(valido()){
        document.getElementById("pagar").innerHTML = `Total a pagar: $ ${aplicarDto()}`
    }
}

