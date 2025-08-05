const squares = document.querySelectorAll(".square");
const pieces = document.querySelectorAll(".piece");
const playerDisplay = document.getElementById("playerDisplay");
const width = 8;

let player = "black";
let boardReversed = false
let selectedPiece = null;
let startPositionId = null;

changePlayer()

//Block unintended drag
document.addEventListener("dragstart", (e) => {
  if (!e.target.classList.contains("piece")) {
    e.preventDefault(); 
  }
});


pieces.forEach((piece) => {
    piece.addEventListener('dragstart', dragStart)
    // piece.addEventListener('dragover', dragOver)
    // piece.addEventListener('drop', dragDrop)
})
    
squares.forEach((square) => {
    //square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

function dragStart(e) {
    console.log("dragStart: ", e.target)
    selectedPiece = e.target
    startPositionId = e.target.parentNode.getAttribute('id')
    
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e) {
    e.stopPropagation()

    if(moveIsValid(e)){
        let containsPiece = e.target.classList.contains('piece');
        if(containsPiece) {
            e.target.parentNode.append(selectedPiece)
            e.target.remove()
        }
        else {
            e.target.append(selectedPiece)
        }
        changePlayer();
    }
    selectedPiece = null;
}

function changePlayer(){
    if(player === "white"){
        player = "black";
    }
    else if (player === "black") {
        player = "white";
    }
    playerDisplay.innerHTML = player;
    flipBoard()
};

function flipBoard() {
    const allSquares = document.querySelectorAll(".square")
    if(!boardReversed){
        allSquares.forEach((square, i) => {
            square.setAttribute('id', width * width - 1 - i)
        })
        boardReversed = true;
    }
    else {
        allSquares.forEach((square, i) => {
            square.setAttribute('id', i)
        })
        boardReversed = false;
    }
}