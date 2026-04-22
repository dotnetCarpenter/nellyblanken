const glitchImage = document.querySelector(".glitch-image");


const images = [],
  xfade = [{ opacity: 0 }, { opacity: 1 }];

let counter = 0,
  currentAnimation;

function addToSlideShow(img) {
  images.push(img);
  startShow();
}

function startShow() {
  if (currentAnimation) return;
  playShow();
}

function playShow() {
  const numberOfImages = images.length;
  const currentImage = images.at(counter++ % numberOfImages);

  if (currentAnimation) {
    // console.debug("hide previous image");
    currentAnimation.reverse();
  }

  // console.debug("Show image", currentImage.src.slice(116, 140));
  currentAnimation = currentImage.animate(xfade, {
    duration: 2000,
    fill: "forwards",
  });

  setTimeout(playShow, 6000);
}