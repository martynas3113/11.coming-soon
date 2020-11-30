
/**
 * Progress bar komponento generavimas
 * @param {string} selector CSS like vieta, kur norime iterpti progress bar
 * @param {string} title Progress bar pavadinimas 
 * @param {number} value Progress bar reiksme procentais
 * @returns {boolean} funkcijai tinkamai suveikus grazinamas 'true', priesingu atveju - 'false'
 */
function renderProgressBar(selector,title,value) {
    

    const HTML = `<div class="progress-bar">
    <div class="top">
        <div class="label">${title}</div>
        <div class="value">${value}%</div>
    </div>
    <div class="bottom">
        <div class="bar" style="width: ${value}%">
            <div class="loader"></div>
        </div>
    </div>
</div>`

const DOM = document.querySelector(selector);
DOM.insertAdjacentHTML('beforeend', HTML);


return true
}

export { renderProgressBar }