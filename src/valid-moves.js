function moveIsValid(e){
    console.log(e.target)

    if(!selectedPiece.classList.contains(player)){
        return false;
    }

    let startId = Number(selectedPiece.parentNode.getAttribute('id'));
    
    let targetId;
    let targetContainsPiece = e.target.classList.contains('piece')
    let targetContainsEnemy = false;

    if(targetContainsPiece) {
        targetId = Number(e.target.parentNode.getAttribute('id'));
        if(!e.target.classList.contains(player)){
            targetContainsEnemy = true
        }
    }
    else {
        targetId = Number(e.target.getAttribute('id'));
    }
    console.log("startId", startId)
    console.log("targetId", targetId)
    

    if(selectedPiece.classList.contains('Pawn')){
        const startingRow = [8,9,10,11,12,13,14,15];
        if(startingRow.includes(startId) && targetId === startId + (width * 2)){
            if(document.getElementById(startId + (width * 2)).firstChild || document.getElementById(startId + width).firstChild){
                return false;
            }
            return true;
        }
        else if(targetId === startId + width && !targetContainsPiece){
            return true;
        }
        else if((targetId === startId + width + 1 || targetId === startId + width - 1) && targetContainsEnemy){
            return true;
        }
        return false;
    }

    if(selectedPiece.classList.contains('Knight')){
        if(targetId === startId + (width * 2) + 1 || targetId === startId + (width * 2) - 1 ||
            targetId === startId + width + 2 || targetId === startId + width - 2 ||
            targetId === startId - width + 2 || targetId === startId - width  - 2 ||
            targetId === startId - (width * 2) + 1 || targetId === startId - (width * 2) - 1){
            if(targetContainsPiece && !targetContainsEnemy){
                return false
            }
            return true;
        }
        return false;
    }

    if(selectedPiece.classList.contains('Bishop')) {
        if(targetId === startId + width + 1){
            let d1 = document.getElementById(startId + width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + width - 1){
            let d1 = document.getElementById(startId + width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width + 1){
            let d1 = document.getElementById(startId - width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width - 1){
            let d1 = document.getElementById(startId - width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 2) + 2){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 2) - 2){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 2) + 2){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 2) - 2){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 3) + 3){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 3) - 3){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 3) + 3){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 3) - 3){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 4) + 4){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 4) - 4){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 4) + 4){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 4) - 4){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 5) + 5){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 5) - 5){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 5) + 5){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 5) - 5){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 6) + 6){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 6) - 6){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 6) + 6){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 6) - 6){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 7) + 7){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) + 6).firstChild
            let d7 = document.getElementById(startId + (width * 7) + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 7) - 7){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) - 6).firstChild
            let d7 = document.getElementById(startId + (width * 7) - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 7) + 7){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) + 6).firstChild
            let d7 = document.getElementById(startId - (width * 7) + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 7) - 7){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) - 6).firstChild
            let d7 = document.getElementById(startId - (width * 7) - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        return false;
    }
    if(selectedPiece.classList.contains('Rook')) {
        if(targetId === startId + width){
            let d1 = document.getElementById(startId + width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width){
            let d1 = document.getElementById(startId - width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 1){
            let d1 = document.getElementById(startId + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 1){
            let d1 = document.getElementById(startId - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 2)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 2)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 2){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 2){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 3)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 3)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 3){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 3){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 4)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 4)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 4){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 4){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 5)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 5)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 5){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 5){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 6)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            let d6 = document.getElementById(startId + (width * 6)).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 6)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            let d6 = document.getElementById(startId - (width * 6)).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 6){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            let d6 = document.getElementById(startId + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 6){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            let d6 = document.getElementById(startId - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 7)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            let d6 = document.getElementById(startId + (width * 6)).firstChild
            let d7 = document.getElementById(startId + (width * 7)).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 7)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            let d6 = document.getElementById(startId - (width * 6)).firstChild
            let d7 = document.getElementById(startId - (width * 7)).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 7){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            let d6 = document.getElementById(startId + 6).firstChild
            let d7 = document.getElementById(startId + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 7){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            let d6 = document.getElementById(startId - 6).firstChild
            let d7 = document.getElementById(startId - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        return false
    }

    if(selectedPiece.classList.contains('Queen')) {
        if(targetId === startId + width + 1){
            let d1 = document.getElementById(startId + width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + width - 1){
            let d1 = document.getElementById(startId + width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width + 1){
            let d1 = document.getElementById(startId - width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width - 1){
            let d1 = document.getElementById(startId - width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 2) + 2){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 2) - 2){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 2) + 2){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 2) - 2){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 3) + 3){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 3) - 3){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 3) + 3){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 3) - 3){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 4) + 4){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 4) - 4){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 4) + 4){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 4) - 4){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 5) + 5){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 5) - 5){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 5) + 5){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 5) - 5){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 6) + 6){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 6) - 6){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 6) + 6){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 6) - 6){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 7) + 7){
            let d1 = document.getElementById(startId + width + 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) + 6).firstChild
            let d7 = document.getElementById(startId + (width * 7) + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId + (width * 7) - 7){
            let d1 = document.getElementById(startId + width - 1).firstChild
            let d2 = document.getElementById(startId + (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId + (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId + (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId + (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId + (width * 6) - 6).firstChild
            let d7 = document.getElementById(startId + (width * 7) - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 7) + 7){
            let d1 = document.getElementById(startId - width + 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) + 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) + 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) + 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) + 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) + 6).firstChild
            let d7 = document.getElementById(startId - (width * 7) + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        else if(targetId === startId - (width * 7) - 7){
            let d1 = document.getElementById(startId - width - 1).firstChild
            let d2 = document.getElementById(startId - (width * 2) - 2).firstChild
            let d3 = document.getElementById(startId - (width * 3) - 3).firstChild
            let d4 = document.getElementById(startId - (width * 4) - 4).firstChild
            let d5 = document.getElementById(startId - (width * 5) - 5).firstChild
            let d6 = document.getElementById(startId - (width * 6) - 6).firstChild
            let d7 = document.getElementById(startId - (width * 7) - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + width){
            let d1 = document.getElementById(startId + width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width){
            let d1 = document.getElementById(startId - width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 1){
            let d1 = document.getElementById(startId + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 1){
            let d1 = document.getElementById(startId - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 2)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 2)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 2){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 2){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            if(d1){
                return false
            }
            if(d2 && d2.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 3)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 3)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 3){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 3){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            if(d1 || d2){
                return false
            }
            if(d3 && d3.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 4)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 4)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 4){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 4){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            if(d1 || d2 || d3){
                return false
            }
            if(d4 && d4.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 5)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 5)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 5){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 5){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            if(d1 || d2 || d3 || d4){
                return false
            }
            if(d5 && d5.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 6)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            let d6 = document.getElementById(startId + (width * 6)).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 6)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            let d6 = document.getElementById(startId - (width * 6)).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 6){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            let d6 = document.getElementById(startId + 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 6){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            let d6 = document.getElementById(startId - 6).firstChild
            if(d1 || d2 || d3 || d4 || d5){
                return false
            }
            if(d6 && d6.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + (width * 7)){
            let d1 = document.getElementById(startId + width).firstChild
            let d2 = document.getElementById(startId + (width * 2)).firstChild
            let d3 = document.getElementById(startId + (width * 3)).firstChild
            let d4 = document.getElementById(startId + (width * 4)).firstChild
            let d5 = document.getElementById(startId + (width * 5)).firstChild
            let d6 = document.getElementById(startId + (width * 6)).firstChild
            let d7 = document.getElementById(startId + (width * 7)).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - (width * 7)){
            let d1 = document.getElementById(startId - width).firstChild
            let d2 = document.getElementById(startId - (width * 2)).firstChild
            let d3 = document.getElementById(startId - (width * 3)).firstChild
            let d4 = document.getElementById(startId - (width * 4)).firstChild
            let d5 = document.getElementById(startId - (width * 5)).firstChild
            let d6 = document.getElementById(startId - (width * 6)).firstChild
            let d7 = document.getElementById(startId - (width * 7)).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 7){
            let d1 = document.getElementById(startId + 1).firstChild
            let d2 = document.getElementById(startId + 2).firstChild
            let d3 = document.getElementById(startId + 3).firstChild
            let d4 = document.getElementById(startId + 4).firstChild
            let d5 = document.getElementById(startId + 5).firstChild
            let d6 = document.getElementById(startId + 6).firstChild
            let d7 = document.getElementById(startId + 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 7){
            let d1 = document.getElementById(startId - 1).firstChild
            let d2 = document.getElementById(startId - 2).firstChild
            let d3 = document.getElementById(startId - 3).firstChild
            let d4 = document.getElementById(startId - 4).firstChild
            let d5 = document.getElementById(startId - 5).firstChild
            let d6 = document.getElementById(startId - 6).firstChild
            let d7 = document.getElementById(startId - 7).firstChild
            if(d1 || d2 || d3 || d4 || d5 || d6){
                return false
            }
            if(d7 && d7.classList.contains(player)){
                return false
            }
            return true
        }
        return false
    }

    if(selectedPiece.classList.contains('King')) {
        if(targetId === startId + width){
            let d1 = document.getElementById(startId + width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + width + 1){
            let d1 = document.getElementById(startId + width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + 1){
            let d1 = document.getElementById(startId + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width + 1){
            let d1 = document.getElementById(startId - width + 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width){
            let d1 = document.getElementById(startId - width).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - width - 1){
            let d1 = document.getElementById(startId - width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId - 1){
            let d1 = document.getElementById(startId - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        if(targetId === startId + width - 1){
            let d1 = document.getElementById(startId + width - 1).firstChild
            if(d1 && d1.classList.contains(player)){
                return false
            }
            return true
        }
        return false
    }
    return false;
}