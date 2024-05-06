const createProduct = () => {
  const containerEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const imageEl = document.createElement("img");
  const descrEl = document.createElement("p");

  containerEl.className = "main--container";
  titleEl.className = "title";
  titleEl.textContent = "My Store";
  imageEl.className = "image";
  imageEl.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  imageEl.alt = "";
  descrEl.className = "description";
  descrEl.textContent =
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve. Price: `$109.95`;";

  containerEl.append(titleEl, imageEl, descrEl);
  return containerEl;
};

const rootEl = document.querySelector(".root");

rootEl.append(createProduct());

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
//   .finally(() => {
//     console.log("La chiamata è andata a buon fine");
//   });
