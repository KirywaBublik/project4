const board = document.querySelector("#board")

const colors = ["#c74c3c", "#8e44ad", "#e67e22", "#2ecc71", "#3498eb"]

const SQUARE_NUMBER = 500

for(let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () =>{
        setColor(square)
    })

    square.addEventListener("mouseleave", () =>{
        removeColor(square)
    })

    board.append(square)
}

function setColor(element){
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}