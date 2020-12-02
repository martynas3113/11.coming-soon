import { isValidEmail } from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';


//validation ebjekto key {raktazodiziai} specialiai sutamopa su terminais naudojamais HTML formose esanciuose data-validation reiksmese
const validation = { 
    email: isValidEmail, 
    text: isValidText, 
    name: isValidName 
}

export { validation };