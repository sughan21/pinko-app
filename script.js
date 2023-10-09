'use script';
// elements

const sliderImageContainer = document.querySelector('.slider-img');

const nameEle = document.querySelector('#inp-name');

const emailEle = document.getElementById("inp-email");

const subEle = document.getElementById("inp-subject");

const messageEle = document.getElementById("inp-message");

const resetBtn = document.querySelector('.reset');


// gv
const data = ["image_00.jpg","image_01.jpg","image_02.jpg","image_03.jpg"];
let index = 0;
const imgLocation = "./image/slider-image/";

// functions
setInterval(()=>{
  if(index === data.length-1){
    index = 0;
  }else if(index < data.length){
    index += 1;
  }
  console.log(sliderImageContainer.src)
  sliderImageContainer.src = imgLocation + data[index];
  
},2000)


resetBtn.addEventListener('click',()=>{
  nameEle.value = "";
  emailEle.value = "";
  subEle.value = "";
  messageEle.value = "";
})