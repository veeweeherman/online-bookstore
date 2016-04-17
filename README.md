


##Book Worm 
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
