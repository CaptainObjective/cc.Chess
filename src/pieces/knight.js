import Piece from './Piece'

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;//fontawesome knight
    }
    findLegalMoves() {

        const possibleMoves = [];

        return possibleMoves;
    }
}

export default Knight;