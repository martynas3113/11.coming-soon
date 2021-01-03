import { isValidEmail } from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';


//validation objekto key (raktazodziai) sutampa su terminais naudojamais HTML formose esanciose for validation 
const validation = { 
    text: isValidText, 
    email: isValidEmail, 
    name: isValidName 
}

export { validation }