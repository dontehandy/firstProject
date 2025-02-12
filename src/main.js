// Query selector variables
const posterImage = document.querySelector('.poster-img'); // posterImage is a query selector variable that selects the image element in the HTML
const posterTitle = document.querySelector('.poster-title'); // posterTitle is a query selector variable that selects the title element in the HTML
const posterQuote = document.querySelector('.poster-quote'); // posterQuote is a query selector variable that selects the quote element in the HTML
const showRandomPosterButton = document.querySelector('.show-random');
const makeYourOwnPosterButton = document.querySelector('.show-form');
const showSavedPostersButton = document.querySelector('.show-saved');
const saveThisPosterButton = document.querySelector('.save-poster');
const backToMainButtons = document.querySelectorAll('.back-to-main'); // Updated to select all back-to-main buttons
const nevermindTakeMeBackButton = document.querySelector('.show-main');
const showUnmotivationalButton = document.querySelector('.show-unmotivational'); // New button selector
const mainPosterSection = document.querySelector('.main-poster');
const posterFormSection = document.querySelector('.poster-form');
const savedPostersSection = document.querySelector('.saved-posters');
const unmotivationalPostersSection = document.querySelector('.unmotivational-posters'); // New section selector
const showMyPosterButton = document.querySelector('.make-poster');
const posterImageUrlInput = document.querySelector('#poster-image-url');
const posterTitleInput = document.querySelector('#poster-title');
const posterQuoteInput = document.querySelector('#poster-quote');

// Data arrays
const images = [
  "./assets/bees.jpg", "./assets/bridge.jpg", "./assets/butterfly.jpg", "./assets/cliff.jpg",
  "./assets/elephant.jpg", "./assets/flock.jpg", "./assets/fox.jpg", "./assets/frog.jpg",
  "./assets/horse.jpg", "./assets/lion.jpg", "./assets/mountain.jpg", "./assets/pier.jpg",
  "./assets/puffins.jpg", "./assets/pug.jpg", "./assets/runner.jpg", "./assets/squirrel.jpg",
  "./assets/tiger.jpg", "./assets/turtle.jpg"
];
const titles = [
  "determination", "success", "inspiration", "perspiration", "grit", "empathy", "feelings",
  "hope", "believe", "try", "conviction", "accomplishment", "achievement", "ambition",
  "clarity", "challenge", "commitment", "confidence", "action", "courage", "focus", "breathe",
  "gratitude", "imagination", "kindness", "mindfulness", "knowledge", "opportunity", "passion",
  "patience", "practice", "smile", "trust", "understanding", "wisdom"
];
const quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
let savedPosters = [];
let currentPoster; //global variable to store the current poster
let unmotivationalPosters = [
  {
    id: Date.now(),
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    img_url: "./assets/failure.jpg",
  },
  {
    id: Date.now() + 1,
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    img_url: "./assets/mediocrity.jpg",
  },
  {
    id: Date.now() + 2,
    name: "REGRET",
    description: "Hard work rarely pays off.",
    img_url:  "./assets/regret.jpg",
  },
  {
    id: Date.now() + 3,
    name: "FUTILITY",
    description: "You're not good enough.",
    img_url:  "./assets/futility.jpg",
  },
  {
    id: Date.now() + 4,
    name: "DEFEAT",
    description: "It's too late to start now.",
    img_url:  "./assets/defeat.jpg",
  },
  {
    id: Date.now() + 5,
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    img_url: "./assets/hopelessness.jpg",
  },
  {
    id: Date.now() + 6,
    name: "LAZINESS",
    description: "You can't change anything.",
    img_url: "./assets/laziness.jpg",
  },
  {
    id: Date.now() + 7,
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    img_url: "./assets/procrastination.jpg",
  },
  {
    id: Date.now() + 8,
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    img_url: "./assets/despair.jpg",
  },
  {
    id: Date.now() + 9,
    name: "NEGLECT",
    description: "Happiness is overrated.",
    img_url: "./assets/neglect.jpg",
  },
  {
    id: Date.now() + 10,
    name: "FEAR",
    description: "Giving up is always an option.",
    img_url: "./assets/fear.jpg",
  },
  {
    id: Date.now() + 11,
    name: "APATHY",
    description: "No one cares about your effort.",
    img_url: "./assets/apathy.jpg",
  },
  {
    id: Date.now() + 12,
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    img_url: "./assets/misery.jpg",
  },
  {
    id: Date.now() + 13,
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    img_url: "./assets/blame.jpg",
  },
  {
    id: Date.now() + 14,
    name: "DOUBT",
    description: "Success is for other people, not you.",
    img_url: "./assets/doubt.jpg",
  }
];

