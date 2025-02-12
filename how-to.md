### Guide:

#### Iteration 0:

Directives:

When the page loads, users should see a poster with a randomly selected image, title, and quote

- This is achieved by adding an event listener to the `window` object that calls the `displayRandomPoster` function when the page loads. The `displayRandomPoster` function creates a random poster using the `createRandomPoster` function and updates the DOM with the new poster's image, title, and quote using the `updatePoster` function.

Every time the user clicks the Show Random Poster button, a new random poster is displayed.

- This is achieved by adding an event listener to the "Show Another Random Poster" button that calls the `displayRandomPoster` function. Each time the button is clicked, the `displayRandomPoster` function creates a new random poster using the `createRandomPoster` function and updates the DOM with the new poster's image, title, and quote using the `updatePoster` function.

#### Iteration 1:

Directives:

When a user clicks the “Make Your Own Poster” button, we should see the form, and the main poster should be hidden

- This is achieved by adding an event listener to the "Make Your Own Poster" button that calls the `toggleVisibility` function to show the form and hide the main poster. The `clearFormInputs` function is also called to ensure the form inputs are cleared each time the form is shown.

When a user clicks the “Show Saved Posters” button, we should see the saved posters area, and the main poster should be hidden

- This is achieved by adding an event listener to the "Show Saved Posters" button that calls the `displaySavedPosters` function to update the saved posters area and the `toggleVisibility` function to show the saved posters section and hide the main poster.

When a user clicks the “Nevermind, take me back!” or “Back to Main” buttons, we should only see the main poster section

- This is achieved by adding event listeners to the "Nevermind, take me back!" and "Back to Main" buttons that call the `toggleVisibility` function to show the main poster section and hide the form or saved posters section.

In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

- This is achieved by using the `toggleVisibility` function to show and hide the appropriate sections based on the button clicks. The `toggleVisibility` function takes a showElement and an array of hideElements, showing the specified element and hiding the others.

#### Iteration 2:

Directives:

On the new poster form view, users should be able to fill out the three input fields and then hit the Show My Poster button

- This is achieved by adding an event listener to the "Show My Poster" button that calls the `createCustomPoster` function when clicked.

When the Show My Poster button is clicked, several things will happen:

First, use the values from the inputs to create a new, unique poster object and save it as the value of the currentPoster global variable (part of your data model)

- This is achieved by the `createCustomPoster` function, which uses the values from the input fields to create a new poster object using the `createPoster` function and saves it as the value of the `currentPoster` global variable.

Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data

- This is achieved within the `createCustomPoster` function by pushing the user input values into the respective arrays (`images`, `titles`, `quotes`).

Change back to the main poster view (hiding the form view again)

- This is achieved by calling the `toggleVisibility` function within the `createCustomPoster` function to show the main poster section and hide the form section.

Use the new, unique poster object (which should be saved in the currentPoster variable - part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM

- This is achieved by calling the `updatePoster` function within the `createCustomPoster` function to update the DOM with the new poster's image, title, and quote.

#### Iteration 3:

Directives:

When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.

- This is achieved by the `saveCurrentPoster` function, which checks if the `currentPoster` is already in the `savedPosters` array before adding it.

If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)

- This is ensured by using the `includes` method to check if the `currentPoster` is already in the `savedPosters` array before adding it.

When a user clicks the “Show Saved Posters” button, we should see the saved posters section

- This is achieved by adding an event listener to the "Show Saved Posters" button that calls the `displaySavedPosters` function and the `toggleVisibility` function to show the saved posters section and hide the main poster section.

All the posters in the savedPosters array should be displayed as little mini posters in the saved posters grid section (again, no duplicates)

- This is achieved by the `displaySavedPosters` function, which clears the saved posters grid and then appends each poster in the `savedPosters` array as a mini poster.

Ensure styling, sizes and layouts of the mini posters in the Saved Posters view match the comp photo of that Saved Posters view that is shown in Iteration 1

- This is achieved by applying the appropriate CSS styles to the mini posters and the saved posters grid.

#### Iteration 4:

Directives:

On the main view, a user should see a newly added “Unmotivational Posters” button located after the existing buttons.

- This is achieved by adding a new button element with the class `show-unmotivational` in the HTML file after the existing buttons in the main view.

When a user clicks the “Unmotivational Posters” button, we should see a newly created Unmotivational Posters HTML section with:

a title of “Unmotivational Posters”

