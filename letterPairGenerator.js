let button = document.getElementById("button")
let letterPair = document.getElementById("letterPair")

const cornerPieces = [
["A", "E", "R"], 
["B", "N", "Q"],
["D", "F", "I"],
["X", "H", "S"],
["U", "G", "L"],
["V", "K", "P"],
["W", "O", "T"],]

const edgePieces = [
["A", "Q"],
["B", "M"],
["D", "E"],
["R", "H"],
["T", "N"],
["F", "L"],
["J", "P"],
["X", "G"],
["U", "K"],
["V", "O"],
["W", "S"],]

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function generateLetterPair(piece) {
    let letter1 = piece[randomInt(piece.length)][randomInt(piece[0].length)]
    let letter2 = piece[randomInt(piece.length)][randomInt(piece[0].length)]
    while (letter1 == letter2) {
        letter1 = piece[randomInt(piece.length)][randomInt(piece[0].length)]
        letter2 = piece[randomInt(piece.length)][randomInt(piece[0].length)]
    }

    letterPair.textContent = letter1 + letter2
}