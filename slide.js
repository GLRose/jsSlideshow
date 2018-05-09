// var imageArray = [{
//         name: 'Angry',
//         image: '../slideimg/img1.jpg'
//     },
//     {
//         name: 'Cat',
//         image: '../slideimg/img2.jpg'
//     },
//     {
//         name: 'People',
//         image: '../slideimg/img3.jpg'
//     }
// ];

// var arrayLength = imageArray.length;


// function cycle() {
//     for (var i = 0; i < arrayLength; i++) {
//         alert(imageArray[i]);
//     }
// }

var i = 0;
var images = [];
var time = 3000;
var clock;


images[0] = '../slideimg/img1.jpg';
images[1] = '../slideimg/img2.jpg';
images[2] = '../slideimg/img3.jpg';

function pause() {
    clearTimeout(clock);
}

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    clock = setTimeout("changeImg()", time);
}
window.onload = changeImg;