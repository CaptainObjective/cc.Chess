import Piece from './Piece';
import board from '../board';

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;//fontawesome knight
    }
    findLegalMoves() {
        const possibleMoves = [];
        let possX, possY;

        for (let i of [-2, -1, 1, 2]) {
            possX = this.x + i;
            
            for (let j of [-1, 1]) {
                possY = this.y + j*(3 - Math.abs(i));
                
                if (possX >= 0 && possX <= 7 && possY >= 0 && possY <= 7) {
                    if (board[possX][possY] != null ? board[possX][possY].side != this.side : true)
                        possibleMoves.push(`${possX},${possY}`);                      
                }
            }
        }
        console.log(possibleMoves);
        return possibleMoves;
    }
}

export default Knight;