# WEB-115-FinalProject-Modi



Approach:

I took this problem on one step at a time, working on one part of the code at a time and making sure that code worked before moving on. With this logic, I first worked on the HTML buttons and ids to later define in my JS file. After doing that, I worked on an event listener whenver the submit button was clicked so that it could perform everything. I then added checking to see if the task was empty or not.

I then made the object using the ID element values, and proceesed to console log the task object so the user could see the values. Afterwards, I spent a lot of time working on how the task would be displayed on the page. I decided to use a div approach, created a new div to append as a child to the original div I created and then append sub children to the new div which would all be contained within the new div. This worked for me and then I just inputted all of the user data into the new div to be displayed onto the screen. I then added formatting and CSS and that was the final part of the problem I completed.


Issues:

While working on this project I have encountered several issues which took a long time to fix which resulted in less time for CSS, styling, formatting, and improvement of code on my part.

The ones that I was able to fix were the ones that took me the longest to solve, such as not remembering how to create a checkbox or the drop down buttons for the HTML buttons.
I also had problem getting true and false from the check box and had to remember to use .checked to get true and false from it, and this also took me a long time to figure out which 
disrupted my console.logs and statement handling later on.

Some Problems I still have with this is dynamically changing the console log to match the "isCompleted" key in the tasks object, and I didn't know how to solve this issue. To fix this issue the best I could, I would just use another consolelog statement to tell the user that the isCompleted key is now true.

Another issue I had was style formatting the undo button for the task complete checkbox. I didn't know how to only remove the line-through CSS for it, so I had to removeattribute the styles and CSS which removed all of the formatting. However after 30 minutes of Debugging and writing code I was able to fix this issue and found a solution, although it did require a alot of time I could've used for other parts of the code to refine it.

Sometimes the div will console log and change the undo button of the wrong div and I didn't know how to fix this

I am not the best at CSS so I am not suprised I had so many errors in this case, but in the future I should learn more about CSS and how it interacts with Javascript.