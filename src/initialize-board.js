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
        square.setAttribute("id", i);
        if(isWhite){
            square.setAttribute("class", "square light");
        }
        else{
            square.setAttribute("class", "square dark");
        }
        square.innerHTML = piece;
        square.firstChild?.setAttribute('draggable', true);
        chessBoard.appendChild(square);
        
        row++;
        if(row > 8) {
            row = 1;
            col++;
        };
    });
};

initializeBoard();