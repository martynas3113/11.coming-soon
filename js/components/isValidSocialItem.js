/**
 * renderSocials() funkcijos metu vygdome cikle gaunamu duomenu validacija
 * @param {object} itemObject Objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju `true`
 */
function isValidSocialItem (itemObject) {
    if (typeof itemObject !== 'object') {
        console.error('error: social elemento turetu buti objektas');
        return false;
    }
    if (typeof itemObject.link !== 'string' ||
    itemObject.link === '') {
        console.warn('WARNING: social elemento nuoroda turetu buti tekstine ir ne tuscia');
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
    itemObject.icon === '') {
        console.warn('WARNING: social elemento objekto klaida');
    }
    return true;

}

export { isValidSocialItem }