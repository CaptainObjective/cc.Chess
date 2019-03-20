import Piece from './Piece'
import board from '../board';

class King extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;//fontawesome king
    }
    findLegalMoves() {

        const possibleMoves = [];

        /* tablica z zakresem dozwolonych ruchów - dla osi X i Y */
        const ruchyXY = [[-1, -1, -1, 0, 1, 1, 1, 0], [-1, 0, 1, 1, 1, 0, -1, -1]];

        for (let direction = 0; direction < 8; direction++) {
                let newX = this.x + ruchyXY[0][direction];
                let newY = this.y + ruchyXY[1][direction];
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                    if (board[this.x][this.y].side != this.side) {
                        possibleMoves.push(`${newX},${newY}`);
                    }
                }
        }

        return possibleMoves;
    }

}

export default King;