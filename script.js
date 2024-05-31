function mostrarSabores() {
    
    const sabores = ["chocolate", "Fresa", "Vainilla"]
    let sabor = document.querySelector("#nameSabor")
    sabor.innerHTML = sabores[Math.floor(Math.random() * sabores.length) ]


    const greetingday = ["Holi Crayoli", "Hi", "Hola que tal"]
    let greetingDis = document.querySelector("#greeting")
    greetingDis.innerHTML = greetingday[Math.floor(Math.random() * greetingday.length) ]

    giveEmoji()

    console.log("funcion")

}

function giveEmoji (){
    const emoji = ["😎", "👽", "👌"]
    let greetingDis = document.querySelector("#emojis")
    greetingDis.innerHTML = emoji[Math.floor(Math.random() * emoji.length)]
}

mostrarSabores()