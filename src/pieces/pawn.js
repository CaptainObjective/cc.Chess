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
            if(this.x != 0){
                if (board[this.x - 1][this.y + 1] != null) {
                    if (board[this.x - 1][this.y + 1].side != this.side) {
                        possibleMoves.push(`${this.x - 1},${this.y + 1}`);
                    }
                }
                if (board[this.x - 1][this.y - 1] != null) {
                    if (board[this.x - 1][this.y - 1].side != this.side) {
                        possibleMoves.push(`${this.x - 1},${this.y - 1}`);
                    }
                }
            }
            if(this.x == 6){              
                if (board[this.x - 1][this.y] == null) {
                    possibleMoves.push(`${5},${this.y}`);
                }
                if (board[this.x - 1][this.y] == null && board[this.x - 2][this.y] == null) {
                    possibleMoves.push(`${4},${this.y}`); 
                }
            }
            else if (this.x != 0){
                if (board[this.x - 1][this.y] == null) {
                    ((this.x) - 1 > 0) && possibleMoves.push(`${(this.x) - 1},${this.y}`);
                } 
            }       
        }  
        
        if (this.side == 'black') {
            if (this.x != 7) {
                if (board[this.x + 1][this.y - 1] != null) {
                    if (board[this.x + 1][this.y - 1].side != this.side) {
                        possibleMoves.push(`${this.x + 1},${this.y - 1}`);
                    }
                }
                if (board[this.x + 1][this.y + 1] != null) {
                    if (board[this.x + 1][this.y + 1].side != this.side) {
                        possibleMoves.push(`${this.x + 1},${this.y + 1}`);
                    }
                }
            }
            if (this.x == 1) {
                if (board[(this.x) + 1][this.y] == null) {
                    possibleMoves.push(`${2},${this.y}`);
                }
                if (board[(this.x) + 1][this.y] == null && board[(this.x) + 2][this.y] == null) {
                    possibleMoves.push(`${3},${this.y}`);
                }
            }
            else if (this.x != 7){
                if (board[(this.x) + 1][this.y] == null){
                    ((this.x) + 1 > 0) && possibleMoves.push(`${(this.x) + 1},${this.y}`);
                }
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