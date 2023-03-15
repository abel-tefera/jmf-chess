/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

/* eslint-disable */

import { createFooter, createHeader } from "./shared.js";

const programData = [
  {
    title: "Play",
    imgSrc: "assets/pawn.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "Learn",
    imgSrc: "assets/horse.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "Tactics",
    imgSrc: "assets/chess-board.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "Check",
    imgSrc: "assets/queen.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
  {
    title: "Mate",
    imgSrc: "assets/king.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
    harum odit saepe corrupti repudiandae vel.`,
  },
];

const featuredData = [
  {
    featuredName: "Magnus Carlsen",
    featuredSub: "Grand Master",
    featuredDesc: `GM Magnus Carlsen is the current world chess champion. 
    To many people, he\`s the best to ever play the game.`,
    featuredImgSrc: "assets/magnus.jpeg",
  },
  {
    featuredName: 'Ian "Nepo"',
    featuredSub: "Grand Master",
    featuredDesc: `GM Ian Nepomniachtchi is a Russian super grandmaster 
    who won the \`21 Candidates Tournament.
    `,
    featuredImgSrc: "assets/Ian.png",
  },
  {
    featuredName: "Ding Liren",
    featuredSub: "Grand Master",
    featuredDesc: `Ding Liren is a Chinese super grandmaster 
    who will play against GM Ian Nepo in the \`23 World Championship.`,
    featuredImgSrc: "assets/ding.png",
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
          <p class="card-title fs-4 fw-bolder mx-2 mx-md-0 my-1 text-md-center">
          ${title.value}</p>
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
      <div class="d-flex justify-content-center col-6 featured-img-col p-0">
        <img class="featured-img p-0" src="${featuredImgSrc.value}" />
      </div>
      <div class="col-6 px-0 ps-1">
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

const featuredContainer = document.querySelector(".featured-cards");
const programContainer = document.querySelector(".program-container");

let isScreenCurrentlySmall;
let moreIsSeen;

const isSmallScreen = () => {
  const screenSize = document.documentElement.clientWidth || window.innerWidth;
  if (screenSize < 992) {
    return true;
  }
  return false;
};

const populateFeatured = () => {
  const lastBtnClickHandler = (init, btnEl) => {
    if (!moreIsSeen) {
      if (!init) {
        generateFeaturedCards(featuredData.length - 1, 2);
        moreIsSeen = true;
        btnEl.innerHTML = "See Less";
      } else {
        btnEl.classList.add("btn", "btn-light", "w-75", "see-more-btn");
        btnEl.setAttribute("type", "button");
        btnEl.innerHTML = "See More";
      }
    } else if (moreIsSeen) {
      featuredContainer.innerHTML = "";
      generateFeaturedCards(1);
      moreIsSeen = false;
      btnEl.innerHTML = "See More";
    }
    featuredContainer.insertAdjacentElement("beforeend", btnEl);
  };

  if (isSmallScreen()) {
    generateFeaturedCards(1);

    const lastBtn = document.createElement("button");

    lastBtn.onclick = () => {
      lastBtnClickHandler(false, lastBtn);
    };
    lastBtnClickHandler(true, lastBtn);
  } else {
    generateFeaturedCards();
    isScreenCurrentlySmall = false;
  }
};

const generateFeaturedCards = (end = featuredData.length - 1, start = 0) => {
  for (let i = start; i <= end; i++) {
    const { featuredName, featuredSub, featuredDesc, featuredImgSrc } =
      featuredData[i];
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

    featuredContainer.appendChild(featuredItem);
  }
};

const main = () => {
  createHeader(["about", "program", "players", "partner"]);
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

    programContainer.appendChild(programItem);
  }

  populateFeatured();
};

main();

window.onresize = () => {
  if (isSmallScreen() && !isScreenCurrentlySmall) {
    featuredContainer.innerHTML = "";
    populateFeatured();
    isScreenCurrentlySmall = true;
  } else if (!isSmallScreen() && isScreenCurrentlySmall) {
    featuredContainer.innerHTML = "";
    populateFeatured();
    isScreenCurrentlySmall = false;
  }
};
