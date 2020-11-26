
//Target date New years eve:
//2021-01-01 00:00:00
/**
 * Generuoja statini laikrodi, kuris parodo kiek liko laiko iki artimiausiu naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta kur bus generuojamas laikrodzio HTML turinys 
 * @returns {boolean} Jeigu funkcija teisinga,grazina laika iki naujuju metu ir True.
 */
function renderClock(selector) {
    if(typeof selector !== 'string'){
        console.error('ERROR: selektorius turi buti tekstinio tipo')
        return false;
    }

    if (selector === ''){
        console.error('ERROR: selektorius negali buti tuscias')
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta kur sugeneruoti laikrodzio HTML turini');
        return false;
    }
    // einamieji metai
    const date = new Date()
    const currentYear = date.getFullYear();

    // naujakas = einamieji metai +1 (2020 +1 = 2021)

    const newYear = currentYear + 1;

    // susikonstuojame pilna data : ${naujakas}-01-01 00:00:00

    const newYearDate = `${newYear}-01-01 00:00:00`
    const newYearObject = new Date(newYearDate);
    const newYearMilliseconds = newYearObject.getTime();
    // einamasis laikas yyyy-mm-dd hh:mm:ss
    const currentTimeMilliseconds = date.getTime();


    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMilliseconds - currentTimeMilliseconds;
    let secondsLeft = timeLeft / 1000;

    // is skirutmo apskaiciuojame likusias dienas, valandas, minutes ir sekndes


    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    secondsLeft -= days * 60 *60 * 24
    const hours = Math.floor (secondsLeft / 60 / 60);
    secondsLeft-= hours * 60 * 60
    const minutes = Math.floor(secondsLeft / 60);

    const seconds = Math.floor(secondsLeft - minutes * 60);

    const HTML = `<div class="time-box">
                    <h2> ${days}</h2>
                        <span>Days</span>
                    </div>
                    <div class="time-box">
                    <h2> ${hours}</h2>
                        <span>Hours</span>
                    </div>
                    <div class="time-box">
                    <h2> ${minutes}</h2>
                        <span>Minutes</span>
                    </div>
                    <div class="time-box">
                       <h2> ${seconds}</h2>
                        <span>Seconds</span>
                    </div>`;


    DOM.innerHTML = HTML;
}

export { renderClock }