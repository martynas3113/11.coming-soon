import { renderSocials } from "./socials/components/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from "./socials/components/clock/renderClock.js";
import { renderProgressBar } from '../javascript/socials/components/progress-bar/renderProgressBar.js';
import { progressBarData } from './data/progressBarData.js'
import { renderAllProgressBars } from "./socials/components/progress-bar/renderAllProgressBars.js";
renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);