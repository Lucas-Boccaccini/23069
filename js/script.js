function proyectos(){
    let proyecto = document.getElementsByTagName("article");
    
    for(i=0;i<proyecto.length;i++){
        if (proyecto[i].id=="P1") {
            window.location.assign("../Proyectos/Proyecto1/inicio.html");
        }else if(proyecto[i].id=="P2"){
            window.location.assign("../Proyectos/Proyecto2/inicio.html");
        }else if(proyecto[i].id=="P3"){
            window.location.assign("../Proyectos/Proyecto3/html/sacar-turno-v4.html");
        }else if(proyecto[i].id=="p4"){
            window.location.assign("../TP_Integrador_front/Proyecto_front.html");
        }else if(proyecto[i].id=="p5"){
            window.location.assign("#");
        }
    }
}