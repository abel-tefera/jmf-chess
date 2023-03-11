export class header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-light bg-light navbar-expand-md">
      <div class="container-fluid">
      <a class="navbar-brand ps-md-5 ms-md-5"
        ><img class="logo" src="assets/apple-seeklogo.com.svg"
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
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Program</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Speakers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Partner</a>
        </li>
        </ul>
        <div class="ms-lg-5 ps-md-5">
          <p class="navbar-right-btn p-3">CC Campain</p>
        </div>
      </div>
    </div>
    </nav>`;
  }
}

export class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container-fluid">
      <div class="w-75 d-flex flex-row py-5 mx-auto justify-content-center">
        <div class="footer-logo align-self-center">
          <img src="assets/google.svg" />
        </div>
        <div class="footer-content d-flex flex-column ps-4">
          <p class="fs-4">Lorem ipsum dolor sit amet consectetur.</p>
          <p class="fs-6">
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

export const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("w-100");
  header.innerHTML = `<header-nav></header-nav>`;
  document.body.insertAdjacentElement("afterbegin", header);
};

export const createFooter = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `<custom-footer></custom-footer>`;
  document.body.insertAdjacentElement("beforeend", footer);
};