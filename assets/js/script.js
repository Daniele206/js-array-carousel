// element
const listImg = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

const imgContainer = document.querySelector('.img-container');

let counter = 0;
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');


for(let i = 0; i < listImg.length; i++){
  const img = listImg[i];
  imgContainer.innerHTML += `
  <img class="img hide" src="${img}">
  `
};

const imgCollection = document.getElementsByClassName('img');

console.log(imgCollection);

imgCollection[counter].classList.remove('hide');

topBtn.addEventListener('click', function(){
  if(counter > 0){
    imgCollection[counter].classList.add('hide');
    counter--
    imgCollection[counter].classList.remove('hide');
  }
})

bottomBtn.addEventListener('click', function(){
  if(counter < (imgCollection.length - 1)){
    imgCollection[counter].classList.add('hide');
    counter++
    imgCollection[counter].classList.remove('hide');
  }
})