import AI from './ai';
let engine;

const getSettings = (e) => {
    e.preventDefault();
    const gameMode = e.target.gameMode.value;
    const difficulty = e.target.difficulty.value;
    const side = e.target.side.value;
    const style = e.target.layout.value;
    document.getElementById("theme").setAttribute("href", `${style}.css`);

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
    const style = document.querySelector('input[name="layout"]:checked').value;
    document.getElementById("theme").setAttribute("href", `${style}.css`);

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
        <div> 
            <p class = "header" > Opponent </p>      
            <label for="gameMode" class="mode">            
                <label class="pvp">
                    <input type="radio" name="gameMode" value="Twoplayers" checked> 
                    <i class="fas fa-user"></i>  
                </label>
                <label class="ai">
                    <input type="radio" name="gameMode" value="vsComp"> 
                    <i class="fas fa-robot"></i> 
                </label>
            </label>
        </div>
        <div>
            <label for="difficulty" class="level">
                <p class="header">Difficulty </p>
                <select name="difficulty" id="difficulty" class="select" disabled>
                    <option value="0">Idiot</option>
                    <option value="5">Amateur</option>
                    <option value="10" selected="selected">Intermediete</option>
                    <option value="15">Pro</option>
                    <option value="20">God</option>
                </select>            
            </label>
        </div>
        <div>
            <p class="header">Side</p>
            <label for="side" id="side">
                <label><input type="radio" name="side" value="white" checked disabled> <div id="white"></div> </label>
                <label><input type="radio" name="side" value="black" disabled> 
                <div id="black"></div> </label>
            </label> 
        </div>
        <div>
            <p class="header">Theme</p>
            <label for="layout" class="skin">
                <label>
                <input type="radio" name="layout" value="classic"> 
                <p> Classic </p>
                </label>
                <label><input type="radio" name="layout" value="modern" checked> <p class="modern">Modern</p> </label>
            </label>
        </div>`;

const submit = document.createElement('input');
submit.type = 'submit'
submit.value = 'Let the game begins'



popup.appendChild(formContainer);
formContainer.appendChild(form);
form.appendChild(submit);

export default popup;
export {
    engine
};