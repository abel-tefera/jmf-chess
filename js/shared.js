/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

class header extends HTMLElement {
  connectedCallback() {
    const {links: linksM} = this.attributes;
    const links = linksM.value.split(',');
    const mainLink = links[0] == 'home' ? 'index': links[0];
    const aLinks = links.map((link, i) => {
      if (i > 0) {
        return `<li class="mx-4">
        <a
          class="disable-default-link text-capitalize header-link"
          aria-current="page"
          href="#${link}"
          >${link}</a
        >
      </li>`;
      }
    });

    const aLinksMK = aLinks.join('\n');

    this.innerHTML = `<nav class="hamburger" id="open-menu">
    <div class="hamburger-container">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </nav>
  <a class="logo-link ps-md-5 ms-md-5">
  <img class="logo" src="assets/apple.svg" /></a>

  <div
    class="links-container container-fluid 
    d-flex justify-content-end align-items-center"
  >
    <ul class="d-flex flex-row disable-default me-lg-3 pe-md-5">
      <li class="mx-4">
        <a
          class="disable-default-link text-capitalize header-link"
          aria-current="page"
          href="${mainLink}.html"
          >${links[0]}</a
        >
      </li>
    ${aLinksMK}
    </ul>
    <div class="ms-lg-5 ps-md-3 pe-md-3 me-lg-3 py-md-2 px-md-3 
    text-center navbar-right-btn ">
      <p class="m-0 p-0">JMF Chess</p>
    </div>
  </div>
    </header>`;
  }
}

class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container-fluid">
      <div class="w-100 d-flex flex-row py-5 mx-auto justify-content-center">
        <div class="footer-logo align-self-center">
          <img src="assets/google.svg" />
        </div>
        <div class="footer-content d-flex flex-column ps-4">
          <p class="fs-4">Lorem ipsum dolor sit amet consectetur.</p>
          <p class="fs-6 footer-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            magnam est voluptatibus sequi accusantium excepturi suscipit
            aliquid a!
          </p>
        </div>
      </div>
    </div>`;
  }
}

class partner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p class="align-self-center mt-5 
    mb-2 h1 text-white">Partner</p>
    <hr class="align-self-center red-hr" />
    <div
      class="d-flex flex-row partner-imgs align-items-center align-self-center"
    >
      <div class="featured-flex">
        <img src="assets/mozilla.svg" />
      </div>
      <div class="featured-flex">
        <img src="assets/google.svg" />
      </div>
      <div class="featured-flex">
        <img src="assets/mozilla.svg" />
      </div>
      <div class="featured-flex">
        <img src="assets/google.svg" />
      </div>
      <div class="featured-flex">
        <img src="assets/mozilla.svg" />
      </div>
    </div>`;
  }
}

customElements.define('header-nav', header);
customElements.define('custom-footer', footer);
customElements.define('partner-footer', partner);

const showMobileMenu = () => {
  const burger = document.querySelector('.hamburger-container');
  burger.classList.add('change');
  burger.style.position = 'fixed';

  const menu = document.getElementById('mobile-menu');
  menu.style.height = '100%';
  menu.style.width = '100%';
};

const closeMobileMenu = () => {
  const burger = document.querySelector('.hamburger-container');
  burger.classList.remove('change');
  burger.style.position = 'absolute';

  const menu = document.getElementById('mobile-menu');
  menu.style.height = '0';
};

export const createHeader = (links) => {
  const header = document.createElement('header');
  header.classList.add('main-header', 'px-2');
  header.innerHTML = `<header-nav
  style="display: contents"
  links=${links}
  ></header-nav>`;

  const mobileLinks = links.map((link, i) => {
    if (i > 0) {
      return `<a href="#${link}" class="mobile-link text-capitalize">
      ${link}</a>`;
    } else {
      return `<a href="${link}.html" class="mobile-link text-capitalize">
      ${link}</a>`;
    }
  });

  const mobileLinksMK = mobileLinks.join('\n');

  document.body.insertAdjacentElement('afterbegin', header);

  const burger = document.querySelector('.hamburger-container');

  burger.addEventListener('click', () => {
    if (burger.classList.contains('change')) {
      closeMobileMenu();
    } else {
      showMobileMenu();
      const aMobileLink = document.querySelectorAll('.mobile-link');
      aMobileLink.forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });
    }
  });

  const mobileOverlay = document.createElement('div');
  mobileOverlay.classList.add('mobile-overlay');
  mobileOverlay.setAttribute('id', 'mobile-menu');
  mobileOverlay.innerHTML = `
    <div class="overlay-content d-flex flex-column">
    ${mobileLinksMK}
    </div>`;
  document.body.insertAdjacentElement('afterbegin', mobileOverlay);
};

export const createFooter = (showPartner, createFooter, bg) => {
  if (showPartner) {
    const partnerSection = document.querySelector('.partner');
    const partnerDiv = document.createElement('div');
    partnerDiv.innerHTML = `<partner-footer class="container-md 
    d-flex flex-column"></partner-footer>`;
    partnerSection.appendChild(partnerDiv);
  }

  if (createFooter) {
    const footer = document.createElement('footer');
    footer.classList.add('main-footer');
    if (bg) {
      footer.classList.add('footer-dark', 'text-white');
    }
    footer.innerHTML = `<custom-footer></custom-footer>`;
    document.body.insertAdjacentElement('beforeend', footer);
  }
};

export const isSmallScreen = () => {
  const screenSize = document.documentElement.clientWidth || window.innerWidth;
  if (screenSize < 768) {
    return true;
  }
  return false;
};
