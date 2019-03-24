import AI from './ai';
let engine;

const getSettings = (e) => {
    e.preventDefault();
    const gameMode = e.target.gameMode.value;
    const difficulty = e.target.difficulty.value;
    const layout = e.target.layout.value;
    if (gameMode == 'vsComp') {
        engine = new AI(difficulty)
    } else {
        engine = null;
    }

    popup.parentNode.removeChild(popup);
}

const popup = document.createElement('div');
popup.className = 'overlay';

const formContainer = document.createElement('div');
formContainer.className = 'formContainer';

const form = document.createElement('form');
form.onsubmit = getSettings;
form.innerHTML = `<label for="gameMode">
            <label><input type="radio" name="gameMode" value="Twoplayers" checked> Player vs Player </label>
            <label><input type="radio" name="gameMode" value="vsComp"> Player vs Computer </label>
        </label>
        <br>
        <label for="difficulty">
            Level:
            <select name="difficulty" id="difficulty">
                <option value="0">Idiot</option>
                <option value="5">Amateur</option>
                <option value="10" selected="selected">Intermediete</option>
                <option value="15">Pro</option>
                <option value="20">God</option>
            </select>
        </label>
        <br>
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