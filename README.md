Assignment - Reservation Webform Refactor

Completion requirements
In the HTML Unit we were asked to create a webform to help users book a trip. There will be many times in our career where we will be asked to refactor old code using new practices.

Refactor the webform to include the following:

Create a Homepage including a:
Create a navbar
Include a tab in the navbar that navigates to the webform
Create a hero image and hero content
Page content that describes the site's goal as a trip booker

Include all styling from the CSS Unit.

Ensure the website can be viewed from full screen and half screen efficiently. All layouts should be altered using media queries along with flexbox and grid styling.

Use relative measurements for all elements. This will ensure they will grow and shrink responsively as the browser's width changes size.

NOTE: Check your old webform for the following criteria or build the webform again with the crtieria below:
Create a webform that will take the following data:

Create a reservation form. Include the following tags and attributes in your form:
Input  <input> </input>
Id
Name
Placeholder
Value
Type
Select  <select> </select>
Textarea  <textarea> </textarea>

Additional Tips
Focus on the proper layout and structure
A footer for the web page including a fake phone number and address
Add the required attributes to require a few or all fields in the form

refactor comments:
HTML markup language has tags to help with readability (to know the purpose of each part of the code).

As your code base gets larger the purpose of tags might get confusing if you start mixing tags with their unintended purpose.

In index.html, you current use a nested a tag in a button tag.

This can cause readability and scalability issues, especially in a large app.

Always choose the tag for its intended purpose and then style it as desired.

For example, remove the button, keep the a tag and add padding, a background-color and border-radius.

It seems tedious, but will ensure a consistent code base.
Let me know if you have any questions on this concept.

This will always make the entire area of the tag clickable (right now the button defaults with a pointer cursor and lies to the user that they can click the button, as the words are the only clickable part of the area.

Currently, you have a div tag with the name container.
To organize html, the container name is usually added as a suffix “-container”.
Rename your containers and Another div tag has the suffix “-filter” in your html code.

I would assume the filter suffix is because the content in the html code is filterable.

If so, the content doesn’t seem to need filtering functionality in the future.

However, if this suffix is used for a different reason and you feel it still necessary, please provide the reasoning in the comments.

Though your grade is not affected by this, use flexbox to position the company-info in the footer in the center.

Add space between the edge of the page for the links in the navigation bar.

In form-styles.css file, you have styling that is associated with five inputs.

I recommend providing a classname for each of them or using css selectors to make this readable.

When clicking the checkbox to add additional comments the form drastically re-sizes and affects flows into the footer. Re-size so the height of the form changes only, but the width of the form stays constant, and the footer and the form do not touch.

Reach out if you need any help. Most code works correctly and is styled appropriately.
