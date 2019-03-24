<<<<<<< HEAD
import board from './board'
=======
import board from './board';
import popup from './settings';
>>>>>>> master


const setup = () => {
    console.log(board);
<<<<<<< HEAD
=======
    document.getElementById('wrapper').appendChild(popup)
>>>>>>> master
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const square = document.createElement('div');
            square.id = `${x},${y}`;
            // square.innerHTML = `${x}, ${y}`;// by lepiej widzieć indeksy
            square.innerHTML = (board[x][y]) ? board[x][y].display : "";
            square.className = 'square';
            square.className += ((x % 2 == y % 2)) ? ' light' : ' dark';
<<<<<<< HEAD
            //square.addEventListener('click', (e) => { touched(e) });
=======
>>>>>>> master
            document.getElementById('board').appendChild(square);
        }
    }
}

export default setup;
