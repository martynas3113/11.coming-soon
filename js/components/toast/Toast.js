class Toast {
    /**
     * Konstruktorius inicijuojantis pranesima rodanti elementa
     * @constructor
     */
    constructor() {
        this.selector = 'body'; // vieta kur istatyti toast
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null;   //reprezentuoja pati nauja sugeneruota elementa
        this.textDOM = null;     // elementas, kuriame atvaizduosime pranesima
        this.closeDOM = null //elementas skirtas uzdaryti toast
        this.closeTimer = null; // laikrodis, reguliuojantis kada uzdaryti pranesima toasteri
    }
    /**
     * 
     * @param {string} type zinutes tipas. vieninteliai galimi varijantai: `succes` | `error`
     * @param {string} message tekstas, kuris turi buti atvaizduotas pranesime.
     */
    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;
        
        if(type === 'success') {
            this.DOM.classList.remove('error');
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }
        this.closeTimer = setTimeout(() => {
            this.hide();
        }, 10000)
    }
    hide() { //metodas paslepentis pranesimo elementa
        this.DOM.classList.remove('visible');
        clearTimeout(this.closeTimer);
    }

    render() { //  metodas kuris sukuria / sugeneruoja html pranesimo elementa
        const HTML =    `<div class="toast">
                            <i class="fa fa-check"></i>
                            <i class="fa fa-shield"></i>
                            <p>Your message here...</p>
                            <i class="fa fa-times"></i>
                        </div>`;

        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML); //istatomas objektas toastas
        this.DOM = this.renderIntoParentDOM.querySelector('.toast'); // surandamas objektas toastas
        this.textDOM = this.DOM.querySelector('p'); //vieta kur irasineju zinutes 
        this.closeDOM = this.DOM.querySelector('.fa-times'); //surandamas dominamas objektas toaste

        this.closeDOM.addEventListener('click', () => {
            this.hide();
        })
    }
}

export { Toast }