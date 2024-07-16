DevPipeline - Navigation Bar and Hero Section
Completion requirements
You now know the skills needed to build a website's navigation bar and hero section. This task will take your evolving understanding of html and your introduction knowledge of css to complete successfully.

Build a website that includes a navigation bar and a hero section.
Create the navigation bar by completing the following steps:
Research several navigation bars from your favorite websites. Make a list of sections you would like to include in your own.

In your navigation bar:
Include a logo
Create several sections/tabs
Ensure each section/tab is a live link

Create the hero section by completing the following steps:
Focus on the proper layout and structure.
Add in filler text and images. Don't worry if it is directly connected to a theme yet.

Use discussed CSS language concepts to:
Change backgroud colors
Text colors
Change links to images, words in the text and in the section of the navigation bar

Refining Past Work
Your skills have grown significantly in this short time. A great practice throughout the course is to return to past websites you have created and refine them using your new skills.

Complete the following with the past two websites created:

Reevaluate their layout (whiteboard if necessary)

Introduce the following concepts into your restructure
list tags
table tags
CSS language concepts

refactor notes:
The background-image displays on the whole page in an aesthetic manner. The vertical gradient added to the background image creates a nice flow as the user scrolls the page. 1. Your body tag currently has the z-index of a -1. However, remember that parent containers by default are underneath their children (like a plate placed on top of a place mat; the mat is still there, but you can’t see the part of the place mat that is covered by the plate). If there is a particular reason feel free to write a response this point. 2. The logo and the links are not in the same row. When you mix certain position and display values they will negate each other. The code is not scalable, as adding declarations that usually work well together (such as align-items and display: flex) will not work on an element that has been declared with an absolute position. Look through the nav element and their children to determine which should be utilized. 3. Some class names used are not scalable. The class name “container” is usually a suffix that helps indicate for what the div is a container for. 4. Working with id attributes are used only when necessary (usually when accessing their element with JavaScript). Also, you can access the children of a node through various methods, which may make the id attribute not needed (depending on your purpose for the ids). This did not affect your grade, but still wanted to provide feedback on this concept. 5. In each container, the p tag is wrapped with a div tag. Also, the logo is wrapped in a div as well. Though this isn’t bad practice, it doesn’t seem necessary in this instance. The main indication it may not be needed is that the css file does not access a div without a class name? If you have a specific reason for the div tags, feel free to provide your reasoning in the comments. Otherwise, I recommend removing them.
