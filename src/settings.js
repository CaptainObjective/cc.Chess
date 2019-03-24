import AI from './ai';
let engine;

const getSettings = (e) => {
    e.preventDefault();
    const gameMode = e.target.gameMode.value;
    const difficulty = e.target.difficulty.value;
    const side = e.target.side.value;
    const layout = e.target.layout.value;
    if (gameMode == 'vsComp') {
        console.log(difficulty)
        engine = new AI(difficulty, side)
    } else {
        engine = null;
    }

    popup.parentNode.removeChild(popup);
}

const change = (e) => {
    e.preventDefault();
    const gameMode = document.querySelector('input[name="gameMode"]:checked').value;
    const difficulty = document.getElementById('difficulty');
    const side = [...document.getElementsByName('side')];
    if (gameMode == 'Twoplayers') {
        difficulty.disabled = true;
        for (let el of side) {
            el.disabled = true;
        };
    } else {
        difficulty.disabled = false;
        for (let el of side) {
            el.disabled = false;
        };
    }
}

const popup = document.createElement('div');
popup.className = 'overlay';

const formContainer = document.createElement('div');
formContainer.className = 'formContainer';

const form = document.createElement('form');
form.onsubmit = getSettings;
form.onchange = change;
form.innerHTML = `
        <label for="gameMode">
            <label><input type="radio" name="gameMode" value="Twoplayers" checked> Player vs Player </label>
            <label><input type="radio" name="gameMode" value="vsComp"> Player vs Computer </label>
        </label>
        <br>
        <label for="difficulty">
            Level:
            <select name="difficulty" id="difficulty" disabled>
                <option value="0">Idiot</option>
                <option value="5">Amateur</option>
                <option value="10" selected="selected">Intermediete</option>
                <option value="15">Pro</option>
                <option value="20">God</option>
            </select>
        </label>
        <br>
        <label for="side" id="side">
            Side:
            <label><input type="radio" name="side" value="white" checked disabled> White </label>
            <label><input type="radio" name="side" value="black" disabled> Black </label>
        </label> 
        </br>
        <label for="layout">
            Theme:
            <label><input type="radio" name="layout" value="Classic"> Classic </label>
            <label><input type="radio" name="layout" value="Modern" checked> Modern </label>
        </label> </br>`;

const submit = document.createElement('input');
submit.type = 'submit'
submit.value = 'Let the game begins'



popup.appendChild(formContainer);
formContainer.appendChild(form);
form.appendChild(submit);

export default popup;
export { engine };