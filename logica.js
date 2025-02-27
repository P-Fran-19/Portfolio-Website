let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("work");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
document.addEventListener("DOMContentLoaded", function() {
    const experienceItems = document.querySelectorAll(".experience-item");
    experienceItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const experienceItems = document.querySelectorAll(".experience-item");

    experienceItems.forEach((item) => {
        const description = item.querySelector("p");

        // Oculta la descripción por defecto
        description.style.height = "0";
        description.style.overflow = "hidden";
        description.style.transition = "height 0.5s ease-in-out";

        // Evento para mostrar la descripción al pasar el mouse
        item.addEventListener("mouseenter", () => {
            description.style.height = description.scrollHeight + "px"; // Se expande según el contenido
        });

        // Evento para ocultar la descripción al salir
        item.addEventListener("mouseleave", () => {
            description.style.height = "0";
        });
    });
});

