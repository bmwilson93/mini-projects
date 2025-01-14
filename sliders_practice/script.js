const TOTAL_SLIDES = 4;
let currentIndex = 0;

const dots = document.querySelectorAll(".dots button");
const images = document.querySelectorAll('.images img');

const showSlide = (index) => {
  images.forEach(image => image.style.display = "none");
  dots.forEach(dot => dot.style.backgroundColor = "transparent");

  images[index].style.display = 'block';
  dots[index].style.backgroundColor = '#000';
}

const gotoSlide = (index) => {
  currentIndex = (TOTAL_SLIDES + index) % TOTAL_SLIDES;
  showSlide(currentIndex);
}

const next = () => {
  gotoSlide(currentIndex + 1);
}

const prev = () => {
  console.log('test')
  gotoSlide(currentIndex - 1);
}

const dotClicked = (index) => {
  gotoSlide(index);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => dotClicked(index));
});

showSlide(currentIndex);