// Event listeners
window.addEventListener('load', displayRandomPoster); // Display a random poster on page load
showRandomPosterButton.addEventListener('click', displayRandomPoster); 
makeYourOwnPosterButton.addEventListener('click', () => {
  clearFormInputs(); // function to clear the input fields in the form
  toggleVisibility(posterFormSection, [mainPosterSection, savedPostersSection, unmotivationalPostersSection]);
});
showSavedPostersButton.addEventListener('click', () => {
  displaySavedPosters();
  toggleVisibility(savedPostersSection, [mainPosterSection, posterFormSection, unmotivationalPostersSection]);
});
saveThisPosterButton.addEventListener('click', saveCurrentPoster);
showMyPosterButton.addEventListener('click', createCustomPoster);
backToMainButtons.forEach(button => button.addEventListener('click', () => {
  //used forEach to iterate over each button in the array
  //added an event listener to each button in the array
  //when the button is clicked, the main poster section will be shown and the other sections will be hidden
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection, unmotivationalPostersSection]);
}));
nevermindTakeMeBackButton.addEventListener('click', () => {
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection, unmotivationalPostersSection]);
});
showUnmotivationalButton.addEventListener('click', () => {
  cleanData();
  displayUnmotivationalPosters();
  toggleVisibility(unmotivationalPostersSection, [mainPosterSection, posterFormSection, savedPostersSection]);
});

// Functions

// Get a random index from an array //used in createRandomPoster function
function getRandomIndex(array) { //(array) is the array that we want to get a random index from - for example, images, titles, or quotes
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(`Array length: ${array.length}, Random index selected: ${randomIndex}`);
  return randomIndex;
  // Math.floor rounds down to the nearest whole number
  //(Math.random() * array.length) generates a random number between 0 and the length of the array
}

// Create a new poster object
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
}

// Display a random poster on page load or when the "Show Another Random Poster" button is clicked
function displayRandomPoster() {  
  const randomPoster = createRandomPoster();  //creates a random poster by using the createRandomPoster function
  updatePoster(randomPoster); //updates DOM with new random poster
}

// Create a random poster using random elements from the images, titles, and quotes arrays
function createRandomPoster() { //creates a random image by using the getRandomIndex function
  const randomImage = images[getRandomIndex(images)]; 
  //creates a random title by using the getRandomIndex function
  //images is an array of image URLs
  //getRandomIndex in the function
  //(images) is the array that we want to get a random index from
  const randomTitle = titles[getRandomIndex(titles)]; 
  const randomQuote = quotes[getRandomIndex(quotes)];
  return createPoster(randomImage, randomTitle, randomQuote); //returns a new poster object with the random image, title, and quote
}

// Update the DOM with the new poster's image, title, and quote
function updatePoster(poster) { //poster is used here as a parameter
  currentPoster = poster; //saves the new poster as the current poster//effectively updates the reference to the current poster
  posterImage.src = currentPoster.imageURL;  //posterImage is a query selector variable that selects the image element in the HTML
  posterTitle.innerText = currentPoster.title; //
  posterQuote.innerText = currentPoster.quote; //
}

// Toggle visibility of elements
function toggleVisibility(showElement, hideElements) { //arguments of the function are showElement and hideElements
  showElement.classList.remove('hidden');
  //showElement is the element that we want to show
  //.classList will return a list of classes that are on the element (classes from the css file)
  //.remove will remove the class of 'hidden' from the showElement
  hideElements.forEach(element => element.classList.add('hidden')); 
  //hide elements is an array of elements that we want to hide
  //forEach is a method that will iterate over each element in the array
  //element is the current element in the array
  //.classList will return a list of classes that are on the element
  //.add will add the class of 'hidden' to the element
  console.log('Toggled visibility:', showElement, hideElements); // Log the visibility toggle
}

