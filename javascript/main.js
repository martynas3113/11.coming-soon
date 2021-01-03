import { renderSocials } from "./socials/components/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from "./socials/components/clock/renderClock.js";

import { progressBarData } from './data/progressBarData.js'
import { renderAllProgressBars } from "./socials/components/progress-bar/renderAllProgressBars.js";
import { formValidator } from './socials/components/form-validator/formValidator.js';
import { Toast } from './toast/toast.js';


renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();

formValidator('.hero .form', toast);
formValidator('main .form', toast);