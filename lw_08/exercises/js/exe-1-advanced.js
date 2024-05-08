const createProduct = (product) => {
  const containerEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const imageEl = document.createElement("img");
  const descrEl = document.createElement("p");
  const priceEl = document.createElement("p");

  containerEl.className = "main--container";
  titleEl.className = "title";
  imageEl.className = "image";
  descrEl.className = "description";
  priceEl.className = "price--product";
  imageEl.src = product.image;
  imageEl.alt = product.title;
  titleEl.textContent = product.title;
  descrEl.textContent = product.description;
  priceEl.textContent = product.price;

  containerEl.append(titleEl, imageEl, descrEl, priceEl);
  return containerEl;
};

const rootEl = document.querySelector(".root");

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const product = createProduct(data);
    
        rootEl.append(product);
  })
  .catch((error) => {
    console.log(error);
  });

