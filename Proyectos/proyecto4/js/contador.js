decrementar =() =>{
    if(!(obtenerValor() == 0)){
       
        let valor = obtenerValor()-1;
        actualizarValor(valor);
    }
}
incrementar =() =>{
    document.getElementById("valor").value = obtenerValor()+1;
}
function obtenerValor(){
    let valor = document.getElementById("valor").value;
    return parseInt(valor);
 }
function actualizarValor(nuevoValor){
    document.getElementById("valor").value = nuevoValor
}
    