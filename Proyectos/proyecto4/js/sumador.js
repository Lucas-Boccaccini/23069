// alert("hola mundo");


// const valor1 = parseInt(prompt("ingresa valor 1"));
// const valor2 = 20;
// const resultado = valor1 + valor2;
// console.log(resultado);

//asi se crea una funcion
//no tiene parametros de entrada
function sumar() {
    
    //obtener la referencia al input con id="valor1"
    //usando el D.O.M
    const v1 = toNumber(document.getElementById('valor1').value);
    const v2 = toNumber(document.getElementById('valor2').value);

    const suma = v1 + v2;
    const apuntadorAlResultado = document.getElementById('resultado');
    apuntadorAlResultado.innerHTML = suma
    //en los div no existe value (como el input) existe innerHTML
}
// function sumarV2(){ 
//      LO MISMO QUE SUMAR()
//     const suma = toNumber(document.getElementById("valor1").value) + toNumber(document.getElementById("valor2").value)
//     document.getElementById("resultado").innerHTML = suma
// }
function toNumber (valor) {
    //lógica de la función
    const valorNumerico = Number(valor);
    
    return valorNumerico;
}
const boton = document.getElementById('btnSumador');
boton.addEventListener('click', sumar);
