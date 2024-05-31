function mostrarSabores() {
    
    const sabores = ["chocolate", "Fresa", "Vainilla"]
    let sabor = document.querySelector("#nameSabor")
    sabor.innerHTML = sabores[Math.floor(Math.random() * sabores.length) ]


    const greetingday = ["Holi Crayoli", "Hi", "Hola que tal"]
    let greetingDis = document.querySelector("#greeting")
    greetingDis.innerHTML = greetingday[Math.floor(Math.random() * greetingday.length) ]


    console.log("Es tu sabor")

}

mostrarSabores()