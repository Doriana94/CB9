const titleGen = (className, textContent) => {
  const titleDiv = document.createElement("div");
  const titleEl = document.createElement("h1");

  titleDiv.className = className;

  titleEl.textContent = textContent;

  titleDiv.append(titleEl);

  return titleDiv;
};

const dateGen = (className, textContent) => {
  const descEl = document.createElement("p");

  descEl.className = className;
  descEl.textContent = textContent;

  return descEl;
};

const imageGen = (className, src, alt) => {
  const imageEl = document.createElement("img");

  imageEl.className = className;
  imageEl.src = src;
  imageEl.alt = alt;

  return imageEl;
};

const btnGen = (className) => {
  const divEl = document.createElement("div");
  const buttonNext = document.createElement("button");
  const buttonPrev = document.createElement("button");

  divEl.className = className;
  buttonNext.className = "freccia";
  buttonPrev.className = "freccia";

  buttonNext.id = "btnNext";
  buttonPrev.id = "btnPrev";
  buttonNext.textContent = ">";
  buttonPrev.textContent = "<";

  divEl.append(buttonPrev, buttonNext);
  return divEl;
};

const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "TmaZvs7mrYiycwR4YwuYCM0aAzASb_Twq5W4xx6yefA";
const COLLECTION_ID = "1459961";
const SELECTOR_QUERY = "collection-photo";
let indexSlide = 0;
const ROOT_EL = document.querySelector("#root");

const imageEl = imageGen("image", "", "");
const descEl = dateGen("date", "");
ROOT_EL.append(descEl, imageEl);

const getImage = (indexSlide) => {
  fetch(
    `${BASE_URL}/collections/${COLLECTION_ID}/photos?query=${SELECTOR_QUERY}&client_id=${API_TOKEN}`
  )
    .then((res) => res.json())
    .then((photos) => {
      const image = document.querySelector(".image");
      const date = document.querySelector(".date");
      image.src = photos[indexSlide].urls.regular;
      image.alt = photos[indexSlide].alt_description;
      date.textContent = photos[indexSlide].created_at;
    })
    .catch((error) =>
      console.error("Errore durante il caricamento delle immagini:", error)
    );
};

getImage(indexSlide);
const buttonEl = btnGen("button");
ROOT_EL.appendChild(buttonEl);
const buttonNext = document.querySelector("#btnNext");
buttonNext.addEventListener("click", () => {
  if (indexSlide + 1 > 9) indexSlide = 0;
  else indexSlide += 1;
  getImage(indexSlide);
});
const buttonPrev = document.querySelector("#btnPrev");
buttonPrev.addEventListener("click", () => {
  if (indexSlide - 1 < 0) indexSlide = 9;
  else indexSlide -= 1;
  getImage(indexSlide);
});
