let edgeAlphabet = "ABDEFGHJKLMNOPQRSTUVWX".split("") // removed C, I
let button = document.getElementById("Button")
let letterPair = document.getElementById("LetterPair")

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

button.addEventListener("click", generateEdgeLetterPair)
generateEdgeLetterPair()

function generateEdgeLetterPair() {
    let letter1 = edgeAlphabet[randomInt(edgeAlphabet.length)]
    let letter2 = edgeAlphabet[randomInt(edgeAlphabet.length)]
    while (letter1 == letter2) {
        letter1 = edgeAlphabet[randomInt(edgeAlphabet.length)]
        letter2 = edgeAlphabet[randomInt(edgeAlphabet.length)]
    }
    
    letterPair.innerHTML = letter1 + letter2
}