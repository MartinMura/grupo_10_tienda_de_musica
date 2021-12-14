let form = document.querySelector("form.product-edit");
form.addEventListener("submit", function(e){
    
    let name = document.querySelector("input.product-name");
    let description = document.querySelector("#description");
    let image = document.querySelector("input#product-image");
    
    let errores = []

    if (name.value == "") {
        errores.push("El campo nombre del producto debe estar completo");
    } else if (name.value.length < 5){
        errores.push("El campo nombre del producto debe tener al menos 5 caracteres")
    };

    if (description.value < 20) {
        errores.push("La descripción debe contener al menos 20 caracteres")
    }

    /* let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(image.value)){
        errores.push("Las extensiones permitidas son .jpg,.jpeg, .png, .gif")
    } */

    if(errores.length > 0 ){
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores ul");
        for(let i = 0; i < errores.length; i++){

            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }

    console.log(image);
})