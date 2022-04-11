# Client for my expressApiMongoTDD project
This is a web client that interfaces with an expressJS server hosted on Heroku and interfaced with a MongoDB hosten on Mongo Atlas (both free tiers).

### Why this app
I wanted to learn to create a ReactJS app able to interface with an API develop by myself.
As I wasn't planning to create a professional/beautiful UI I decided to take my chance and learn TailwindCSS in the process as well.

### What can you do with this app
You are greeted by a HomePage with some generic info about the app.
You can signup by giving a username, email and password (password id hashed). The data will be stored inside an instance of MongoDB hosted on Mongo Atlas.
You can log out the app and later log back in by providing your email and password.
Once logged in a new link will appear in the navbar where you'll be able to add and retrieve your shifts.

### TODO
* Insted of fetching all the shifts, give the option to retrieve part of them (eg. the unpaid ones)
* Provide charts with weekly and monthly data.
* Allow the app to export a spreadheet that could be handed to an accountant.
* Improve UI/UX.
