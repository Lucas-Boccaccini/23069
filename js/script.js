const animacion = (isActive) =>{ 
    if(!isActive.classList.contains("loading")){
        isActive.classList.add("loading");
        setTimeout(() => {
            isActive.classList.remove("loading");
        },500);
    }
}
document.querySelectorAll('.proyect').forEach(function (element) {
    element.addEventListener('click', function () {
        if(element.id == "P1"){
            animacion(element);
            setTimeout(()=> location.href="../Proyectos/Proyecto1/inicio.html",500);
        }else if(element.id == "P2"){
            animacion(element);
            setTimeout(()=> location.href="../Proyectos/Proyecto2/inicio.html",500);
        }else if(element.id == "P3"){
            animacion(element);
            setTimeout(()=> location.href="../Proyectos/Proyecto3/html/sacar-turno-v4.html",500);
        }else if(element.id == "P4"){
            animacion(element);
            setTimeout(()=> location.href="../TP_Integrador_front/Proyecto_front.html",500);
        }else if(element.id == "P5"){
            animacion(element);
            setTimeout(()=> location.href="../Proyectos/proyecto4/javascript.html",500);
        }else if(element.id == "P6"){
            animacion(element);
            setTimeout(()=> location.href="#",500);
        }
    });
});

