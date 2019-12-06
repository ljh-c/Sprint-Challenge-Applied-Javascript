// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.dir(response.data.articles);
    const subjects = Object.keys(response.data.articles)
    console.log(subjects);
    // console.dir(response.data.articles[subjects[2]]);

    subjects.forEach((topic, index, array) => {
      const subjectArticles = response.data.articles[topic];
      const theTopic = array[index];
      // console.log(theTopic);
      subjectArticles.forEach(articleObj => {
        const newCard = Card(articleObj, theTopic);
        const cardsParent = document.querySelector('.cards-container');
        cardsParent.appendChild(newCard);
      });
    })
  })
  .catch(error => {
    console.log('Data not returned', error);
  });

function Card(articleObj, topic) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-topic', topic)

  const title = document.createElement('div');
  title.classList.add('headline');
  title.textContent = articleObj.headline;
  card.appendChild(title);

  const author = document.createElement('div');
  author.classList.add('author');
  card.appendChild(author);

  const imgParent = document.createElement('div');
  imgParent.classList.add('img-container');
  author.appendChild(imgParent);

  const avatar = document.createElement('img');
  avatar.src = articleObj.authorPhoto;
  imgParent.appendChild(avatar);

  const credit = document.createElement('span');
  credit.textContent = articleObj.authorName;
  author.appendChild(credit);

  return card;
}