var images = [];
var time = 4000;
var i = 0;

images[0] = "images/slide_photo1.png";
images[1] = "images/slide_photo2.png";
images[2] = "images/slide_photo3.png";


function changeImg(){
    document.slide.src = images[i];
    document.slide.className = 'slide_photo';

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}

window.onload=changeImg;