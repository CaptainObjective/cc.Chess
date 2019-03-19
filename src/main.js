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

const possibleMoves = (piece, addOrRemove = true) => {
    console.log(piece.findLegalMoves());
    for (let posmov of piece.findLegalMoves()) {
        if(addOrRemove){
            document.getElementById(posmov).className += 'possibleMove'
        } else {
            document.getElementById(posmov).className = document.getElementById(posmov).className.replace(`possibleMove`, '');
        }
    }   
}

const isValidMove = (piece, cords) =>{
    return piece.findLegalMoves().some(ele =>{
        return ele == `${cords[0]},${cords[1]}`;
    }); 
}

let pieceElement = false;

chessBoard.addEventListener('click', (e) =>{
    let squareCords = getCord(e);

    if(pieceElement){ //jeśli bierek zaznaczony

        //jeśli kliknięto to samo pole, na którym stoi bierek to nie pokazuj mozliwosci ruchu i odznacz go
        if ((squareCords[0] == pieceElement.x) && (squareCords[1] == pieceElement.y)) {
            possibleMoves(pieceElement, false);
        } else { //jesli kliknięto inne pole niż to na którym stoi bierek to sprawdź czy moze się ruszyć i rusz a potem odznacz
            if(isValidMove(pieceElement, squareCords)){
                possibleMoves(pieceElement, false);
                pieceElement.move(`${squareCords[0]},${squareCords[1]}`);
            } else {
                possibleMoves(pieceElement, false);
            }
        }
        pieceElement = false; //odznacza pionka

    } else { // jesli bierek niezaznaczony
        if (board[squareCords[0]][squareCords[1]]) { // jesli na polu bierek to go zaznacza i pokazuje mozliwe ruchy
            pieceElement = board[squareCords[0]][squareCords[1]];
            possibleMoves(pieceElement);
        } else { //jesli na polu brak bierka to nic nie rób
            return;
        }
    }
});

window.onload = setup

