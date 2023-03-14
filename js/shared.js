export class header extends HTMLElement {
  connectedCallback() {
    const { links: linksM } = this.attributes;
    const links = linksM.value.split(",");

    const aLinks = links.map((link, i) => {
      if (i > 0) {
        return `<li class="nav-item">
        <a class="nav-link text-capitalize" href="#${link}">${link}</a>
      </li>`;
      }
    });

    const aLinksMK = aLinks.join("\n")

    console.log(aLinksMK);

    this.innerHTML = `<nav class="navbar navbar-light bg-light navbar-expand-md">
      <div class="container-fluid">
      <a class="navbar-brand ps-md-5 ms-md-5"
        ><img class="logo" src="assets/apple.svg"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="custom-nav collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-lg-5 pe-md-5">
          <li class="nav-item">
            <a class="nav-link active text-capitalize" aria-current="page" href="${links[0]}.html">${links[0]}</a>
          </li>
          ${aLinksMK}
        </ul>
        <div class="ms-lg-5 ps-md-5">
          <p class="navbar-right-btn p-3">JMF Chess</p>
        </div>
      </div>
    </div>
    </nav>`;
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
  header.classList.add("w-100");
  header.innerHTML = `<header-nav
  links=${links}
  ></header-nav>`;
  document.body.insertAdjacentElement("afterbegin", header);
};

export const createFooter = (bg) => {
  const footer = document.createElement("footer");
  if (bg) {
    footer.classList.add("footer-dark", "text-white");
  }
  footer.innerHTML = `<custom-footer></custom-footer>`;
  document.body.insertAdjacentElement("beforeend", footer);
};
