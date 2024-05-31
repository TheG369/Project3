function mostrarSabores() {
    
    const sabores = ["chocolate", "Fresa", "Vainilla"]
    let sabor = document.querySelector("#nameSabor")
    sabor.innerHTML = sabores[Math.floor(Math.random() * sabores.length) ]

    console.log("Es tu sabor")

}

mostrarSabores()