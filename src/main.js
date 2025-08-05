const chessBoard = document.getElementById("chessBoard");

const initialBoard = [
    bR, bKn, bB, bQ, bK, bB, bKn, bR,
    bP, bP, bP, bP, bP, bP, bP, bP, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    wP, wP, wP, wP, wP, wP, wP, wP, 
    wR, wKn, wB, wQ, wK, wB, wKn, wR,
];

function initializeBoard() {
    var row = 1;
    var col = 1;
    initialBoard.forEach((piece, i) => {
        const isWhite = (row + col) % 2 === 0;

        const square = document.createElement("div")
        square.setAttribute("id", i)
        if(isWhite){
            square.setAttribute("class", "square white")
        }
        else{
            square.setAttribute("class", "square black")
        }
        square.innerHTML = piece
        square.firstChild?.setAttribute('draggable', true)
        chessBoard.appendChild(square)
        
        row++
        if(row > 8) {
            row = 1
            col++
        }
    })
};

initializeBoard();
document.addEventListener("dragstart", (e) => {
  if (!e.target.classList.contains("piece")) {
    e.preventDefault(); //Block unintended drag
  }
});

const squares = document.querySelectorAll(".square");
const pieces = document.querySelectorAll(".piece")
let selectedPiece = null;
let startPositionId = null;

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

    const containsPiece = e.target.classList.contains('piece')
    if(containsPiece) {
        e.target.parentNode.append(selectedPiece)
        e.target.remove()
    }
    else {
        e.target.append(selectedPiece)
    }

    console.log("dragDrop: ", e.target)
    selectedPiece = null;
}





