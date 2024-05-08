const rootEl = document.querySelector(".root");

const createContainer = () => {
  const wrapperEl = document.createElement("div");
  wrapperEl.className = "container";
  
  return wrapperEl;
}

const createTitle = (product) => {
  const titleEl = document.createElement("h1");

  titleEl.className = "title";
  titleEl.textContent = product.title;

  return titleEl;
};

const createImage = (product) => {
  
  const imageEl = document.createElement("img");
  imageEl.className = "image";
  imageEl.src = product.image;
  imageEl.alt = product.title;

  return imageEl;
};

const createDescr = (product) => {
  const descrEl = document.createElement("p");

  descrEl.className = "description";
  descrEl.textContent = product.description;
  
  return descrEl;
};

const createPrice = (product) => {
  const priceEl = document.createElement("p")

  priceEl.className = 'price';
  priceEl.textContent  = product.price;

  return priceEl;
}


fetch("https://fakestoreapi.com/products/1")
.then((res) => res.json())
.then((data) => {
const wrapper= createContainer();
const title = createTitle(data);
const image = createImage(data);
const description = createDescr(data); 
const price = createPrice(data);

wrapper.append(title, image, description, price);
rootEl.append(wrapper);
  })
  

  //ESERCIZIO 2//

  const createMessageError = () => {
    const error = document.createElement('h3');
    error.textContent = 'La chiamata non è andata a buon fine. Riprova!';
    
    return error;
  }

  const createMessageNotError = () => {
    const notError = document.createElement('h3');
    notError.textContent = 'La chiamata è andata a buon fine. Ottimo lavoro!';

    return notError;
  }

fetch("https://fakestoreapi.com/products/1")
.then((res) => res.json())
.then((data) => {
  const notError = createMessageNotError(data);
  rootEl.append(notError);
  const error = createMessageError(data); 
  rootEl.append(error);
})
