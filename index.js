import characterData from "./data"
import Character from './Character'

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()