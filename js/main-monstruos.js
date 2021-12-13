function cambiar(id){
    id = id.replace(" ocultar1", "");
    var m = document.getElementById(id);
    let i = id+"-icon";
    let span = document.getElementById(i);
    if (m.checked == true){
        m.checked = false;
        span.classList.remove("checked");
    }
    else{
        m.checked = true;
        span.classList.add("checked");
    }
}

var buscador = document.querySelector(".buscador");
var elementos = document.querySelectorAll("li");
function clicker (event){
    var x = event.currentTarget;
    let classid = x.className;
    cambiar(classid);
}

function click_mas1 (event){
    var x = event.currentTarget;
    let idd = x.id;
    mas_contenido1(idd);
}

function click_mas2 (event){
    var x = event.currentTarget;
    let idd = x.id;
    mas_contenido2(idd);
}

function mas_contenido1(id){
    var checks = document.getElementsByClassName("ocultar1");
    for(var i=0; i<checks.length; i++) {
        if(checks[i].style.display=== "none"){
            checks[i].style.display="block";
        }else{
            checks[i].style.display="none";
        }
    }
}

function mas_contenido2(id){
    var checks = document.getElementsByClassName("ocultar2");
    for(var i=0; i<checks.length; i++) {
        if(checks[i].style.display=== "none"){
            checks[i].style.display="block";
        }else{
            checks[i].style.display="none";
        }
    }
}

