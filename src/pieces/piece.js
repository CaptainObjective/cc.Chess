import board from '../board';

class Piece {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.wasMoved = false;

        this.side = side; //'black' or 'white'
        this.firstMove = false;
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

        this.firstMove = true

        document.getElementById(`${newX},${newY}`).innerHTML = this.display;

    }

    findLegalMoves() {
        ;
    }

    safetyMove(){
        let properX = this.x; //zapamiętuje pierwotną pozycję
        let properY = this.y;

        let possibleMoves = this.findLegalMoves().filter(m =>{
            console.log(m);

            let desiredX = m[0]; //przypisuję do zmiennych x i y rozpatrywanego ruchu
            let desiredY = m[2];

            let pieceInDesired = board[desiredX][desiredY] //chroni przed usunięciem bierek stojący na rozpatrywanym polu, jak pole puste to będzie undefined

            board[desiredX][desiredY] = board[this.x][this.y]; // przesuwa bierka na nową pozycję

            board[this.x][this.y] = null; //czyści pole po bierku

            this.x = desiredX; //przypisuje nowe właściwości pozycji
            this.y = desiredY;

            this.firstMove = true;

            let safeOrNot = !this.king.amIInDanger(); //rozpatruje sytuację króla dla nowej pozycji na planszy

            board[properX][properY] = board[this.x][this.y]; //cofam bierka na pierwotną pozycję
            this.x = properX; //przywracam mu pierwotne właściwości
            this.y = properY;

            this.firstMove = false;

            board[desiredX][desiredY] = pieceInDesired; //na rozpatrywane pole przywracam bierka, który tam był, jeśli go nie było to będzie undefined i tyle

            return safeOrNot; //filtruje ruch
        });
        
        //console.log(typeof possibleMoves);
        console.log(possibleMoves);
        return possibleMoves;
    }
}

export default Piece;