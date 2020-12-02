import { renderSocials } from "./socials/components/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from "./socials/components/clock/renderClock.js";

import { progressBarData } from './data/progressBarData.js'
import { renderAllProgressBars } from "./socials/components/progress-bar/renderAllProgressBars.js";
import { formValidator } from './socials/components/form-validator/formValidator.js';


renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

formValidator('.hero .form')
formValidator('main .form')

formValidator('.hero .form');
formValidator('main .form');