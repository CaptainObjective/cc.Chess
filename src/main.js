import { engine } from './settings'
import board, { kingWhite, kingBlack, walkThroughTheBoard } from './board';
import Pawn from './pieces/pawn';
import King from './pieces/king';
import setup from './setup';


const chessBoard = document.getElementById('board');

const changePlayer = {
    _turn: ['white', 'black'],
    //_turn: ['black', 'white'],
    get turn() {
        return this._turn[0];
    },

    flip() {
        this._turn.reverse();
    }
}

const checkWinner = () => {
    let helMoves = [];
    if(changePlayer.turn =='white'){ //sprawdza po wykananiu ruchu przez bialego
        walkThroughTheBoard((box) => {
            if(!!box && box.side == 'black'){
                box.safetyMove().length == 0 ? helMoves.push(true) : helMoves.push(false);
            }
        })
        if (helMoves.every(el => {return el == true;})){
            //tutaj akcje jeśli mat
            console.log('KONIEC GRY! BIALE WYGRYWAJA.')
        }
    } else { //sprawdza po wykonaniu ruchu przez czarnego
            walkThroughTheBoard((box) => {
                if (!!box && box.side == 'white') {
                    box.safetyMove().length == 0 ? helMoves.push(true) : helMoves.push(false);
                }
            })
            if (helMoves.every(el => {
                    return el == true;
                })) {
                //tutaj akcje jeśli mat
                console.log('KONIEC GRY! CZARNE WYGRYWAJA.')
            }
    }
};

const getCord = (e) => {
        if (e.target.localName === 'div') {
            return [e.target.id[0], e.target.id[2]]
        } else {
            return [e.target.parentNode.id[0], e.target.parentNode.id[2]];
        }
}

const possibleMoves = () => {
    //console.log('LEGITNE: '+ pieceElement.findLegalMoves());
    let validMoves = pieceElement.safetyMove();
    for (let posmov of validMoves) {
        document.getElementById(posmov).className += ' possibleMove';
    }
    return validMoves == '' ? false : true;
}
const moved = (cord) => {
    //console.log(cord);
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
    changePlayer.flip();
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
            //console.log('To samo pole');
            clearMoves(squareCords);
            remSelection([pieceElement.x, pieceElement.y]);
        } else {
            // console.log(squareCords.toString());
            // console.log(pieceElement.findLegalMoves())
            if (pieceElement.safetyMove().includes(squareCords.toString())) {
                moved(squareCords);
                
                //console.log('Ruszam');
                if (!whiteDoCastling) {
                    whiteCastling();
                }
                if (!blackDoCastling) {
                    blackCastling();
                }

                if (pieceElement instanceof Pawn && (squareCords[0] == "0" || squareCords[0] == "7")) {
                    //jeśli można dokonać promocji pionka
                    pieceElement.promote(squareCords, pieceElement.side);
                }

                if (!whiteDoCastling) {
                    whiteCastling();
                }
                if (!blackDoCastling) {
                    blackCastling();
                }
                checkWinner();
                changePlayer.flip();
            } else {
                //console.log('Nie Ruszam');
                clearMoves(squareCords);
                remSelection([pieceElement.x, pieceElement.y]);
            }
        }

        pieceElement = false;
    } else { // jesli bierek niezaznaczony
        if (engine && board[squareCords[0]][squareCords[1]] && board[squareCords[0]][squareCords[1]].side != engine.side) {
            // console.log('Ruszasz się nie swoją bierką');
            return
        }
        if (board[squareCords[0]][squareCords[1]] && board[squareCords[0]][squareCords[1]].side == changePlayer.turn) { // jesli na polu bierek i kolor odpowiada kolorowi rundy
            // console.log('zaznaczam bierka')
            // console.log(squareCords);
            pieceElement = board[squareCords[0]][squareCords[1]];

            addSelection([pieceElement.x, pieceElement.y]);

            if (!possibleMoves()) {
                remSelection([pieceElement.x, pieceElement.y]);
                pieceElement = false;
            }
            //pieceElement.king.amIInDanger();

        } else { //jesli na polu brak bierka
            // console.log('na tym polu nie ma bierka')
            return;
        }
    }
    
});



const checkMate = () => {
    let white = 0;
    let black = 0;
    console.log(`${kingBlack.x},${kingBlack.y}` + "TOTOTOTOTOT")
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (board[x][y] != null) {
                board[x][y].safetyMove().forEach(element => {
                    if (board[x][y].side != 'white' && element === `${kingWhite.x},${kingWhite.y}`) {
                        console.log("SZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH BIAŁY");
                    }
                    if (board[x][y].side != 'black' && element === `${kingBlack.x},${kingBlack.y}`) {
                        console.log("SZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH CZARNY");
                    }

                });

            }
        }
    }
}

window.onload = setup

export { engineMoved }
