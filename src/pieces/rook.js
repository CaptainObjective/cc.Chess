import Piece from './Piece';
import board from '../board';

class Rook extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'rook';
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
    }
    findLegalMoves() {

        const possibleMoves = [];
        for (let i = 0; i < board.length; i++) {
            possibleMoves[i] = [this.x, i];
            possibleMoves[i + board.length] = [i, this.y]
        }
        possibleMoves.forEach(el => {
            console.log(el)
            if (el[0] == [this.x] && el[1] == [this.y]) {
                console.log(possibleMoves.indexOf(el))
                possibleMoves.splice((possibleMoves.indexOf(el)), 1)
                // W jakiś sposób naprawić wierze na h8
            }
        })

        console.log(possibleMoves);
        return possibleMoves;
    }
}

export default Rook;