import board from '../board';

class Piece {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side; //'black' or 'white'
    }
    move(id) {
        const newX = id[0];
        const newY = id[2];

        //setting new in new place
        board[newX][newY] = board[this.x][this.y];

        //clearing previous place
        board[this.x][this.y] = null;
        document.getElementById(`${this.x},${this.y}`).innerHTML = "";

        //setting new
        this.x = parseInt(newX);
        this.y = parseInt(newY);
        document.getElementById(id).innerHTML = this.display;

    }

    findLegalMoves() {
        ;
    }
}

export default Piece;