document.addEventListener('DOMContentLoaded', function () {
  const payeverImage = document.getElementById('payever-logo');
  const imageRepalcement = document.getElementById('replacement');
  const imageContainer = document.getElementById('word-logo');
  const dynamicImage = document.getElementById('word-img');

  const imageUrls = [
    '',
    './assets/successful.svg',
    './assets/innovative.svg',
    './assets/collaborative.svg',
    './assets/productive.svg',
    './assets/efficient.svg',
    '',
    '',
    './assets/rewarding.svg',
    './assets/sustainable.svg',
    '',
  ];

  let currentIndex = 0;

  function changeImage() {
    if (currentIndex <= imageUrls.length) {
      dynamicImage.src = imageUrls[currentIndex];
      currentIndex++;
      if (currentIndex == 10) {
        payeverImage.src = "";
        imageRepalcement.textContent = "it"
      } else {
        payeverImage.src = "./assets/payever-logo.png";
        imageRepalcement.textContent = ""
      }
    }
  }

  setTimeout(function () {
    const imageInterval = setInterval(changeImage, 2730);
    if (currentIndex === imageUrls.length) {
      clearInterval(imageInterval);
    } else {
      changeImage();
    }
  }, 3500);

});

const typedFirst = new Typed('#first', {
  strings: ['Make'],
  typeSpeed: 35,
  startDelay: 500,
  backDelay: 1000,
  backSpeed: 35,
  loopCount: 1,
  showCursor: false,
});













