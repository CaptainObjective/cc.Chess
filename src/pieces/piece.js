import board from '../board';

class Piece {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;

        this.side = side; //'black' or 'white'
    }
    move([newX, newY]) {
        newX = parseInt(newX);
        newY = parseInt(newY);

        //setting new in new place
        board[newX][newY] = board[this.x][this.y];

        //clearing previous place
        board[this.x][this.y] = null;
        document.getElementById(`${this.x},${this.y}`).innerHTML = "";

        //setting new
        this.x = newX;
        this.y = newY;
        // console.log(typeof (this.x), typeof (this.y))
        document.getElementById(`${newX},${newY}`).innerHTML = this.display;

    }

    findLegalMoves() {
        ;
    }
}

export default Piece;