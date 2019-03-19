import Piece from './Piece'

class Bishop extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'bishop';
        this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
    }
    findLegalMoves() {

        const possibleMoves = [];
        let dx = [-1, -1, 1, 1];
        let dy = [-1, 1, -1, 1]

        for (let direction = 0; direction < 4; direction++) {
            for (let counter = 1; counter < 8; counter++) {
                let newX = this.x + dx[direction] * counter;
                let newY = this.y + dy[direction] * counter;
                if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
                    possibleMoves.push(`${newX},${newY}`);
                }
            }

        }

        return possibleMoves;
    }



}


export default Bishop;