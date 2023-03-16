/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

import {createFooter, createHeader, isSmallScreen} from './shared.js';

const partnerContainer = document.querySelector('.partner');
let isScreenCurrentlySmall;

const main = () => {
  createHeader(['home', 'program', 'join', 'sponsor']);
  if (!isSmallScreen()) {
    createFooter(false, true, 'dark');
  } else {
    createFooter(true, true);
  }
};

main();

window.onresize = () => {
  if (isSmallScreen() && !isScreenCurrentlySmall) {
    const mainFooter = document.querySelector('.main-footer');
    if (mainFooter) {
      mainFooter.classList.remove('footer-dark', 'text-white');
    }
    createFooter(true, false);
    isScreenCurrentlySmall = true;
  } else if (!isSmallScreen() && isScreenCurrentlySmall) {
    partnerContainer.innerHTML = '';
    const mainFooter = document.querySelector('.main-footer');
    if (mainFooter) {
      mainFooter.classList.add('footer-dark', 'text-white');
    }
    isScreenCurrentlySmall = false;
  }
};
