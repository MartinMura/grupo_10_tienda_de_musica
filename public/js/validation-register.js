let form = document.querySelector("form.register");


form.addEventListener("submit", function(e){
    e.preventDefault();
    let errores = [];
    let nombre = document.querySelector("input.name");
    let apellido = document.querySelector("input.last-name");
    let email = document.querySelector("input.email");
    let password = document.querySelector("input.password");
    let image = document.querySelector("input.image");

    if (nombre.value == "") {
        errores.push("El campo nombre debe estar completo");
    } else if (nombre.value.length < 2){
        errores.push("El campo nombre debe tener al menos 2 caracteres")
    };

    if (apellido.value == ""){
        errores.push("El campo apellido debe estar completo");
    } else if (apellido.value.length < 2 ) {
        errores.push("El campo apellido debe tener al menos 2 caracteres")
    };

    if(email.value == ""){
        errores.push("El campo email debe estar completo")
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        errores.push("Debe ser un formato de email válido")
    };

    if(password.value == ""){
        errores.push("Tiene que completar con una contraseña")
    } else if (password.value.length < 8){
        errores.push("Tiene que contener al menos 8 caracteres")
    }; 

    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(image.value)){
        errores.push("Las extensiones permitidas son .jpg,.jpeg, .png, .gif")
    }
    

    if(errores.length > 0 ){
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores ul");
        for(let i = 0; i < errores.length; i++){

            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }
    console.log(image.value);
});

