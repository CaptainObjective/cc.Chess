import Piece from './Piece'
import board from '../board';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`;//fontawesome queen
    }
    findLegalMoves() {
         const possibleMoves = [];

         //movement rock
         for (let i = 0; i < board.length; i++) {
             possibleMoves[i] = [this.x, i];
             possibleMoves[i + board.length] = [i, this.y]
         }
         possibleMoves.forEach(el => {
             if (el[0] == [this.x] && el[1] == [this.y]) {
                 possibleMoves.splice((possibleMoves.indexOf(el)), 1)
             }
         })

        //movement bishop
         const dx = [-1, -1, 1, 1];
         const dy = [-1, 1, -1, 1]

         for (let direction = 0; direction < 4; direction++) {
             for (let counter = 1; counter < 8; counter++) {
                 let newX = parseInt(this.x) + (dx[direction] * counter);
                 let newY = parseInt(this.y) + dy[direction] * counter;
                 if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
                     if (board[newX][newY] != null) {
                         if (board[newX][newY].side != this.side) {
                             possibleMoves.push(`${newX},${newY}`);
                         }
                         break;
                     } else {
                         possibleMoves.push(`${newX},${newY}`);
                        
                     }
                 }
             }

         }
         console.log(possibleMoves);
        return possibleMoves;
    }
}

export default Queen;