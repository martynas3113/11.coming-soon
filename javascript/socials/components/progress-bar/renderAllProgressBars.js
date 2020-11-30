import { isValidProgressBarsList } from './isValidProgressBarsList.js'
import { renderProgressBar } from './renderProgressBar.js'

/**
 * 
 * @param {Object[]} data 
 * @param {string} bar.selector
 * @param {string} bar.title
 * @param { number } bar.value
 */
function renderAllProgressBars (data) {
    if(isValidProgressBarsList(data)) {

        return false;
    }

    for(let i =0; i < data.length; i++) {
        const bar = data[i];
        renderProgressBar(bar.selector,bar.title,bar.value);
    }

}

export { renderAllProgressBars }