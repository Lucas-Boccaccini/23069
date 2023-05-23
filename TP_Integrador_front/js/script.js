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


const calcularPrecio = () => {
    document.getElementById("pagar").innerHTML = `Total a pagar: $ ${aplicarDto()}`
}

