import Piece from './Piece'

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;//fontawesome knight
    }
    findLegalMoves() {
        const possibleMoves = [];
        for (let i of [-2, -1, 1, 2]) {
            if (this.x + i >= 0 && this.x + i <= 7 && this.y + (3 - Math.abs(i)) <=7)
                possibleMoves.push(`${this.x + i},${this.y + (3 - Math.abs(i))}`);
            if (this.x + i >= 0 && this.x + i <= 7 && this.y - (3 - Math.abs(i)) >= 0)
                possibleMoves.push(`${this.x + i},${this.y - (3 - Math.abs(i))}`);
        }

        return possibleMoves;
    }
}

export default Knight;