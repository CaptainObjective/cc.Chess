import setup from './setup'
import { engine } from './settings'
import board from './board';

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
    console.log(cord);
    engine && (pieceElement.side == engine.side && engine.getMove([pieceElement.x, pieceElement.y], cord));

    pieceElement.move(cord)
    clearMoves(cord);
}
const engineMoved = ([from, to]) => {
    // console.log(from);
    // console.log(to);
    const pieceMoved = board[parseInt(from[0])][parseInt(from[2])];
    // console.log(pieceMoved)
    pieceMoved.move([to[0], to[2]]);
    //zmiana tury

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
        } else {
            // console.log(squareCords.toString());
            // console.log(pieceElement.findLegalMoves())
            if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
                moved(squareCords);
                console.log('Ruszam');
            } else {
                console.log('Nie Ruszam');
                clearMoves(squareCords);
            }
        }
        pieceElement = false;
    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]]) { // jesli na polu bierek
            console.log('zaznaczam bierka')
            console.log(squareCords);
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

export { engineMoved };

