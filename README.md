# Hang In There

A boilerplate repo. 

## Set Up

1. Fork this repository
2. Clone down your new, forked repo
3. `cd` into the repository
4. Open it in your text editor
5. Add the instructors as collaborators on the repository

Project spec & rubric can be found [here](https://curriculum.turing.edu/module2/projects/hang_in_there/)

To view your project:

1. In your terminal, navigate to your project repo
2. Run the command `open index.html`
  
______________________________________________________  
# README Template  
Before turning this project in, erase this line and everything above it and fill in the info below.  
______________________________________________________  

# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

### Contributors:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

### Guide:

#### Iteration 0:
1. **Display a Random Poster on Page Load**:
   - When the page loads, users should see a poster with a randomly selected image, title, and quote.
   - This is achieved by the `displayRandomPoster` function, which is called when the window loads.
   - The `displayRandomPoster` function creates a random poster using the `createRandomPoster` function and updates the DOM with the new poster's image, title, and quote using the `updatePoster` function.

2. **Show Random Poster Button**:
   - Every time the user clicks the "Show Random Poster" button, a new random poster is displayed.
   - This is achieved by adding an event listener to the "Show Random Poster" button that calls the `displayRandomPoster` function.

#### Iteration 1:
1. **Make Your Own Poster Form**:
   - When a user clicks the "Make Your Own Poster" button, the form should be displayed, and the main poster should be hidden.
   - This is achieved by adding an event listener to the "Make Your Own Poster" button that calls the `toggleVisibility` function to show the form and hide the main poster.
   - The `clearFormInputs` function is also called to ensure the form inputs are cleared each time the form is shown.

2. **Show Saved Posters Section**:
   - When a user clicks the "Show Saved Posters" button, the saved posters area should be displayed, and the main poster should be hidden.
   - This is achieved by adding an event listener to the "Show Saved Posters" button that calls the `displaySavedPosters` function to update the saved posters area and the `toggleVisibility` function to show the saved posters section and hide the main poster.

3. **Back to Main and Nevermind Buttons**:
   - When a user clicks the "Nevermind, take me back!" or "Back to Main" buttons, only the main poster section should be displayed.
   - This is achieved by adding event listeners to the "Nevermind, take me back!" and "Back to Main" buttons that call the `toggleVisibility` function to show the main poster section and hide the form or saved posters section.



