const imageContainer = document.getElementById("imageContainer");
const count = 10;
let limit = count;
let index = 0;
let container = "";

const apiUrl = `https://jsonplaceholder.typicode.com/photos`;
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayPhotos(data);
  } catch (error) {
    //catch error
  }
}

async function displayPhotos(data) {
  for (let i = index; i < limit; i++) {
    container += `<img
        src="${data[i].url}"
        alt="${data[i].title}"
      />`;
    index += 1;
  }
  limit += count;
  imageContainer.innerHTML = container;
}

window.onload = function () {
  getPhotos();
};

window.addEventListener('scroll', ()=>{
  loading();
})


function loading(){
  let currentScroll = window.innerHeight + window.scrollY;
  let max = document.body.offsetHeight -500;
  if(currentScroll >= max){
    setTimeout(function(){
      getPhotos();
      max += currentScroll;
    }, 3)
  }
}

// window.onscroll = function (e) {
//   if (
//     window.innerHeight + window.scrollY >=
//     document.body.offsetHeight - 1000
//   ) {
//     getPhotos();
//   }
// };
