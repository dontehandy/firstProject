// Query selector variables
const posterImage = document.querySelector('.poster-img'); 
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');
const showRandomPosterButton = document.querySelector('.show-random');
const makeYourOwnPosterButton = document.querySelector('.show-form');
const showSavedPostersButton = document.querySelector('.show-saved');
const saveThisPosterButton = document.querySelector('.save-poster');
const backToMainButton = document.querySelector('.back-to-main');
const nevermindTakeMeBackButton = document.querySelector('.show-main');
const mainPosterSection = document.querySelector('.main-poster');
const posterFormSection = document.querySelector('.poster-form');
const savedPostersSection = document.querySelector('.saved-posters');
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
let currentPoster;

// Event listeners
window.addEventListener('load', displayRandomPoster); 
showRandomPosterButton.addEventListener('click', displayRandomPoster); 
makeYourOwnPosterButton.addEventListener('click', () => {
  clearFormInputs();
  toggleVisibility(posterFormSection, [mainPosterSection, savedPostersSection]);
});
showSavedPostersButton.addEventListener('click', () => {
  displaySavedPosters();
  toggleVisibility(savedPostersSection, [mainPosterSection, posterFormSection]);
});
saveThisPosterButton.addEventListener('click', saveCurrentPoster);
showMyPosterButton.addEventListener('click', createCustomPoster);
backToMainButton.addEventListener('click', () => {
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection]);
});
nevermindTakeMeBackButton.addEventListener('click', () => {
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection]);
});

// Functions

// Get a random index from an array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
  const randomPoster = createRandomPoster(); 
  updatePoster(randomPoster); 
}

// Create a random poster using random elements from the images, titles, and quotes arrays
function createRandomPoster() { 
  const randomImage = images[getRandomIndex(images)]; 
  const randomTitle = titles[getRandomIndex(titles)];
  const randomQuote = quotes[getRandomIndex(quotes)];
  return createPoster(randomImage, randomTitle, randomQuote);
}

// Update the DOM with the new poster's image, title, and quote
function updatePoster(poster) { 
  currentPoster = poster; 
  posterImage.src = currentPoster.imageURL; 
  posterTitle.innerText = currentPoster.title; 
  posterQuote.innerText = currentPoster.quote; 
}

// Toggle visibility of elements
function toggleVisibility(showElement, hideElements) {
  showElement.classList.remove('hidden'); // Show the specified element
  hideElements.forEach(element => element.classList.add('hidden')); // Hide the specified elements
  console.log('Toggled visibility:', showElement, hideElements); // Log the visibility toggle
}

// Create a custom poster with user input
function createCustomPoster(event) {
  event.preventDefault(); // Prevent the form from submitting
  // Use the values from the inputs to create a new, unique poster object
  const customPoster = createPoster(posterImageUrlInput.value, posterTitleInput.value, posterQuoteInput.value);
  // Save the new poster as the current poster
  currentPoster = customPoster;
  // Save the user input data into the respective arrays
  saveUserInputData(posterImageUrlInput.value, posterTitleInput.value, posterQuoteInput.value);
  // Update the DOM with the new poster and show the main poster section
  updatePoster(customPoster);
  toggleVisibility(mainPosterSection, [posterFormSection, savedPostersSection]); // Show the main poster and hide the form
}

// Save user input data into the respective arrays
function saveUserInputData(imageURL, title, quote) {
  images.push(imageURL);
  titles.push(title);
  quotes.push(quote);
}

// Save the current poster to the savedPosters array
function saveCurrentPoster() {
  if (!savedPosters.includes(currentPoster)) { //using ! will check if the current poster is not already in the savedPosters array
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

// Clear the input fields in the form
function clearFormInputs() {
  posterImageUrlInput.value = '';
  posterTitleInput.value = '';
  posterQuoteInput.value = '';
}