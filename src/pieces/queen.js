import Piece from './Piece'
import board from '../board';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`;//fontawesome queen
    }
    findLegalMoves() {
        let possibleMoves = [];

        //movement rock
        for (let i = 0; i < board.length; i++) {
            possibleMoves[i] = [this.x, i];
            possibleMoves[i + board.length] = [i, this.y]
        }
        possibleMoves.forEach(el => {
            if (el[0] == [this.x] && el[1] == [this.y]) {
                delete possibleMoves[possibleMoves.indexOf(el)];
            }
        })

        //Tworzę tablice, które zawierają położenie białych i czarnych figur na szachownicy.
        const blackFigure = [];
        const whiteFigure = [];
        for (let x = 0; x < board.length; x++) {
            blackFigure[x] = [];
            whiteFigure[x] = [];

            for (let y = 0; y < board[x].length; y++) {
                if (board[x][y] && board[x][y].side == "black") {
                    blackFigure[x][y] = [];
                    blackFigure[x][y][0] = board[x][y].x;
                    blackFigure[x][y][1] = board[x][y].y;
                    blackFigure[x][y][2] = "black"
                }
                if (board[x][y] && board[x][y].side == "white") {
                    whiteFigure[x][y] = [];
                    whiteFigure[x][y][0] = board[x][y].x
                    whiteFigure[x][y][1] = board[x][y].y
                    whiteFigure[x][y][2] = "white"
                }
            }
        }

        const imposibleMoves = [];
        //Wyszukuję pola, na których znajdują się białe figury
        if (this.side == "white") {
            possibleMoves.forEach(el => {
                for (let a = 0; a < whiteFigure.length; a++) {
                    for (let b = 0; b < whiteFigure[a].length; b++) {
                        if (whiteFigure[a][b]) {
                            for (let c = 0; c < whiteFigure[a][b].length; c++) {
                                if (el[0] == whiteFigure[a][b][0] && el[1] == whiteFigure[a][b][1] && whiteFigure[a][b][2] == "white") {
                                    imposibleMoves.push(el);
                                }
                            }
                        }
                    }
                }
            })
        }

        // Wyszukuję pola, na których znajdują się czarne figury
        if (this.side == "black") {
            possibleMoves.forEach(el => {
                for (let a = 0; a < blackFigure.length; a++) {
                    for (let b = 0; b < blackFigure[a].length; b++) {
                        if (blackFigure[a][b]) {
                            for (let c = 0; c < blackFigure[a][b].length; c++) {
                                if (el[0] == blackFigure[a][b][0] && el[1] == blackFigure[a][b][1] && blackFigure[a][b][2] == "black") {
                                    imposibleMoves.push(el);
                                }
                            }
                        }
                    }
                }
            })
        }

        //Usunięcie z możliwych ruchów pól, na których znajdują się moje figury oraz wyłączenie możliwości przeskakiwania ich.
        possibleMoves.forEach(el => {
            imposibleMoves.forEach(move => {
                if (el[1] == move[1]) {
                    possibleMoves.forEach(i => {
                        if (i[1] == move[1] && i[0] < this.x && i[0] < move[0] && move[0] < this.x || i[1] == move[1] && i[0] > this.x && i[0] > move[0] && move[0] > this.x) {
                            delete possibleMoves[possibleMoves.indexOf(i)]
                        }
                    })
                } else if (el[0] == move[0]) {
                    possibleMoves.forEach(i => {
                        if (i[0] == move[0] && i[1] < this.y && i[1] < move[1] && move[1] < this.y || i[0] == move[0] && i[1] > this.y && i[1] > move[1] && move[1] > this.y) {
                            delete possibleMoves[possibleMoves.indexOf(i)]
                        }
                    })
                }
                if (el == move) {
                    delete possibleMoves[possibleMoves.indexOf(el)];
                }
            })
        })

        //Usunięcie możliwości przeskakiwania figur przeciwnika
        if (this.side == "white") {
            for (let i = 0; i < possibleMoves.length; i++) {
                for (let j = 0; j < blackFigure.length; j++) {
                    for (let k = 0; k < blackFigure[j].length; k++) {
                        if (possibleMoves[i]) {
                            if (blackFigure[j][k]) {
                                if (possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] < blackFigure[j][k][0] && possibleMoves[i][0] < this.x && blackFigure[j][k][0] < this.x || possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] > blackFigure[j][k][0] && possibleMoves[i][0] > this.x && blackFigure[j][k][0] > this.x || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] > blackFigure[j][k][1] && possibleMoves[i][1] > this.y && blackFigure[j][k][1] > this.y || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] < blackFigure[j][k][1] && possibleMoves[i][1] < this.y && blackFigure[j][k][1] < this.y) {
                                    delete possibleMoves[i];
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.side == "black") {
            for (let i = 0; i < possibleMoves.length; i++) {
                for (let j = 0; j < whiteFigure.length; j++) {
                    for (let k = 0; k < whiteFigure[j].length; k++) {
                        if (possibleMoves[i]) {
                            if (whiteFigure[j][k]) {
                                if (possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] < whiteFigure[j][k][0] && possibleMoves[i][0] < this.x && whiteFigure[j][k][0] < this.x || possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] > whiteFigure[j][k][0] && possibleMoves[i][0] > this.x && whiteFigure[j][k][0] > this.x || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] > whiteFigure[j][k][1] && possibleMoves[i][1] > this.y && whiteFigure[j][k][1] > this.y || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] < whiteFigure[j][k][1] && possibleMoves[i][1] < this.y && whiteFigure[j][k][1] < this.y) {
                                    delete possibleMoves[i];
                                }
                            }
                        }
                    }
                }
            }
        }
        possibleMoves = possibleMoves.filter(el => el);

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
        possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`)
        return possibleMoves;
    }
}

export default Queen;