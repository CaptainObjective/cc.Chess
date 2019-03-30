import setup from './setup';
import {resetBoard} from './board';

const result = (winner) => {
    let win;

    const restart = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    const popup = document.createElement('div');
    popup.className = 'overlay';
    const res = document.createElement('div');
    res.className = 'result';
    const form = document.createElement('form');
    form.onsubmit = restart;

    form.innerHTML = `
            <h2>Game over</h2>
            <i class = "fas fa-chess-king ${winner}"></i>
            <p>${winner} is the winner</p>
            `
    const submit = document.createElement('input');
    submit.type = 'submit'
    submit.value = 'Play it again'
       
    form.appendChild(submit);
    res.appendChild(form);
    popup.appendChild(res);

    document.getElementById('wrapper').appendChild(popup)
}

export default result;