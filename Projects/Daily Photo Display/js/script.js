const createWebApp = (className ) => {
    const sectionEl = document.createElement('section')
    sectionEl.className = className;
    return sectionEl
}

const ImageGen = (className, src, alt) => {
    const wrapperEl = document.createElement('div')
    const imageEl = docuemnt.createElement('image')
    wrapperEl.className = className
    imageEl.className = className
    imageEl.src = src
    imageEl.alt = alt;

    wrapperEl.append(imageEl)
    return imageEl
}



const BASE_URL = 'https://api.unsplash.com/photos/random';
const API_TOKEN = 'TmaZvs7mrYiycwR4YwuYCM0aAzASb_Twq5W4xx6yefA';
const SEARCH_QUERY = 'photo';

const ROOT_EL = document.querySelector('#root');


 fetch('https://api.unsplash.com/search/photos?query=daily&client_id=TmaZvs7mrYiycwR4YwuYCM0aAzASb_Twq5W4xx6yefA')
.then((res) => res.json())
.then((data) => {
  console.log(data)
})
