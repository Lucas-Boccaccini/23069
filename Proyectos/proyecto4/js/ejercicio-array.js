/*determinar el mayor de un array y mostrar su indice*/

const edad = [15,55,98,23,75];
let valorMaximo ;
let indice;
if(edad.length>0)
{
    
    for(let i=0; i <= edad.length; i++){
        if (edad[i] > edad[i+1]){
            valorMaximo = edad[i];
            indice = i;
        }
    }
    console.log(`valor maximo es: ${valorMaximo} y se encuenta en la posicion ${indice+1}`);
}else{
    console.log(`arreglo vacio`);
}

/*dar vuelta el arreglo */ 

let aux = [];
if(edad.length>0)
{
    for(i = edad.length-1; i >= 0; i--){
        // console.log(`el arreglo al reves: ${edad[i]}`);
        aux.push(edad[i]);
    }
    console.log("edades: " + edad)
    console.log("edades al reves: " + aux)
}else{
    console.log(`arreglo vacio`);
}
   
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return console.log("bubble sort: " + inputArr);
};
bubbleSort(edad);
/* sort */
// let temp;
// for(let i = 0; i < edad.length-1; i++){
//     for(let j = i+1; j < edad.length; j++){
//         if(edad[i]>edad[j]){
//             temp = edad[j];
//             edad[j] = edad[i];
//             edad[i] = temp;
//         }
//     }
// }

// console.log("asd: "+ edad)

console.log("sort asc: "+ edad.sort(asc));
console.log("sort desc: "+ edad.sort(desc));

function asc (a,b){
    return a-b;
}
function desc (a,b){
    return b-a;
}