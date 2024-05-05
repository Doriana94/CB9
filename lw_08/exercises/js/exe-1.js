const createTitle = () => {
    const titleEl = document.createElement('h1');

    titleEl.className = 'title';
    titleEl.textContent = 'My Store';

    return titleEl;
}




const createImage = () => {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = 'container';
    wrapperEl.textContent = '';

    
const imageEl = document.createElement('img');
    imageEl.className = 'image';
    imageEl.src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    imageEl.alt = '';

    wrapperEl.append(imageEl);
    return wrapperEl;
}

const createDescr = () => {
   const descrEl = document.createElement('p');
   
   descrEl.className = 'description';
   descrEl.textContent = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve. Price: `$109.95`;'

   return descrEl;

}

const rootEl = document.querySelector('.root');

 rootEl.append(createTitle(), createImage(), createDescr());



fetch ('https://fakestoreapi.com/products/1')
.then((res) => res.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})
// .finally(() =>{
//     console.log('La chiamata è andata a buon fine');
// })