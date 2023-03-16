/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

import {createFooter, createHeader, isSmallScreen} from './shared.js';

const partnerContainer = document.querySelector('.partner');
let isScreenCurrentlySmall;

const main = () => {
  if (!isSmallScreen()) {
    createFooter(false, true, 'dark');
    createHeader(['home', 'program', 'join', 'sponsor'], true);
  } else {
    createFooter(true, true);
    createHeader(['home', 'program', 'join', 'sponsor']);
  }
};

main();

window.onresize = () => {
  if (isSmallScreen() && !isScreenCurrentlySmall) {
    createHeader(null, false);
    const mainFooter = document.querySelector('.main-footer');
    if (mainFooter) {
      mainFooter.classList.remove('footer-dark', 'text-white');
    }
    createFooter(true, false);
    isScreenCurrentlySmall = true;
  } else if (!isSmallScreen() && isScreenCurrentlySmall) {
    createHeader(null, true);
    partnerContainer.innerHTML = '';
    const mainFooter = document.querySelector('.main-footer');
    if (mainFooter) {
      mainFooter.classList.add('footer-dark', 'text-white');
    }
    isScreenCurrentlySmall = false;
  }
};
