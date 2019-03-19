import setup from './setup'
import board from './board';
import Piece from './pieces/Piece';

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
    console.log(piece.findLegalMoves());
    for (let posmov of piece.findLegalMoves()) {
        document.getElementById(posmov).className += 'possibleMove';
    }
}

let pieceElement = false;

chessBoard.addEventListener('click', (e) =>{
    let squareCords = getCord(e);
    //console.log(squareCords);

    if(pieceElement){ //jeśli bierek zaznaczony
        if ((squareCords[0] == pieceElement.x) && (squareCords[1] == pieceElement.y)) {
            console.log('To samo pole');
        } else {
            console.log('Ruszam');
        }

    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]]) { // jesli na polu bierek
            console.log('zaznaczam bierka')
            pieceElement = board[squareCords[0]][squareCords[1]];
        } else { //jesli na polu brak bierka
            console.log('na tym polu nie ma bierka')
            return;
        }
    }
});

window.onload = setup

