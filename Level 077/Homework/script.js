
const image = document.getElementById("image");
const next = document.getElementById("next");
const previous = document.getElementById("previous");


let i = 0;

const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg"
];


next.addEventListener("click", function(){
    i++;
    if (i == images.length){
        i = 0;
    }
    image.src = images[i];
});


prev.addEventListener("click", function(){
    i--;
    if (i == -1){
        i = images.length -1;
    }
    image.src = images[i];
});