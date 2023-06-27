let cornerAlphabet = "ABDEFGHIKLNOPQRSTUVWX".split("") // removed C, J, M
let edgeAlphabet = "ABDEFGHJKLMNOPQRSTUVWX".split("") // removed C, I
let title = document.getElementById("title")
let button = document.getElementById("button")
let letterPair = document.getElementById("letterPair")

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

if (title.innerHTML == "Edges") {
    generateLetterPair(edgeAlphabet)
    button.addEventListener("click", function() { generateLetterPair(edgeAlphabet)})
}
else {
    generateLetterPair(cornerAlphabet)
    button.addEventListener("click", function() { generateLetterPair(cornerAlphabet)})
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