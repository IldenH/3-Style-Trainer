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
    pieces = piece.slice()
    randomPiece1 = randomInt(pieces.length)
    let letter1 = pieces[randomPiece1][randomInt(pieces[0].length)]
    pieces.splice(randomPiece1, 1)
    let letter2 = pieces[randomInt(pieces.length)][randomInt(pieces[0].length)]

    letterPair.textContent = letter1 + letter2
}