const edificioVacio = [];

const edificio = ["valor1","valor2","valor3"];
console.log('0', edificio[0]);

edificio.push("valor4");

console.log("recorriendo el edificio con for")
for(let persona of edificio){
    if(persona === "valor2"){
        console.log(persona);
    }
}
//      ###forma similar###
const valor = edificio.find(nombre => nombre === "valor2"); //voy a centrarme en que quiero buscar
if (valor !== undefined){
    console.log("existe", valor);
}else{
    console.log("no existe", valor);
}