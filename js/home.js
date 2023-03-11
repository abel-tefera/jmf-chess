/* eslint-disable */

import { createFooter, createHeader, footer, header } from "./shared.js";

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

const programData = [
  {
    title: "CSS",
    imgSrc: "assets/css.svg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "CSS",
    imgSrc: "assets/css.svg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "CSS",
    imgSrc: "assets/css.svg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "CSS",
    imgSrc: "assets/css.svg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "CSS",
    imgSrc: "assets/css.svg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
];

const featuredData = [
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
  {
    featuredName: "Dr House",
    featuredSub: "Medical Doctor, MD",
    featuredDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque, ducimus.`,
    featuredImgSrc: "assets/pic.png",
  },
];

class programCard extends HTMLElement {
  connectedCallback() {
    const { title, imgSrc, description } = this.attributes;
    this.innerHTML = `<div
          class="d-flex flex-md-column align-items-center program-content"
        >
          <img src="${imgSrc.value}" class="card-img mx-2 mx-md-0" />
          <p class="card-title fs-4 fw-bolder mx-2 mx-md-0 my-1">${title.value}</p>
          <p class="card-subtitle fs-6 mx-2 mx-md-0">
            ${description.value}
          </p>
        </div>`;
  }
}

class featuredCard extends HTMLElement {
  connectedCallback() {
    const { featuredName, featuredSub, featuredDesc, featuredImgSrc } =
      this.attributes;

    this.innerHTML = `<div
      class="row position-relative justify-content-between mx-2"
    >
      <div class="col-6 featured-img-col p-0">
        <img class="featured-img p-0" src="${featuredImgSrc.value}" />
      </div>
      <div class="col-6 px-0 ps-3">
        <div class="flex-column featured-content">
          <h3 class="featured-title mt-2 mt-lg-0">${featuredName.value}</h3>
          <h6 class="featured-sub h6">${featuredSub.value}</h6>
          <hr class="my-2" />
          <p class="featured-desc fs-6">
            ${featuredDesc.value}
          </p>
        </div>
      </div>
  </div>`;
  }
}

customElements.define("program-card", programCard);
customElements.define("featured-card", featuredCard);
// customElements.define("header-nav", header);
// customElements.define("custom-footer", footer);

const main = () => {
  createHeader([
    'about',
    'program',
    'speakers',
    'partner'
  ]);
  createFooter();
  for (const [i, program] of programData.entries()) {
    const { title, imgSrc, description } = program;
    const programItem = document.createElement("div");
    programItem.classList.add(
      "col-11",
      "col-md-3",
      "col-lg-2",
      "mx-md-1",
      "mx-lg-auto",
      "content-card",
      "align-self-center",
      "p-3",
      "my-3"
    );
    programItem.innerHTML = `<program-card
    i='${i}'
    title='${title}'
    imgSrc='${imgSrc}'
    description='${description}'
    >
    </program-card>`;

    const programContainer = document.querySelector(".program-container");
    programContainer.appendChild(programItem);
  }

  for (const [i, featured] of featuredData.entries()) {
    const { featuredName, featuredSub, featuredDesc, featuredImgSrc } =
      featured;
    const featuredItem = document.createElement("div");
    featuredItem.classList.add("col-lg-6", "col-sm-11", "col-md-9", "my-4");
    featuredItem.innerHTML = `<featured-card
    i='${i}'
    featuredName='${featuredName}'
    featuredSub='${featuredSub}'
    featuredDesc='${featuredDesc}'
    featuredImgSrc='${featuredImgSrc}'
    >
    </featured-card>`;

    const featuredContainer = document.querySelector(".featured-cards");
    featuredContainer.appendChild(featuredItem);
  }
};

main();
