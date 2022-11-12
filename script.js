let canvas = document.getElementById("canvas"),
    ctxCanv = canvas.getContext("2d");
let button = document.getElementById("button");
let imageData = [];
let image = new Image();
image.src = "image_1.png";
image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctxCanv.drawImage(image, 0, 0);

}












// Метод для загрузки картинки на сайт
// function getImageSrc(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             image.src = e.target.result;
//         }
//         reader.readAsDataURL(input.files[0]);
//     }

//     image.onload = function() {

//         ctxCanv.drawImage(img, 0, 0);
//         let imageData = context.getImageData(0, 0, 100, 100);
//     }
// }




// Рабочая форма для загрузки картинки через input
// var imgPreview = document.querySelector('.img-preview img');

// var loadImg = function(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function(e) {
//       imgPreview.src = e.target.result;
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }

// document.querySelector('#img').onchange = function() {
//   loadImg(this);
// }