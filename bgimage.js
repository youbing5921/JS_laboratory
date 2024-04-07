const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bgImage img");
bgImage.src = `images/${chosenImage}`;
bgImage.style.width = '700px';
console.dir(bgImage);