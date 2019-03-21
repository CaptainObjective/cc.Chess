import Piece from './Piece';
import board from '../board';

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
    promote() {

    }
    enPassant() {

    }
}

export default Pawn;