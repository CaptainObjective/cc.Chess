import setup from './setup'
import board from './board';
import touched from './touched'
// import Piece from './pieces/Piece';

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

const possibleMoves = (piece) => {
    // console.log(piece.findLegalMoves());
    for (let posmov of piece.findLegalMoves()) {
        document.getElementById(posmov).className += ' possibleMove';
    }
}
const moved = (piece, cord) => {
    piece.move(cord)
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
            return;
        } else {
            console.log(squareCords.toString());
            console.log(pieceElement.findLegalMoves())
            if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
                moved(pieceElement, squareCords);
                pieceElement = false;
                console.log('Ruszam');
            } else {
                console.log('Nie Ruszam');
                return;
            }
        }
    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]]) { // jesli na polu bierek
            console.log('zaznaczam bierka')
            // touched(squareCords);
            pieceElement = board[squareCords[0]][squareCords[1]];
            possibleMoves(pieceElement);
        } else { //jesli na polu brak bierka
            console.log('na tym polu nie ma bierka')
            return;
        }
    }
});

window.onload = setup

