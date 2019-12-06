// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const head = document.createElement('div');
  head.classList.add('header');

  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = 'SMARCH 28, 2019';
  head.appendChild(date);

  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';
  head.appendChild(title);

  const weather = document.createElement('span');
  weather.classList.add('temp');
  weather.textContent = '98\xB0';
  head.appendChild(weather);

  return head;
}

const header = Header();

document.body.querySelector('.header-container').appendChild(header);