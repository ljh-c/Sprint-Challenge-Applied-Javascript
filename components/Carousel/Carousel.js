/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const left = document.createElement('div');
  left.classList.add('left-button');
  left.textContent = ' < ';
  left.addEventListener('click', event => {

    // * * * * * * * THIS IMPLEMENTATION CANNOT BE ANIMATED: start

    const pos0 = event.target.nextElementSibling; 
    carousel.insertBefore(pos0, right);   
    // the same node cannot exist in multiple positions, 
    // so it is removed and placed at the end

    // * * * * * * * THIS IMPLEMENTATION CANNOT BE ANIMATED: end
  })
  carousel.appendChild(left);

  const img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg';
  img1.classList.add('fade');
  img1.classList.add('active');
  carousel.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('src', './assets/carousel/computer.jpeg');
  img2.classList.add('active');
  img2.classList.add('fade');
  carousel.appendChild(img2);

  const img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg';
  img3.classList.add('active');
  img3.classList.add('fade');
  carousel.appendChild(img3);

  const img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg';
  img4.classList.add('fade');
  img4.classList.add('active');
  carousel.appendChild(img4);

  const right = document.createElement('div');
  right.classList.add('right-button');
  right.textContent = ' > ';
  right.addEventListener('click', event => {

    // * * * * * * * THIS IMPLEMENTATION CANNOT BE ANIMATED: start

    const pos4 = event.target.previousElementSibling;
    left.insertAdjacentElement('afterend', pos4);

    // * * * * * * * THIS IMPLEMENTATION CANNOT BE ANIMATED: end
  })
  carousel.appendChild(right);

  return carousel;
}

const carouselParent = document.querySelector('.carousel-container');
const carousel = Carousel();
carouselParent.appendChild(carousel);

const pos0 = document.querySelector('img');
const pos1 = pos0.nextElementSibling;
console.log(pos1);