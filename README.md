## Architecture
In this project we relied on the MEAN (Mongo, Express, Angular, Node) stack to develop our Single Page Application (SPA). All relying on JavaScript, Node provided the various packages for our application such as express and angular. Express allowed for the
proper routing and implentation of our various components throughout. Angular provided a front facing package which allowed administrative and user access through a graphical interface. Mongo worked as the database holding all other information and passing
those values accordingly. 
<br><br>
Mongo was the choice for the application based on the quick query and response times when coupled with Express. In a SPA, speed is a key feature users and administrators look for, and Mongo provides that.
<br><br>

## Functionality
JSON is notation for an object. While JS is the object itself. JSON allows the user to store various elements in the form of an object. Meaning that if you have an object or class that is a JavaScript object JSON could be used to format information and push
that data to a storage medium like Mongo. For example:
<br><br>
  Object = {name, Age, Email} --> JSON takes that information and formats it to a readable format so that the database can create appropriate values and keys as new data comes in.
<br><br>
Instances within this application that this can be found in JSON files such as trips in conjunction with the travel controller. The trips would parse the data and return a view of the requested information.
<br><br>

## Testing
Within any application there needs to be endpoints no matter the action. For instance if I'm navigating an application and I enter invalid information it needs to result in an error, and ideally create a message for that endpoint and how you arrived. 
Additionally, security will need a few extra layers of methods in order to ensure safe access. This could include login errors such as invalid credentials, i.e. wrong email, password, or blank fields. These should absolutely error out. Methods in place
to ensure safe administrative control could implement a method to deny access after X amount of attempts. Finally, methods of booking travel to ensure all data is valid, and that payment is processed accordingly.
<br><br>

## Reflection
Ultimately this course has opened my eyes at how expansive a full-stack application can be. It has also removed some of the fear of working with multiple platforms, files, and processes at the same time. My skills with NPM functions has drastically improved
over the course of this course. I also believe I feel more comfortable with the various platforms and their respective purposes, for the ones that we have covered anyways. And of course, the class has allowed me to be patient, and take my time while programming,
which in my mind is one major key to successful programming at an entry level.
