import { renderSocials } from "./socials/components/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from "./socials/components/clock/renderClock.js";

renderSocials('footer > .row', socialsData);

renderClock('.clock');