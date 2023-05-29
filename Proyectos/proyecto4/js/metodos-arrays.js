//array/vector de objetos alumnos
const alumnos =  [
    {
        curso:'cac 23069',
        edad: 37,
        nombre: 'carlos',
        apellido: 'lopez',
        dni: 123456789,
        secundarioCompleto: true,
    },
    {
        curso:'cac 23069',
        edad: 34,
        nombre: 'ana',
        apellido: 'espindola',
        dni: 345678911,
        secundarioCompleto: false,
    },
    {
        curso:'cac 23069',
        edad: 59,
        nombre: 'enrique',
        apellido: 'torregiani',
        dni: 456789654,
        secundarioCompleto: true,
    }
];

//.map
const apellidos = alumnos.map( x => x.apellido );
console.log(apellidos);

//.reduce()
const suma = alumnos.reduce((prev,current) => prev + current.edad,0);
console.log(suma);

//apellidos separados por ,
const apellidosConcat = 
    alumnos.reduce((prev,current) => prev+','+current.apellido ,'');
console.log(apellidosConcat);

//filter()
const lista = [];
for(let i=0;i<alumnos.length;i++)  {
    if(alumnos[i].edad > 34) {
        lista.push(alumnos[i]);
    }
}
console.log(lista);

const lista2 = alumnos.filter(x => x.edad > 34);//que quiero!
console.log(lista2)

//filtrar los alumnos que tiene sec completo
const lista3 = alumnos.filter(x => x.secundarioCompleto);//que quiero!
console.log(lista3)

//mayores a 37 y con secundario completo
const lista4 = alumnos.filter(x => x.edad > 37 && x.secundarioCompleto);//que quiero!
console.log(lista4)

//findIndex
const idx59 = alumnos.findIndex( x => x.edad === 59);
console.log(idx59)

//find
const obj59 = alumnos.find(x => x.edad === 59);
console.log(obj59);

//Object.fromEntries
const arrays = [
    ['clave','valor'],
    ['clave2','valor2'],
    ['clave3','valor2'],
    ['clave4','valor2'],
    ['clave5','valor2'],
    ['clave6','valor2'],
]
const entries = Object.fromEntries(arrays);//[]
console.log(entries)

function buscar () {
    const id = document.getElementById('id').value;

    //consumir un api rest externo  usando el api fetch
    fetch(`https://reqres.in/api/users/${id}`)//alt+96
    .then(response => response.json())//cuando vuelva la respuesta
    .then(data => dibujarCard(data))

}

const dibujarCard = (objJson) => {
    if(!objJson) {
        return
        ///ojo
    }
    const img = document.getElementById('img')//<img src="">
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');

    img.src = objJson.data.avatar;
    nombre.innerText = objJson.data.first_name;
    email.innerText = objJson.data.email;
}

document.getElementById('btnBuscar')
    .addEventListener('click',buscar);