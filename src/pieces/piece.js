import board from '../board';

class Piece {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.wasMoved = false;

        this.side = side; //'black' or 'white'

        this.king = null;
      
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

        this.wasMoved ? this.firstMove = false : this.firstMove = true
        console.log(newY)
        this.wasMoved = true;
        document.getElementById(`${newX},${newY}`).innerHTML = this.display;

    }

    findLegalMoves() {
        ;
    }

    fakeMove([newX, newY]) {
            newX = parseInt(newX);
            newY = parseInt(newY);

            //setting new in new place
            board[newX][newY] = board[this.x][this.y];

            //clearing previous place
            board[this.x][this.y] = null;
            //document.getElementById(`${this.x},${this.y}`).innerHTML = "";

            //setting new
            this.x = newX;
            this.y = newY;
    }

    safetyMove(){
        let properX = this.x;
        let properY = this.y;

        let possibleMoves = this.findLegalMoves().filter(move =>{
            console.log(move);
            this.fakeMove([move[0],move[2]]);
            console.log(this.king.amIInDanger())
            return !this.king.amIInDanger();
        });
        this.fakeMove([properX,properY]) // ten przywraca do pierwotnej pozycji;
        //console.log(possibleMoves);
        return possibleMoves;
    }
}

export default Piece;