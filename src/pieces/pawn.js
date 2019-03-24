import Piece from './Piece';
import board from '../board';
import Queen from './queen';
import Knight from './knight';
import Bishop from './bishop';
import Rook from './rook';

class Pawn extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'pawn';
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`
    }
    findLegalMoves() {
        //console.log(this.x, this.y);
        const possibleMoves = [];
<<<<<<< HEAD
        console.log(possibleMoves);

        if (this.side == 'white') {
            if(this.x != 0){
=======
        // console.log(possibleMoves);

        if (this.side == 'white') {
            if (this.x != 0) {
>>>>>>> master
                if (board[this.x - 1][this.y + 1] != null) {
                    if (board[this.x - 1][this.y + 1].side != this.side) {
                        possibleMoves.push(`${this.x - 1},${this.y + 1}`);
                    }
                }
                if (board[this.x - 1][this.y - 1] != null) {
                    if (board[this.x - 1][this.y - 1].side != this.side) {
                        possibleMoves.push(`${this.x - 1},${this.y - 1}`);
                    }
                }
            }
<<<<<<< HEAD
            if(this.x == 6){              
=======
            if (this.x == 6) {
>>>>>>> master
                if (board[this.x - 1][this.y] == null) {
                    possibleMoves.push(`${5},${this.y}`);
                }
                if (board[this.x - 1][this.y] == null && board[this.x - 2][this.y] == null) {
<<<<<<< HEAD
                    possibleMoves.push(`${4},${this.y}`); 
                }
            }
            else if (this.x != 0){
                if (board[this.x - 1][this.y] == null) {
                    ((this.x) - 1 >= 0) && possibleMoves.push(`${(this.x) - 1},${this.y}`);
                } 
            }       
        }  
        
=======
                    possibleMoves.push(`${4},${this.y}`);
                }
            }
            else if (this.x != 0) {
                if (board[this.x - 1][this.y] == null) {
                    ((this.x) - 1 > 0) && possibleMoves.push(`${(this.x) - 1},${this.y}`);
                }
            }
        }

>>>>>>> master
        if (this.side == 'black') {
            if (this.x != 7) {
                if (board[this.x + 1][this.y - 1] != null) {
                    if (board[this.x + 1][this.y - 1].side != this.side) {
                        possibleMoves.push(`${this.x + 1},${this.y - 1}`);
                    }
                }
                if (board[this.x + 1][this.y + 1] != null) {
                    if (board[this.x + 1][this.y + 1].side != this.side) {
                        possibleMoves.push(`${this.x + 1},${this.y + 1}`);
                    }
                }
            }
            if (this.x == 1) {
                if (board[(this.x) + 1][this.y] == null) {
                    possibleMoves.push(`${2},${this.y}`);
                }
                if (board[(this.x) + 1][this.y] == null && board[(this.x) + 2][this.y] == null) {
                    possibleMoves.push(`${3},${this.y}`);
                }
            }
<<<<<<< HEAD
            else if (this.x != 7){
                if (board[(this.x) + 1][this.y] == null){
                    ((this.x) + 1 <= 7) && possibleMoves.push(`${(this.x) + 1},${this.y}`);
                }
            }
            
=======
            else if (this.x != 7) {
                if (board[(this.x) + 1][this.y] == null) {
                    ((this.x) + 1 > 0) && possibleMoves.push(`${(this.x) + 1},${this.y}`);
                }
            }

>>>>>>> master
        }
        return possibleMoves;
    }
    promote(cord, side) {      
        console.log('promocja pionka');
        let newX = parseInt(cord[0]);
        let newY = parseInt(cord[1]);
<<<<<<< HEAD

        let promo = document.createElement('div');
        promo.id = 'promo';

        promo.style.left = newY * 10 + 'vh';
        if (side == 'white') {
            promo.style.top = '10vh';
        }
        else {
            promo.style.bottom = '10vh';        
        }

        promo.innerHTML = `<div data-piece="queen" class="square"><i class="fas fa-chess-queen ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="knight" class="square"><i class="fas fa-chess-knight ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="bishop" class="square"><i class="fas fa-chess-bishop ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="rook" class="square"><i class="fas fa-chess-rook ${side}" ></i></div>`;
        
        document.getElementById('board').appendChild(promo);
        
        Array.from(promo.getElementsByTagName('div')).forEach(
            function (element) {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let piece = e.currentTarget.dataset.piece;
                    //console.log(piece);
                    let promoteTo;
                    switch (piece) {
                        case 'queen': 
                            promoteTo = new Queen(newX, newY, side);
                            break;
                        case 'knight':
                            promoteTo = new Knight(newX, newY, side);
                            break;
                        case 'bishop':
                            promoteTo = new Bishop(newX, newY, side);
                            break;
                        case 'rook':
                            promoteTo = new Rook(newX, newY, side);
                            break;
                    }

=======

        let promo = document.createElement('div');
        promo.id = 'promo';

        promo.style.left = newY * 10 + 'vh';
        if (side == 'white') {
            promo.style.top = '10vh';
        }
        else {
            promo.style.bottom = '10vh';        
        }

        promo.innerHTML = `<div data-piece="queen" class="square"><i class="fas fa-chess-queen ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="knight" class="square"><i class="fas fa-chess-knight ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="bishop" class="square"><i class="fas fa-chess-bishop ${side}"></i></div>`;
        promo.innerHTML += `<div data-piece="rook" class="square"><i class="fas fa-chess-rook ${side}" ></i></div>`;
        
        document.getElementById('board').appendChild(promo);
        
        Array.from(promo.getElementsByTagName('div')).forEach(
            function (element) {
                element.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let piece = e.currentTarget.dataset.piece;
                    //console.log(piece);
                    let promoteTo;
                    switch (piece) {
                        case 'queen': 
                            promoteTo = new Queen(newX, newY, side);
                            break;
                        case 'knight':
                            promoteTo = new Knight(newX, newY, side);
                            break;
                        case 'bishop':
                            promoteTo = new Bishop(newX, newY, side);
                            break;
                        case 'rook':
                            promoteTo = new Rook(newX, newY, side);
                            break;
                    }

>>>>>>> master
                    board[newX][newY] = promoteTo;
                    document.getElementById(`${newX},${newY}`).innerHTML = promoteTo.display;
                    promo.parentElement.removeChild(promo);
                    promo = null;
                });
            }
        );
    }

    enPassant() {
        
    }
}

export default Pawn;