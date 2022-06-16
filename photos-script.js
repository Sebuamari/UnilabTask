const frame = document.querySelector(".photos");
const randomNum = Math.floor(Math.random() * 100);

fetch('https://api.imgflip.com/get_memes')
  .then((response) => response.json())
  .then( data => {
      frame.innerHTML = `<img src="${data.data.memes[randomNum].url}"/>`
  })