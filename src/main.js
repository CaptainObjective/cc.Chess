import setup from './setup';
import board from './board';
import King from './pieces/king';

//checkWinner();

//changePlayer(); to wszystko na później

const chessBoard = document.getElementById('board');

const getCord = (e) => {
    if (e.target.localName === 'div') {
        return [e.target.id[0], e.target.id[2]]
    } else {
        return [e.target.parentNode.id[0], e.target.parentNode.id[2]];
    }
}

const possibleMoves = () => {
    //console.log('LEGITNE: '+ pieceElement.findLegalMoves());
    for (let posmov of pieceElement.findLegalMoves()) {
        document.getElementById(posmov).className += ' possibleMove';
    }
    return pieceElement.findLegalMoves() == '' ? false : true;
}
const moved = (cord) => {
    pieceElement.move(cord)
    clearMoves(cord);
}

const clearMoves = (cord) => {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            document.getElementById(`${x},${y}`).className = document.getElementById(`${x},${y}`).className.replace(`possibleMove`, '');
        }
    }
}

let whiteDoCastling = false;
let blackDoCastling = false;

const whiteCastling = () => {
    if (board[7][6] && board[7][6].constructor == King && board[7][6].firstMove) {
        board[7][7].move([`7`, `5`]);
        whiteDoCastling = true
    } else if (board[7][2] && board[7][2].constructor == King && board[7][2].firstMove) {
        board[7][0].move([`7`, `3`]);
        whiteDoCastling = true
    }
}

const blackCastling = () => {
    if (board[0][6] && board[0][6].constructor == King && board[0][6].firstMove) {
        board[0][7].move([`0`, `5`]);
        blackDoCastling = true;
    } else if (board[0][2] && board[0][2].constructor == King && board[0][2].firstMove) {
        board[0][0].move([`0`, `3`]);
        blackDoCastling = true;
    }
}

let pieceElement = false;

chessBoard.addEventListener('click', (e) => {
    let squareCords = getCord(e);
    if (pieceElement) { //jeśli bierek zaznaczony
        if ((squareCords[0] == pieceElement.x) && (squareCords[1] == pieceElement.y)) {
            console.log('To samo pole');
            clearMoves(squareCords);
        } else {
            console.log(squareCords.toString());
            console.log(pieceElement.findLegalMoves())
            if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
                moved(squareCords);
                console.log('Ruszam');
                if (!whiteDoCastling) {
                    whiteCastling();
                }
                if (!blackDoCastling) {
                    blackCastling();
                }
            } else {
                console.log('Nie Ruszam');
                clearMoves(squareCords);
            }
        }
        pieceElement = false;
    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]]) { // jesli na polu bierek
            console.log('zaznaczam bierka')
            // touched(squareCords);
            pieceElement = board[squareCords[0]][squareCords[1]];
            if (!possibleMoves()) {
                pieceElement = false;
            }
        } else { //jesli na polu brak bierka
            console.log('na tym polu nie ma bierka')
            return;
        }
    }
});

window.onload = setup