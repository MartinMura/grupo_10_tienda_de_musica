

let form = document.querySelector("form.login");
console.log(form);
form.addEventListener("submit", function(e){
    /* e.preventDefault(); */
    let email = document.querySelector("input.email");
    let password = document.querySelector("input.password");
    let errores = [];

    if (email.value == "") {
        errores.push("Debe ingresar un mail")
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        errores.push("Debe ser un formato de email válido")
    };
    
    

    if(password.value == ""){
        errores.push("El campo contraseña es obligatorio")
    }

    



    if(errores.length > 0 ){
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML = "";
        for(let i = 0; i < errores.length; i++){

            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }

})