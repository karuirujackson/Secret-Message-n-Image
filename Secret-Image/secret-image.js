/* secret-image.js */
import {toggleHiddenElement, changeToFunkyColor} from '../Modules/dom.functions.js'

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement);
});