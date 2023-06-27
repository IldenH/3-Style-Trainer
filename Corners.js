let cornerAlphabet = "ABDEFGHIKLNOPQRSTUVWX".split("") // removed C, J, M
let button = document.getElementById("Button")
let letterPair = document.getElementById("LetterPair")

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

button.addEventListener("click", generateCornerLetterPair)
generateCornerLetterPair()

function generateCornerLetterPair() {
    let letter1 = cornerAlphabet[randomInt(cornerAlphabet.length)]
    let letter2 = cornerAlphabet[randomInt(cornerAlphabet.length)]
    while (letter1 == letter2) {
        letter1 = cornerAlphabet[randomInt(cornerAlphabet.length)]
        letter2 = cornerAlphabet[randomInt(cornerAlphabet.length)]
    }
    
    letterPair.innerHTML = letter1 + letter2
}