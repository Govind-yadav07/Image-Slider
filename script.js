const images = [
    "image/image1.JPG",
    "image/image2.WEBP",
    "image/image3.WEBP",
    "image/image4.JPG",
    "image/image5.JPEG"
];
let current = 0;
const sliderImage = document.getElementById('slider-image');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
function showImage(index) {
    if(index >= images.length) current = 0;
    if(index < 0) current = images.length - 1;
    sliderImage.src = images[current];
}
nextButton.addEventListener('click', () => {
    current++;
    showImage(current);
});
prevButton.addEventListener('click', () => {
    current--;
    showImage(current);
});
setInterval(() => {
    current++;
    showImage(current);
}, 5000);
showImage(current);
