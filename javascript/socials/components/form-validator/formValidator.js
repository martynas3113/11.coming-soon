import { validation } from './validationRules.js';

/**
 * Formos validavima atliekanti funkcija, kuri automatiskai  pazista kokiems ivesties laukams kokias reikia taikyti validavcijos taiskyles ir pagal tai atvaizuduoja atititnkamus pranesimus 
 * @param {String} selector CSS like selector
 * @param {Object} toastObject Objektas i kuri reikia kreiptis, norint atvaizduoti pranesimus: Tiek sekmes, tiek klaidos.
 * @returns {Boolean} Funkcijai sekmingai suveikus, grazinamas `True` priesingu atveju `False`;
 */

function formValidator(selector, toastObject) {

    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if (allElements === 0) {
        toastObject.show('error', 'ERROR: formoje nerasta nei vieno input arba textarea elemento')
        console.error('ERROR: formoje nerasta nei vieno input arba textarea elemento');
        return false;
    }

    if (!submitBtnDOM) {
        toastObject.show('error', 'ERROR: formoje nerastas submit mygtukas')
        return false;
    }

    submitBtnDOM.addEventListener('click', () => {
        let errorCount = 0;
        console.clear();

        for (let input of allElements) {
            const validationRule = input.dataset.validation; // HTML = data-validation
            const text = input.value;

            const validationFunction = validation[validationRule];
            const error = validationFunction(text)
            if (error !== true) {
                toastObject.show('error', error)
                console.log(error);
                errorCount++
                break //Klaidos pranesimas rodomas ties pirma sutikta klaida.
            }
        }

        if (errorCount === 0) {
            toastObject.show( 'Siunciam info...');

        }
    })

    return true;
}

export { formValidator }