


##Vy's Library
Using React, Node, Gulp, Browserify to make a virtual library of a user's book collection. For right now, it's a very MVP version of what I want to accomplish, but then again I have big eyes!

To Get Started:
```
npm install
```
```
gulp production && gulp
```
To run on localhost:3000, either
```
nodemon
```
or
```
node server.js
```
or any other witchcraft you prefer)


###TODO: things I dream about at night and would like to have finished if i had more time, but will finish with later :)
- Styling needs to be fleshed out; currently the colors of every component are obnoxious because that's the best way for me to see where the elements are on the page as I use CSS properties to position the elements
- Started on responsive capability for mobile screen sizes, my plan of attack for the menu in the mobile view is something similar to a lightbox, where the background has a dark shadow over it to notify the user its actively on the menu
- I viewed on my virtual machine for Windows/IE but need to incorporate more in the responsive.css file  
- I would like to have changed how my components render each book onto the page and check for duplicates. Because I started with putting the dummy data into a json file, the data is in an array, so each action of rendering and checking for duplicates is in O(n) time, which obviously isn't ideal if the list of books is quite long. I could implement a hash where the title is the key, and its value is an object of its properties such as author, publisher, image link, type etc.
- After realizing top 10 Australian beaches is probably a magazine, I would like to create a different React component for magazine since they have different properties than books
- more gulp tasks, ie. use gulp-notify to notify of the jsx errors
- use Google Search (or Amazon Bookstore) API for photos of the book and magazine covers, if not then default to a "no image available" image
- tests: jest, mocha, jasmine


(by the way, I used to live in Australia, so I used a picture of me hiking on a cliff above the beach in Tasmania)











This test is designed to evaluate front end technical skills in HTML, CSS and Javascript in a holistic manner.  That is, the ability to create a solution from requirements in a manner that is clean and maintainable.  To that end, code structure and modularity are important, while things like pixel perfection with an associate mockup is less relevant.

Please take your time (within reason) to find a solution that you are happy with.  Libraries and frameworks are allowed, as long as the code you provide gives an indication of your own skill (ie, don't use Bootstrap without any of your own custom styles).  Comment your code where functionality or usage isn't obvious as well as to explain decisions that you've made in designing your solution.

**Fork this repo and create a pull request against the master branch to submit your solution.  Comments will be made against the PR, but no action is required.  Those will be for information purposes only.**

###Feature Requirements:
Build the UI as represented in the mockups included in the “screenshots” folder.
Included are a ’mobile' view and a 'desktop' view, so please think about responsive design in
your solution as well as cross-browser compatibility for the latest versions of major browsers (Chrome, Firefox and IE).

- The 'mobile' view has a menu icon, which when clicked, opens the menu and reveals the 3 menu items.
- The 'desktop' view shows the 3 menu items inline, and the menu icon is not needed.
- Don’t worry about persistence of data entered from the form above.  
- Always consider site speed and accessibility in your solution.
- Consider writing reusable code/component when building this application.

##### Assets
- The icons for the mobile view have been attached for your convenience.
- Font used: http://www.google.com/fonts#UsePlace:use/Collection:Roboto

####Interaction Requirements:
1. In the “Welcome back!” component:
	* a. Clicking yes will bring up a form to enter information about the book (Title, Author, etc)
	* b. Clicking no will close the component
2. When the form from 1a is submitted, populate a new component for that book, and render it on the page.
	* c. Do some simple validation on the content to prevent duplicate entries.

#####Optional:
1. Add the ability to add reviews and create a star indicator based on those reviews (1 to 5 scale);
2. Add sorting based on different attributes of the data (e.g., book title)

####Technical Requirements:
1. Create JSON representations of the content.
2. Use templates which will provide the markup and populate the content on the page.
3. Identify and use a commonly used breakpoint for your responsive styles.
