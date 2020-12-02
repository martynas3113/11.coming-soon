import { validation } from './validationRules.js';

function formValidator(selector) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if(allElements === 0 ) {
        console.error('ERROR: formoje nerasta nei vieno input arba textarea elemento');
        return false;
    }

    if(!submitBtnDOM) {
        console.error('ERROR: formoje nerastas submit mygtukas');
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
                if(error !== true){
                    console.log(error);
                    errorCount++
                }
            }
            
        if (errorCount === 0) {
            console.log('Siunciam info...');
        }
    })
}

export { formValidator }