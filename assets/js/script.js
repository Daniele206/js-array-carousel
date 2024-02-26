// array
const listImg = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

// variables
const imgContainer = document.querySelector('.img-container');
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');
let counter = 0;

// array-className
const imgCollection = document.getElementsByClassName('img');
const imgPreviewCollection = document.getElementsByClassName('img-preview');

// code

for(let i = 0; i < listImg.length; i++){
  const img = listImg[i];
  imgContainer.innerHTML += `
  <img class="img hide" src="${img}">
  `
};

imgCollection[counter].classList.remove('hide');
imgPreviewCollection[counter].classList.remove('shadow');
imgPreviewCollection[counter].classList.add('selected');


topBtn.addEventListener('click', function(){
  if(counter > 0){
    imgCollection[counter].classList.add('hide');
    imgPreviewCollection[counter].classList.add('shadow');
    imgPreviewCollection[counter].classList.remove('selected');
    counter--
    imgCollection[counter].classList.remove('hide');
    imgPreviewCollection[counter].classList.remove('shadow');
    imgPreviewCollection[counter].classList.add('selected');
  }else if(counter === 0){
    imgCollection[counter].classList.add('hide');
    imgPreviewCollection[counter].classList.add('shadow');
    imgPreviewCollection[counter].classList.remove('selected');
    counter = (imgCollection.length -1);
    imgCollection[counter].classList.remove('hide');  
    imgPreviewCollection[counter].classList.remove('shadow');
    imgPreviewCollection[counter].classList.add('selected');
  };
});

bottomBtn.addEventListener('click', function(){
  if(counter < (imgCollection.length - 1)){
    imgCollection[counter].classList.add('hide');
    imgPreviewCollection[counter].classList.add('shadow');
    imgPreviewCollection[counter].classList.remove('selected');
    counter++
    imgCollection[counter].classList.remove('hide');
    imgPreviewCollection[counter].classList.remove('shadow');
    imgPreviewCollection[counter].classList.add('selected');
  }else if(counter === (imgCollection.length - 1)){
    imgCollection[counter].classList.add('hide');    
    imgPreviewCollection[counter].classList.add('shadow');
    imgPreviewCollection[counter].classList.remove('selected');
    counter = 0;
    imgCollection[counter].classList.remove('hide');
    imgPreviewCollection[counter].classList.remove('shadow');
    imgPreviewCollection[counter].classList.add('selected');
  };
});