// Create a custom poster with user input
function createCustomPoster(event) {
  event.preventDefault(); // event.preventDefault() prevents the default behavior of the form submission
  const customPoster = createPoster(posterImageUrlInput.value, posterTitleInput.value, posterQuoteInput.value);
  //builds a const named customPoster that uses the createPoster function to create a new poster object
  currentPoster = customPoster; //currentPoster is global variable because it is declared outside of the function
  // Save the user input data into the respective arrays
  saveUserInputData(posterImageUrlInput.value, posterTitleInput.value, posterQuoteInput.value);
  // Update the DOM with the new poster and show the main poster section
  updatePoster(customPoster);
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection, unmotivationalPostersSection]); // Show the main poster and hide the form
}

// Save user input data into the respective arrays
function saveUserInputData(imageURL, title, quote) { //used to update the arrays with the user input data
  images.push(imageURL);
  titles.push(title);
  quotes.push(quote);
}

// Save the current poster to the savedPosters array
function saveCurrentPoster() {
  if (!savedPosters.includes(currentPoster)) { // Check if the current poster is not already in the savedPosters array
    savedPosters.push(currentPoster);
    console.log('Poster saved:', currentPoster); // Log the saved poster
    console.log('Saved Posters Array:', savedPosters); // Log the savedPosters array
  }
}

// Display saved posters in the saved posters section
function displaySavedPosters() {
  const savedPostersGrid = document.querySelector('.saved-posters-grid');
  savedPostersGrid.innerHTML = ''; // Clear the grid
  savedPosters.forEach(poster => {
    const posterElement = document.createElement('div');
    posterElement.classList.add('mini-poster');
    posterElement.innerHTML = `
      <img src="${poster.imageURL}" alt="Poster Image">
      <h2>${poster.title}</h2>
      <h4>${poster.quote}</h4>
    `;
    savedPostersGrid.appendChild(posterElement);
  });
  console.log('Displayed Saved Posters'); // Log when saved posters are displayed
  console.log('Saved Posters Array:', savedPosters); // Log the savedPosters array
}

// Display unmotivational posters in the unmotivational posters section
function displayUnmotivationalPosters() {
  const unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid');
  unmotivationalPostersGrid.innerHTML = ''; // Clear the grid
  unmotivationalPosters.forEach(poster => {
    const posterElement = document.createElement('div');
    posterElement.classList.add('mini-poster');
    posterElement.innerHTML = `
      <img src="${poster.img_url}" alt="Poster Image">
      <h2>${poster.name}</h2>
      <h4>${poster.description}</h4>
    `;
    posterElement.addEventListener('dblclick', (event) => deleteUnmotivationalPoster(event, poster.id)); // Add double-click event listener
    unmotivationalPostersGrid.appendChild(posterElement);
  });
  console.log('Displayed Unmotivational Posters'); // Log when unmotivational posters are displayed
  console.log('Unmotivational Posters Array:', unmotivationalPosters); // Log the unmotivationalPosters array
}

// Delete an unmotivational poster
function deleteUnmotivationalPoster(event, posterId) {
  event.stopPropagation(); // Prevent the event from bubbling up
  unmotivationalPosters = unmotivationalPosters.filter(poster => poster.id !== posterId); // Remove the poster from the array
  displayUnmotivationalPosters(); // Update the DOM
  console.log('Deleted Unmotivational Poster:', posterId); // Log the deleted poster ID
  console.log('Updated Unmotivational Posters Array:', unmotivationalPosters); // Log the updated unmotivationalPosters array
}

// Clear the input fields in the form
function clearFormInputs() { //function to clear the input fields in the form after the user has submitted the form 
  posterImageUrlInput.value = ''; //clears the input field for the image URL
  posterTitleInput.value = '';
  posterQuoteInput.value = '';
}

// Clean data to match the format used for poster data
function cleanData() {
  // Using the map iterator method to clean the data
  unmotivationalPosters = unmotivationalPosters.map(poster => ({
    id: poster.id,
    img_url: poster.img_url,
    name: poster.name,
    description: poster.description
  }));
  console.log('Cleaned Unmotivational Posters Data:', unmotivationalPosters); // Log the cleaned data
}