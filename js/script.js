const imageContainer = document.getElementById("imageContainer");
const count = 10;
let oldNumber = 0;
let newNumber = 10;
let limit = count;
let index = 0;

const apiUrl = `https://jsonplaceholder.typicode.com/photos`;
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayPhotos(data);
    oldNumber += 10;
  } catch (error) {
    //catch error
  }
}

let container = "";
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

window.addEventListener("scroll", () => {
  if (newNumber == oldNumber) {
    loading();
    newNumber += 10;
  }
  oldNumber += 1;
  if (oldNumber > newNumber) {
    newNumber = oldNumber;
  }
});

function loading() {
  let currentScroll = window.innerHeight + window.scrollY;
  let max = document.body.offsetHeight - 500;
  if (currentScroll >= max) {
    getPhotos();
    max += currentScroll;
  }
}
