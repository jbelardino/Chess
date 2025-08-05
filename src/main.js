const squares = document.querySelectorAll(".square");
const pieces = document.querySelectorAll(".piece");
const playerDisplay = document.getElementById("playerDisplay");

let player = "white";
let selectedPiece = null;
let startPositionId = null;

playerDisplay.innerHTML = player;

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

    if(selectedPiece.classList.contains(player)){
        const containsPiece = e.target.classList.contains('piece');

        if(containsPiece) {
            e.target.parentNode.append(selectedPiece)
            e.target.remove()
        }
        else {
            e.target.append(selectedPiece)
        }

        console.log("dragDrop: ", e.target);
        selectedPiece = null;
        changePlayer();
    }
}

function changePlayer(){
    if(player === "white"){
        player = "black";
    }
    else{
        player = "white";
    }
    playerDisplay.innerHTML = player;
};