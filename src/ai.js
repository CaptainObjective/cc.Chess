class AI {

    constructor() {
        this.stockfish = new Worker("./assets/stockfish/stockfish.js");
        this.stockfish.onmessage = function onmessage(event) {
            if (event.data.includes('bestmove')) {
                console.log(event.data);
            }
            // console.log(event.data);
        };
        // this.stockfish.postMessage("go depth 15");
        this.stockfish.postMessage("ucinewgame");
        this.stockfish.postMessage("isready");
        this.stockfish.postMessage("position startpos ");//moves e2e4 e7e5
        this.stockfish.postMessage("go depth 15");
        // this.stockfish.postMessage("d");
    }
}

export default AI;