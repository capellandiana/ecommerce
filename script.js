var i = 0;
var images = [];
var time = 3000;

images[0] = 'image/upsidecat.jpg';
images[1] = 'image/catdad.jpg';
images[2] = 'image/cat1.jpg';
images[3] = 'image/goldenkots.jpg'
images[4] = 'image/catmom.jpg'
images[5] = 'image/kots2.jpg'

function changeImg() {
    document.slide.src = images[i];

if(i < images.length -1) {
    i++;
}
else {
    i = 0;
}

setTimeout("changeImg()", time);


}
window.onload = changeImg;

document.images('images/cat1.jpg').alt='catupsidedown'