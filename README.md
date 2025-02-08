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
   - Every time the user clicks the "Show Another Random Poster" button, a new random poster is displayed.
   - This is achieved by adding an event listener to the "Show Another Random Poster" button that calls the `displayRandomPoster` function.

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

#### Iteration 2:

1. First, use the values from the inputs to create a new, unique poster object and save it as the value of the currentPoster global variable (part of your data model)
   - This is achieved by the `createCustomPoster` function, which uses the values from the input fields to create a new poster object using the `createPoster` function and saves it as the value of the `currentPoster` global variable.

2. Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data
   - This is achieved within the `createCustomPoster` function by pushing the user input values into the respective arrays (`images`, `titles`, `quotes`).

3. Change back to the main poster view (hiding the form view again)
   - This is achieved by calling the `toggleVisibility` function within the `createCustomPoster` function to show the main poster section and hide the form section.

4. Use the new, unique poster object (which should be saved in the currentPoster variable - part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM
   - This is achieved by calling the `updatePoster` function within the `createCustomPoster` function to update the DOM with the new poster's image, title, and quote.

#### Iteration 3:

1. When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.
   - This is achieved by the `saveCurrentPoster` function, which checks if the `currentPoster` is already in the `savedPosters` array before adding it.

2. If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
   - This is ensured by using the `includes` method to check if the `currentPoster` is already in the `savedPosters` array before adding it.

3. When a user clicks the “Show Saved Posters” button, we should see the saved posters section
   - This is achieved by adding an event listener to the "Show Saved Posters" button that calls the `displaySavedPosters` function and the `toggleVisibility` function to show the saved posters section and hide the main poster section.

4. All the posters in the savedPosters array should be displayed as little mini posters in the saved posters grid section (again, no duplicates)
   - This is achieved by the `displaySavedPosters` function, which clears the saved posters grid and then appends each poster in the `savedPosters` array as a mini poster.

5. Ensure styling, sizes and layouts of the mini posters in the Saved Posters view match the comp photo of that Saved Posters view that is shown in Iteration 1
   - This is achieved by applying the appropriate CSS styles to the mini posters and the saved posters grid.

#### Iteration 4:

1. On the main view, a user should see a newly added “Unmotivational Posters” button located after the existing buttons.
   - This is achieved by adding a new button element with the class `show-unmotivational` in the HTML file after the existing buttons in the main view..

2. When a user clicks the “Unmotivational Posters” button, we should see a newly created Unmotivational Posters HTML section with:
   - a title of “Unmotivational Posters”: this is achieved by adding an h2 element with the text “Unmotivational Posters” to the Unmotivational Posters section.
   - a div that will eventually hold the displayed posters (not actually a visible part of the page until posters are displayed): this is achieved by adding a div element with the class `unmotivational-posters-grid` to the Unmotivational Posters section.
   - a “Back to Main” button: this is achieved by adding a button element with the class `back-to-main` and the text “Back to Main” to the Unmotivational Posters section.
   - The main poster view should be hidden when viewing the Unmotivational Posters view: this is achieved by adding the class `hidden` to the main poster section when the Unmotivational Posters section is shown.

3. When a user clicks the “Back to Main” button, we should see the main poster view and the unmotivational posters view should be hidden.
   - This is achieved by adding an event listener to the "Back to Main" button that calls the `toggleVisibility` function to show the main poster section and hide the Unmotivational Posters section.

4. Copy/paste the dataset into your main.js file after the existing arrays of images, titles and quotes.
    - This is achieved by copying the dataset from the *database* Iteration 4 drop down and pasting it into the `main.js` file after the existing arrays of images, titles, and quotes.

5. Create a cleanData() function to go through each piece of this data and make it match the format we’ve been using for our poster data.
    - This was accomplished by using the `map` iterator method to transform each unmotivational poster into the format used for our poster data. The `createPoster` function was utilized to ensure consistency in the poster object structure.

-Hint - use the existing createPoster() function to help you accomplish this.
-Hint - you can reach for a for loop or an iterator method here - several options will work - it’s your choice!

6. When a user visits the Unmotivational Posters view, we should see all 15 unmotivational posters displayed immediately. Use the cleaned data for this.
   - This was accomplished by calling the `displayUnmotivationalPosters` function after cleaning the data with the `cleanData` function when the "Unmotivational Posters" button is clicked.

#### Iteration 5:


**Add functionality so that users will be able to delete an unmotivational poster by double clicking on it.**

1. From the unmotivational posters view, if a user double clicks a poster, it will be deleted

-Users should be able to double click anywhere on the poster to delete it - on the image, text or background.

-HTML onclick attributes should not be used in any HTML code - all functionality should be through JavaScript.

-The poster should be removed from your cleaned unmotivational posters data set and should no longer be displayed on the DOM.

-If the user navigates away from the Unmotivational Posters view after deleting some posters, those posters should still be gone when they navigate back to that view. Note: However, because we aren’t implementing local storage, if a user refreshes the app, everything will be reset including deleted unmotivational posters and saved motivational posters. That’s ok.