/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

/* eslint-disable */
export class header extends HTMLElement {
  connectedCallback() {
    const { links: linksM } = this.attributes;
    const links = linksM.value.split(",");

    const aLinks = links.map((link, i) => {
      if (i > 0) {
        return `<li class="mx-4">
        <a
          class="disable-default-link text-capitalize"
          aria-current="page"
          href="#${link}"
          >${link}</a
        >
      </li>`;
      }
    });

    const aLinksMK = aLinks.join("\n");

    console.log(aLinksMK);

    // this.innerHTML = `<nav class="navbar
    // navbar-light bg-light navbar-expand-md">
    //   <div class="container-fluid">
    //   <a class="navbar-brand ps-md-5 ms-md-5"
    //     ><img class="logo" src="assets/apple.svg"
    //   /></a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target="#navbarNavDropdown"
    //     aria-controls="navbarNavDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="custom-nav collapse navbar-collapse" id="navbarNavDropdown">
    //     <ul class="navbar-nav me-lg-5 pe-md-5">
    //       <li class="nav-item">
    //         <a class="nav-link active text-capitalize"
    //         aria-current="page" href="${links[0]}.html">${links[0]}</a>
    //       </li>
    //       ${aLinksMK}
    //     </ul>
    //     <div class="ms-lg-5 ps-md-5">
    //       <p class="navbar-right-btn p-3">JMF Chess</p>
    //     </div>
    //   </div>
    // </div>
    // </nav>`;

    this.innerHTML = `<nav class="hamburger mx-3" id="open-menu">
    <img alt="menu" src="assets/hamburger.svg" class="hamburger-img" />
  </nav>
  <a class="logo-link ps-md-5 ms-md-5">
  <img class="logo" src="assets/apple.svg" /></a>

  <div
    class="links-container container-fluid 
    d-flex justify-content-end align-items-center"
  >
    <ul class="d-flex flex-row disable-default me-lg-5 pe-md-5">
      <li class="mx-4">
        <a
          class="disable-default-link text-capitalize"
          aria-current="page"
          href="${links[0]}.html"
          >${links[0]}</a
        >
      </li>
    ${aLinksMK}
    </ul>
    <div class="ms-lg-5 ps-md-5 pe-md-5 me-lg-5">
      <p class="navbar-right-btn m-0 p-0">JMF Chess</p>
    </div>
  </div>
    </header>`;
  }
}

export class footer extends HTMLElement {
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

customElements.define("header-nav", header);
customElements.define("custom-footer", footer);

export const createHeader = (links) => {
  const header = document.createElement("header");
  header.classList.add("main-header", "px-2");
  header.innerHTML = `<header-nav
  style="display: contents"
  links=${links}
  ></header-nav>`;
  document.body.insertAdjacentElement("afterbegin", header);

  const mobileOverlay = document.createElement('div');
  mobileOverlay.classList.add('mobile-overlay');
  mobileOverlay.setAttribute('id', 'mobile-menu');
  mobileOverlay.innerHTML = `<a href="javascript:void(0)" class="closebtn" id="close-menu"
  >&times;</a
>
<div class="overlay-content">
  <a href="#portfolio" onclick="closeMobileMenu()">Portfolio</a>
  <a href="#about" onclick="closeMobileMenu()">About</a>
  <a href="#contact" onclick="closeMobileMenu()">Contact</a>
</div>`
};

export const createFooter = (bg) => {
  const footer = document.createElement("footer");
  if (bg) {
    footer.classList.add("footer-dark", "text-white");
  }
  footer.innerHTML = `<custom-footer></custom-footer>`;
  document.body.insertAdjacentElement("beforeend", footer);
};
