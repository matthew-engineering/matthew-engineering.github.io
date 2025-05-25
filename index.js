/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.work__image-box.slider');
  if (!slider) return;
  const images = slider.querySelectorAll('.slider-image');
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);
});
