import Piece from './Piece'

class King extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;//fontawesome king
    }
    findLegalMoves() {

        const possibleMoves = [];

        if (this.side == 'white') {
            (this.x - 1 > 0) && possibleMoves.push(`${this.x - 1},${this.y}`);
            (this.x + 1 > 0) && possibleMoves.push(`${this.x + 1},${this.y}`);
            (this.y - 1 > 0) && possibleMoves.push(`${this.x},${this.y - 1}`);
            (this.y + 1 > 0) && possibleMoves.push(`${this.x},${this.y + 1}`);
        } else {
            (this.x - 1 > 0) && possibleMoves.push(`${this.x - 1},${this.y}`);
            (this.x + 1 > 0) && possibleMoves.push(`${this.x + 1},${this.y}`);
            (this.y - 1 > 0) && possibleMoves.push(`${this.x},${this.y - 1}`);
            (this.y + 1 > 0) && possibleMoves.push(`${this.x},${this.y + 1}`)
        }

        return possibleMoves;
    }
}

export default King;