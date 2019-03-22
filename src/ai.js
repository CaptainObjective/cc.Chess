import { engineMoved } from './main';

class AI {

    constructor() {
        try { this.stockfish = new Worker("./assets/stockfish/stockfish.js"); }
        catch (e) { alert('Nie pograsz, zainwestuj w porządną przeglądarkę') }

        this.stockfish.onmessage = (event) => {
            if (!event.data.includes('info')) {
                console.log(event.data);
                if (event.data.includes('bestmove')) {
                    //bestmove c7c5 ponder g1f3
                    // console.log(this.translateToGame(event.data.slice(9, 14)));
                    let move = event.data.slice(9, 14)
                    this.history += ` ${move}`;
                    console.log(this.history)
                    move = this.translateToGame(event.data.slice(9, 14));
                    console.log(move);
                    engineMoved(move);

                }

            }
            // console.log(event.data);
        };
        this.stockfish.postMessage("ucinewgame");
        this.stockfish.postMessage("isready");

        this.depth = 10;//poziom trudności
        this.history = '';
    }
    translateToEngine(from, to) {
        to.forEach((el, i, arr) => arr[i] = parseInt(arr[i]));
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
        let newMove = `${files[from[1]]}${ranks[from[0]]}${files[to[1]]}${ranks[to[0]]}`

        // console.log(from, to);
        // console.log(newMove);
        return newMove;

    }
    translateToGame(move) {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
        const newMove = [];

        newMove.push(ranks.indexOf(move[1]) + ',' + files.indexOf(move[0]));
        newMove.push(ranks.indexOf(move[3]) + ',' + files.indexOf(move[2]));

        return newMove;


    }
    getMove(from, to) {
        const lastMove = this.translateToEngine(from, to)
        this.history += ` ${lastMove}`;
        this.stockfish.postMessage(`position startpos moves ${this.history}`);//moves e2e4 e7e5
        this.stockfish.postMessage(`go depth ${this.depth}`);
        this.stockfish.postMessage("d");//fajne do testów
    }
}

export default AI;