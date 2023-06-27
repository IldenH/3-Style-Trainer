const cornerAlphabet = "ABDEFGHIKLNOPQRSTUVWX".split("") // removed C, J, M
const edgeAlphabet = "ABDEFGHJKLMNOPQRSTUVWX".split("") // removed C, I
let button = document.getElementById("button")
let letterPair = document.getElementById("letterPair")

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function generateLetterPair(alphabet) {
    let letter1 = alphabet[randomInt(alphabet.length)]
    let letter2 = alphabet[randomInt(alphabet.length)]
    while (letter1 == letter2) {
        letter1 = alphabet[randomInt(alphabet.length)]
        letter2 = alphabet[randomInt(alphabet.length)]
    }
    
    letterPair.innerHTML = letter1 + letter2
}