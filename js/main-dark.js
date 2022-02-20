function littleDarkAge(){
    let menu = document.getElementById("elmenu"); 
    if(document.getElementById("dragons")){
        document.getElementById("dragons").id = "dark-dragons";
        menu.className += " dark"
        document.getElementById("borde").src="img/imagen-principal-borde/Dark-FooterImg.png";
        return;
        
    }
    if(document.getElementById("escudo")){
        document.getElementById("escudo").id = "dark-escudo";
        menu.className += " dark"
        document.getElementById("borde").src="img/imagen-principal-borde/Dark-FooterImg.png";
        return;
    }
    if(document.getElementById("dark-dragons")){
        document.getElementById("dark-dragons").id = "dragons";
        menu.className = "menu"
        document.getElementById("borde").src="img/imagen-principal-borde/FooterImg.png";
        return;
    }
    if(document.getElementById("dark-escudo")){
        document.getElementById("dark-escudo").id = "escudo";
        menu.className = "menu"
        document.getElementById("borde").src="img/imagen-principal-borde/FooterImg.png";
        return;
    }   
}