- This is achieved by adding an h2 element with the text “Unmotivational Posters” to the Unmotivational Posters section.

a div that will eventually hold the displayed posters (not actually a visible part of the page until posters are displayed)

- This is achieved by adding a div element with the class `unmotivational-posters-grid` to the Unmotivational Posters section.

a “Back to Main” button

- This is achieved by adding a button element with the class `back-to-main` and the text “Back to Main” to the Unmotivational Posters section.

The main poster view should be hidden when viewing the Unmotivational Posters view

- This is achieved by adding the class `hidden` to the main poster section when the Unmotivational Posters section is shown.

When a user clicks the “Back to Main” button, we should see the main poster view and the unmotivational posters view should be hidden.

- This is achieved by adding an event listener to the "Back to Main" button that calls the `toggleVisibility` function to show the main poster section and hide the Unmotivational Posters section.

Copy/paste the dataset into your main.js file after the existing arrays of images, titles and quotes.

- This is achieved by copying the dataset from the *database* Iteration 4 drop down and pasting it into the `main.js` file after the existing arrays of images, titles, and quotes.

Create a cleanData() function to go through each piece of this data and make it match the format we’ve been using for our poster data.

- This was accomplished by using the `map` iterator method to transform each unmotivational poster into the format used for our poster data. The `createPoster` function was utilized to ensure consistency in the poster object structure.

When a user visits the Unmotivational Posters view, we should see all 15 unmotivational posters displayed immediately. Use the cleaned data for this.

- This was accomplished by calling the `displayUnmotivationalPosters` function after cleaning the data with the `cleanData` function when the "Unmotivational Posters" button is clicked.

#### Iteration 5:

Directives:

Add functionality so that users will be able to delete an unmotivational poster by double clicking on it.

From the unmotivational posters view, if a user double clicks a poster, it will be deleted

- This was achieved by adding an event listener to each poster element in the `displayUnmotivationalPosters` function that calls the `deleteUnmotivationalPoster` function when the poster is double-clicked.

Users should be able to double click anywhere on the poster to delete it - on the image, text or background.

- This was achieved by adding the event listener to the entire poster element, ensuring that any part of the poster can be double-clicked to trigger the deletion.

HTML onclick attributes should not be used in any HTML code - all functionality should be through JavaScript.

- This was achieved by using JavaScript to add event listeners to the poster elements instead of using HTML `onclick` attributes.

The poster should be removed from your cleaned unmotivational posters data set and should no longer be displayed on the DOM.

- This was achieved by filtering out the deleted poster from the `unmotivationalPosters` array in the `deleteUnmotivationalPoster` function and then calling the `displayUnmotivationalPosters` function to update the DOM.

If the user navigates away from the Unmotivational Posters view after deleting some posters, those posters should still be gone when they navigate back to

#### Iteration 6:

Directives:

Using CSS, make the styling/format of the new “Unmotivational Posters” button (on the main page) and the “Back to Main” button (on the Unmotivational Posters page) match the other buttons throughout the app.

- This was achieved by applying the same CSS classes used for the other buttons to the new “Unmotivational Posters” and “Back to Main” buttons, ensuring consistent styling and format.

Using CSS flexbox (not grid), control the layout of the unmotivational posters to match the comp provided here. Note: the number of posters you see in each row will flex based on the width of the screen, thats a good thing!

- This was achieved by applying CSS flexbox properties to the `unmotivational-posters-grid` class, ensuring that the layout of the unmotivational posters matches the provided comp and adjusts based on the screen width.

Using CSS, make the style and size of the unmotivational posters match the comp provided here. You’ll notice they should look slightly different than the saved posters.

- This was achieved by applying specific CSS styles to the unmotivational posters, ensuring that their style and size match the provided comp and are distinct from the saved posters.

#### Key Terms:

DOM - Document Object Model, which is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

Event Listener - A procedure or function in a computer program that waits for an event to occur. It listens for an event and triggers the associated function when that event occurs.

Global Variable - A variable that is accessible in every scope of the program. It is declared outside of any function and can be accessed and modified by any function.

The iterator methods used in this project include `map`, `filter`, and `forEach`. These methods are used to iterate over arrays and perform operations on each element.

`map` - Creates a new array with the results of calling a provided function on every element in the calling array.

`filter` - Creates a new array with all elements that pass the test implemented by the provided function.

`forEach` - Executes a provided function once for each array element.




