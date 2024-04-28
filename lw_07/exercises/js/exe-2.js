const genImageCardEl = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card--image";
  imageEl.src = imageData.urls.small;
  imageEl.alt = imageData.alt_description;

  imageEl.addEventListener("click", () => {
    window.open(imageData.urls.full, "_blank").focus();
  });

  return imageEl;
};

const genImageListEl = () => {
  const wrapperEl = document.createElement("div");

  wrapperEl.className = "card--list";

  return wrapperEl;
};

const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "wDXQAagn2wnXHkg7A_3nqwSIYDJ9SicxLKLnisDp1B0";
const SEARCH_QUERY = "cat";
const rootEl = document.querySelector("#root");

const wrapperEl = document.createElement("form");
const inputEl = document.createElement("input");
const buttonEl = document.createElement("button");

wrapperEl.className = "input--elements";
inputEl.placeholder = "Cerca immagine";
buttonEl.textContent = "Cerca";

wrapperEl.append(inputEl, buttonEl);
rootEl.append(wrapperEl);

fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}`)
  .then((res) => res.json())
  .then((data) => {
    const listData = data.results;
    const imageListEl = genImageListEl();

    listData.map((photo) => {
      const imageCardEl = genImageCardEl(photo);

      imageListEl.append(imageCardEl);
    });

    rootEl.append(imageListEl);
  });
