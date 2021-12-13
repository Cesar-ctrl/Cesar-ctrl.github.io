window.onload = function () {
    const IMAGENES = [
        'img/imagen-principal-borde/Getting-startedd.png',
        'img/imagen-principal-borde/MonstruosFT.png',
        'img/imagen-principal-borde/ClasesF.png'
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 7000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        clearInterval(intervalo)
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        renderizarImagen();
    }
    
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        clearInterval(intervalo)
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        renderizarImagen();
    }

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    renderizarImagen();
    
    var menu = document.getElementById("menu");
    menu.style.visibility="hidden";

    var notepad = document.getElementById("imagenes");
    notepad.addEventListener("contextmenu",function(event){
        event.preventDefault();
        var menu = document.getElementById("menu");
        menu.style.visibility="visible";
        menu.style.display = "block";
        menu.style.left = (event.pageX - (-1))+"px";
        menu.style.top = (event.pageY - (-1))+"px";
        console.log(event.pageX)
    },false);
    notepad.addEventListener("click",function(event){
        var menu = document.getElementById("menu");
        menu.style.visibility="hidden";
        menu.style.display = "";
        menu.style.left = "";
        menu.style.top = "";
    },false);    
}

