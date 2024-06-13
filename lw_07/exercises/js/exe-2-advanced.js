const genImageCardEl = (imageData) => {
  const imgWrapEl = document.createElement("div");
    const imageEl = document.createElement("img");

    imgWrapEl.className = 'image-wrapper';
    imageEl.className = "card--image";
    imageEl.src = imageData.urls.small;
    imageEl.alt = imageData.alt_description;
  
    
    imgWrapEl.append(imageEl);
    
    imageEl.addEventListener("click", () => {
      window.open(imageData.urls.full);
    });
    return imageEl;

  };
  

  const genImageListEl = () => {
    const wrapperEl = document.createElement("div");
  
    wrapperEl.className = "card--list";
  
    return wrapperEl;
  };


const modalGen = (imageData) => {
  const modalWrapEl = document.createElement("div");
  modalWrapEl.className = "modal-wrapper";

  const modalImgEl = document.createElement("img");
  modalImgEl.className = "modal-image";
  modalImgEl.src = imageData.urls.full;
  modalImgEl.alt = imageData.alt_description;

  const modalDescrEl = document.createElement("p");
  modalDescrEl.className = "description";
  modalDescrEl.textContent = `Title: ${imageData.breadcrumbs.description}`;

  const modalAuthorEl = document.createElement("p");
  modalAuthorEl.className = "author";
  modalAuthorEl.textContent = `Instagram: ${imageData.user.instagram_username}`;
 
 const modalLocEl = document.createElement('p');
 modalLocEl.className = 'location';
 modalLocEl.textContent = `Location: ${imageData.links.location}`;


  const modalBtnEl = documment.createElement("button");
  modalBtnEl.className = "modal-close";
  modalBtnEl.textContent = "Close";

  modalWrapEl.append(modalImgEl, modalDescrEl, modalAuthorEl, modalLocEl, modalBtnEl);

  modalBtnEl.addEventListener("click", () => removeModal());

  return modalWrapEl;
};



function removeModal() {
   const existsModal = document.querySelector(".modal-wrapper");
   if (existsModal) {
     existsModal.remove();
   }
}
  
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
  