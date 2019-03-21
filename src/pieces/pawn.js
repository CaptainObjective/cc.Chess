import Piece from './Piece';
import board from '../board';
import Queen from './queen';

class Pawn extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'pawn';
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`
    }
    findLegalMoves() {
        //console.log(this.x, this.y);
        const possibleMoves = [];
        console.log(possibleMoves);

        if (this.side == 'white') {
            if (this.x == 6) {
                possibleMoves.push(`${4},${this.y}`);
                possibleMoves.push(`${5},${this.y}`);
            } else {
                (parseInt(this.x) - 1 >= 0) && possibleMoves.push(`${parseInt(this.x) - 1},${this.y}`);
            }
        }
        if (this.side == 'black') {
            if (this.x == 1) {
                possibleMoves.push(`${2},${this.y}`);
                possibleMoves.push(`${3},${this.y}`);
            } else {
                (parseInt(this.x) + 1 <= 7) && possibleMoves.push(`${parseInt(this.x) + 1},${this.y}`);
            }
        }
        return possibleMoves;
    }
    promote(cord, side) {      
        console.log('promocja pionka');
        let newX = parseInt(cord[0]);
        let newY = parseInt(cord[1]);
        let promoteTo = new Queen(newX, newY, side);
        board[newX][newY] = promoteTo;
        document.getElementById(`${newX},${newY}`).innerHTML = promoteTo.display;
    }

    enPassant() {
        
    }
}

export default Pawn;