// const edades = [];
// calcularAnios = () => {

//     let fechaDeMiCumple = obtenerCumple();

//     if(!fechaDeMiCumple)
//      return;
     
//     let fechaSplitted = formatoFecha(fechaDeMiCumple);

//     let fechaDeMiCumpleConvetida = convertirFecha(fechaSplitted);

//     const edad =  calcularEdad(fechaDeMiCumpleConvetida);



//     mostrarResultado(edad + " - " + plan+ " - "+ precio) ;
//     //cargo en el array
//     const objeto = {
//         edad: edad,
//         plan: plan,
//         costoPlan: precio
//     };
//     edades.push(objeto);
//     //guardar dato en local storage
//     //clave, valor

//     // localStorage.setItem('edad', JSON.stringify(objeto));
// }

// calcularEdad = (fechaDelFormulario) => {
   
//     return new Date().getFullYear() - fechaDelFormulario.getFullYear();
// }

// obtenerCumple = () =>{
//     const apuntadorAMiCumple = document.getElementById('miCumple');
//     const fechaDeMiCumple = apuntadorAMiCumple.value;
//     return fechaDeMiCumple;
// }

// formatoFecha = (fechaDeMiCumple) =>{
//     const fechaSplitted = fechaDeMiCumple.split('-');
//     console.log(fechaSplitted);
//     return fechaSplitted;
// }

// convertirFecha = (fechaSplitted) =>{
//     const fechaDeMiCumpleConvetida = new Date(fechaSplitted[0], Number(fechaSplitted[1])-1, fechaSplitted[2]);
//     return fechaDeMiCumpleConvetida;
// }

// mostrarResultado = (fechaDeMiCumpleConvetida) =>{
//     document.getElementById('resultado').innerHTML =fechaDeMiCumpleConvetida;
// }
// //
// cargarDesdeLocal = () =>{
//     const datoEnLocal = localStorage.getItem('edad');
//     const datoParsed = JSON.parse(datoEnLocal)
//     mostrarResultado(datoParsed.edad + " - " + datoParsed.plan + " - " + datoParsed.costoPlan)
// }
// cargarDesdeLocal()

const edades = [];

calcularAnios = () => {

    let fechaDeMiCumple = obtenerCumple();

    if(!fechaDeMiCumple)
     return;
     
    let fechaSplitted = formatoFecha(fechaDeMiCumple);

    let fechaDeMiCumpleConvetida = convertirFecha(fechaSplitted);

    const edad =  calcularEdad(fechaDeMiCumpleConvetida);

    let plan;
    //si edad   <=25             => plan1
    //si edad   > 25 && <= 35    => plan2 (>,<,>=,<=, !==)
    //si edad   > 35             => plan3
    if(edad <=25 ){ 
        plan = 'plan1';
    }
    if(edad > 25 && edad <=35) {
        plan = 'plan2';
    }
    if(edad > 35) {
        plan = 'plan3';   
    }

    //si plan es plan 1 => 1000
    //si plan es plan 2 => 1500
    //si plan es plan 3 => 3500
    let costoDelPlan;
    switch(plan) {
        case 'plan1':
            costoDelPlan = 1000;
            break;
        case 'plan2':
            costoDelPlan = 1500;
            break;
        case 'plan3': 
            costoDelPlan = 3500;
            break;
    }
    
    // mostrarResultado(edad + '-'+ plan + '-'+ costoDelPlan);

    //guardar dato en localStorage
    //cargo en array la nueva 
    const objeto = {
        id: Math.random(),
        edad: edad,
        plan: plan,
        costoDelPlan: costoDelPlan
    };
    
    edades.push(objeto);//cargo en el array el nuevo objeto

    localStorage.setItem('edad',JSON.stringify(edades));//¿es objeto o es string?

    cargarDesdeLocal();
}

calcularEdad = (fechaDelFormulario) => {
    // logica
    return new Date().getFullYear() - fechaDelFormulario.getFullYear();
}

obtenerCumple = () =>{
    const apuntadorAMiCumple = document.getElementById('miCumple');
    const fechaDeMiCumple = apuntadorAMiCumple.value;
    return fechaDeMiCumple;
}

formatoFecha = (fechaDeMiCumple) =>{
    const fechaSplitted = fechaDeMiCumple.split('-');
    console.log(fechaSplitted);
    return fechaSplitted;
}

convertirFecha = (fechaSplitted) =>{
    const fechaDeMiCumpleConvetida = new Date(fechaSplitted[0], Number(fechaSplitted[1])-1, fechaSplitted[2]);
    return fechaDeMiCumpleConvetida;
}

mostrarResultado = (fechaDeMiCumpleConvetida) =>{
    document.getElementById('resultado').innerHTML =fechaDeMiCumpleConvetida;
}

cargarDesdeLocal = () => {    
    const datoEnLocal = localStorage.getItem('edad');//string porque viene del local |  sacar a funcion
    const datoEnLocalParseado = JSON.parse(datoEnLocal);//me da un objeto            |  let variable = funcion();
   
    const tabla = dibujarTabla(datoEnLocalParseado);
    //al final actualizo una sola vez
    mostrarResultado(tabla);

}
dibujarTabla = (lista) =>{
 //ahora es un array
 let edadesConcatenadas = 
    `<table>
        <tr>
            <th>edad</th>
            <th>plan</th>
            <th>costo</th>
        </tr>`;
    

 for(let dato of lista) {
     edadesConcatenadas += '<tr>'
     edadesConcatenadas += `<td>${dato.edad}</td>`;//alt+96
     edadesConcatenadas += `<td>${dato.plan}</td>`;//alt+96
     edadesConcatenadas += `<td>${dato.costoDelPlan}</td>`;//alt+96
     edadesConcatenadas += `<td><button onclick="eliminar(${dato.id})">X</button></td>`;
     edadesConcatenadas += '</tr>'
 }
 edadesConcatenadas += '</table>'

 return edadesConcatenadas
}
eliminar = (id) =>{
   
    //como eliminar de un array usando el metodo
    //.filter
    const datoEnLocal = localStorage.getItem('edad');//string porque viene del local
    const datoEnLocalParseado = JSON.parse(datoEnLocal);//me da un objeto
   
    const listaFiltros = datoEnLocalParseado.filter(dato => dato.id !== id);
    alert(dato);
    dibujarTabla(listaFiltros); //actualizar el localStrorage con la nueva lista
}
cargarDesdeLocal();