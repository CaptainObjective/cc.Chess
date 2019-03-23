import setup from './setup'
import board from './board';
import Pawn from './pieces/pawn';
import knightWhite from './board';
import kingBlack from './board';

//checkWinner();
const chessBoard = document.getElementById('board');

const changePlayer = {
    _turn: ['white', 'black'],
    get turn() {
        return this._turn[0];
    },

    flip() {
        this._turn.reverse();
    }
}

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

const addSelection = (cord) => {
    document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className += ' selected';
}

const remSelection = (cord) => {
    document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className = document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className.replace('selected', '');
}

const clearMoves = (cord) => {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            document.getElementById(`${x},${y}`).className = document.getElementById(`${x},${y}`).className.replace(`possibleMove`, '');
        }
    }
}

let pieceElement = false;

chessBoard.addEventListener('click', (e) => {
    let squareCords = getCord(e);

    if (pieceElement) { //jeśli bierek zaznaczony
        if ((squareCords[0] == pieceElement.x) && (squareCords[1] == pieceElement.y)) {
            console.log('To samo pole');
            clearMoves(squareCords);
            remSelection([pieceElement.x, pieceElement.y]);
        } else {
            console.log(squareCords.toString());
            console.log(pieceElement.findLegalMoves())
            if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
                moved(squareCords);
                changePlayer.flip();
                console.log('Ruszam');
              
                if (pieceElement instanceof Pawn && (squareCords[0] == "0" || squareCords[0] == "7")) {
                    //jeśli można dokonać promocji pionka
                    pieceElement.promote(squareCords, pieceElement.side);
                }

            } else {
                console.log('Nie Ruszam');
                clearMoves(squareCords);
                remSelection([pieceElement.x, pieceElement.y]);
            }
        }
    pieceElement = false;
    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]] && board[squareCords[0]][squareCords[1]].side == changePlayer.turn) { // jesli na polu bierek i kolor odpowiada kolorowi rundy
            console.log('zaznaczam bierka')
            // touched(squareCords);
            pieceElement = board[squareCords[0]][squareCords[1]];

            addSelection([pieceElement.x,pieceElement.y]);

            if(!possibleMoves()){
                remSelection([pieceElement.x, pieceElement.y]);
                pieceElement = false;
            }
        } else { //jesli na polu brak bierka
            console.log('na tym polu nie ma bierka')
            return;
        }
    }
});

window.onload = setup;

