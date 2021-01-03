import { imputValidation } from './imputValidation.js';
import { isValidSocialItem } from '../isValidSocialItem.js';
/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas 
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida, grazinamas `false`, o funkcijai suveikus teisingai - `true`
 */
function renderSocials(selector, data) {
    //imput validation
    if (!imputValidation(selector, data)) {
        return false;
    }

    //logic
    const socialDOM = document.querySelector (selector);
    if (!socialDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;

    }
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!isValidSocialItem(item)) {
            continue;
        }

        HTML += `<a href="${item.link}" target="_blank" class="social fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    //post logic validation
    if (HTML === '') {
        console.error('ERROR: NEpavyko sugeneruoti social iconu/nuorodu.');
        return false;
    }
    //return
    socialDOM.innerHTML += HTML;
    return true;
}
export { renderSocials }