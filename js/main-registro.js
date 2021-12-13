let formulario = document.forms[0];
let correoelec = document.querySelector("#v127_278");
let contrasena1 = document.querySelector("#v127_274");
let contrasena2 = document.querySelector("#v127_271");
let emaill = new RegExp("[@]");
let mayusculas = new RegExp("[A-Z]");
let passMinus = new RegExp("[a-z]");


for (let i = 0; i < formulario.length; i++) {
    let input = formulario[i];
    console.log(input);
    input.onblur = function () {
        if (input == correoelec){
            if (emaill.test(correoelec.value)==false ){
                input.classList.add("incorrecto");
                
            }else{
                input.classList.remove("incorrecto")
                input.classList.add("correcto");
            }
        }
        if (input == contrasena1){
            if (contrasena1.value.length < 4){
                input.classList.add("incorrecto");
                
            }
            if (mayusculas.test(contrasena1.value) == false){
                input.classList.add("incorrecto");
                
            }
            if (minusculas.test(contrasena1.value) == false){
                input.classList.add("incorrecto");
                
            }else{
                input.classList.remove("incorrecto");
                input.classList.add("correcto");
            }
        }
        if (input == contrasena2){
            if (contrasena1.value != contrasena2.value){
                input.classList.add("incorrecto");
                
            }else{
                input.classList.remove("incorrecto");
                input.classList.add("correcto");
            }
        }
    }
    input.onfocus = function(){
        if(input.classList.contains("incorrecto")){
            input.classList.remove("incorrecto");
        }
    }
}   