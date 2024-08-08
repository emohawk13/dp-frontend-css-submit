Now that we better understand the box model, display and layout we are ready to try replicating a harder layout. In this replication we will recreate the login page below.

Include the following in your replication:

Create a navigation bar

Include a hero image that takes up the left half of the page

The login form should:
Be on the right side of the page
Be centered in the white space
Submit to https://httpbin.org/post and should echo back
Include a:
Large header
Email field (required field)
Password field (required field)
Submit Button
Style the form elements

Additional Stylings:
Include 2 (two) icons from fontawesome
Import at least 1 (one) font from google fonts
Have a default font for the whole page
Change the default font to a different font for your login header
Style the form elements (the best you can)
Push your replication and styling sheet to github and submit your link in the field below.

refactor comments:

1. h1 should be placed outside the form tag
2. img will take on its original size by default. To fill an entire content area of a box model, you must provide it the width and height (unless you make it a background image)
3. The submit button seems to be missing. I added it and the hover effect works as expected. Add it to your code.
4. The class name "containers" could be more specific. There is a main tag used to wrap the main content of the page. A div with the name "main-container" or "home-container" also help make its purpose more explicit.
5. As with the note above, "left" and "right" prefix, though they state their position, should focus on purpose. If the design were to change the names would not make sense and would have to change (making the naming not scalable). Once you have made the following changes let me know and I will re-grade.
