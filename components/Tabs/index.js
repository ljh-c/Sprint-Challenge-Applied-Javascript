// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    // console.log(response.data.topics);
    const topics = response.data.topics;
    const theTopics = document.querySelector('.topics');
    topics.forEach(topic => {
      const aTab = Tab(topic);
      theTopics.appendChild(aTab);
    });
  })
  .catch(error => {
    console.log('Data not returned', error);
  });

function Tab(topicStr) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topicStr;
  let topic = topicStr;

  if (topic.indexOf('.') !== -1) {
    topic = topicStr.slice(0, topic.indexOf('.'));
    // 'node.js' => 'node'
  }

  tab.setAttribute('data-topic', topic)
  tab.addEventListener('click', event => {
    // const selection = document.querySelectorAll(`.card[data-topic=${topic}]`);
    
    // selection.forEach(elem => {
    //   elem.style.display = 'none';
    // });

    const allCards = document.querySelectorAll('.card');

    const cardArray = Array.from(allCards);
    // console.log(cardArray[0]);
    const cardsToHide = cardArray.filter(card => card.dataset.topic !== topic);
    cardsToHide.forEach(elem => {
      elem.style.display = 'none';
    })
  });

  return tab;
}