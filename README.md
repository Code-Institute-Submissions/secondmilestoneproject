# Where to sleep, eat or drink a coffee on your destination? Interactive Frontend Development Milestone Project #
This website is available to view here - https://codingbas.github.io/secondmilestoneproject/

This website has been created to allow users to search for a place to sleep, eat or drink a coffee bar in the city or place within the area they have searched for and to find out more information about that particular accommodation when they will hit the red marker.
With the help of Google Maps JavaScript API, users can obtain this information through pop up windows that are triggered when a radio button has been checked, e.g. when the accommodation radio button is checked, markers will appear on the map displaying accommodations such as hotels, restaurants, bars e.d. within the area that has been searched for. 
The Maps API also allows users to view StreetView images and satellite imagery.

## UX ##
This website is targeted towards users aiming to travel to a planned destination or towards users who want to find out more about accommodation to stay, places to eat or drink within an area they are curious about. 
This type of user will want to know where places to stay and places to eat are. My project is a suitable way of achieving this because it provides filters for the user to use when they search for a place to visit and also provides them with information such as addresses and telephone numbers of establishments they are interested in. It is an easy-to-use website - all the user has to do is type in their chosen location into the search bar, select a query and a filter, and then select a marker on the map to reveal the information they are seeking. Once they have found what they are looking for, the user can click on the place name in the info window which takes them to Google Maps, providing more information such as reviews and ratings. The user may also use the Streetview feature and satellite imagery to get a better understanding of what the location they searched for looks like.

General User Stories:

* As a user type, I want to be able to call up a restaurant in an area I am visiting next month, so that I can book a table.
* As a user type, I would like to be able to find a place to sleep with my family in (area name).
* As a user type, I would like to know where i can drink a coffee in (area name) when I go on holiday there next year.

Real Life User Stories:

* User 1: I'd like to know what bars and restaurants there are in Amsterdam for our holiday next year.
* User 2: I want to go away to Paris for my birthday next year - I'd like to know what hotels or apartments there are which I can stay in.
* User 3: I'm getting bored being at home all the time - I'd like to know where i can drink coffee in my local area.

## Features ##
* Autocomplete search feature - allowing user to search for a location of their choice and pick from a dropdown of suggestions for more specific search.
* Radio buttons - allowing user to filter out their search between Sleep or Drink and Eat.
* Maps API - allowing user to view red markers dropped onto the map for their chosen filter on the location they searched for.
* Info window - allowing user to view the name of the establishment, address and telephone number
* Social media links - although only for design purposes in this project this could allow users to follow the company behind the website.

### Existing Features ###
Autocomplete feature allows Users 1, 2 and 3 to search for and select their chosen locations, e.g. Amsterdam, Paris or their local area.

* While the users will have no trouble searching for 'Amsterdam', 'Paris' or another city, it is best to fill in the most accurate place they want to go to. I have checked multiple times and when a user fills in Amsterdam (image 1), they will get a few spots where to sleep, eat or drink but not all.
![picture alt](url"../assets/images/Milestone_Amsterdam.png" "Title is optional")
* When a user types in 'Oosterpark Amsterdam' (image 2) they will get more hotels, bars or restaurants in that specific area. 
* I have tried to be as specific as possible on my website that the user must fill in the location as accurate as possible. (image 3)

## Future features ##
* A route planner, allowing users to add pinpoints for routes they would want to take. Example: Leave the airport, go to a restaurant and after the hotel they chose to stay in.
* Advertisement from websites that sell airplane tickets, travel agencies, allowing the user to quickly see prices of making a trip to the selected country.
* Add ratings to the info window on the map
* Add photos of establishments in a separate section underneat the map

## Technologies Used ##

* [HTML5](https://www.w3schools.com/html/html5_intro.asp/ "HTML5")

The project uses HTML5 for the frame of the application and include links to CSS and JavaScript scripts.

* [CSS](https://www.w3schools.com/css/ "CSS")

For the styling I have used CSS.

* [JavaScript](https://www.javascript.com/ "JavaScript")

This project uses JavaScript to implement the Google Maps API into the document.

* [JQuery](https://jquery.com/ "JQuery")

The project uses JQuery to simplify DOM manipulation.

* [Bootstrap](https://startbootstrap.com/ "Bootstrap")

The project uses Bootstrap to allow for maximum responsiveness on various screen sizes.

* [Font Awesome](https://fontawesome.com/ "Font Awesome")

The project uses Font Awesome to be able to use icons for social media links.

* [Google Fonts](https://fonts.google.com/ "Google Fonts")

The project uses Google Fonts to apply the font Montserrat used on the website.

* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial "Google Maps JavaScript API")

The project uses Google Maps JavaScript API to allow users to search for the cities and places of their choice.

* [Google Maps Places library](https://developers.google.com/maps/documentation/javascript/places "Google Maps Places library")

The project uses Google Maps Places library enables the website to search for places and present information about them.

## Testing ##
* The HTML and CSS files were tested by using the W3C Mark Validator Service by direct input of the files on the validator.
* To test the responsiveness of the website in phones, tablets, and desktops screens, I have used the Chrome Developer Tools, verifying how the site reacted in different screen sizes.
* The JavaScript files were tested using https://jshint.com/ by direct input of the files on the validator.
* The application I had tested by some of my family members. If the site was clear, userfriendly and understandable. They gave back to me that it has to be more specific that the user has to fill in a specific place. 

## Bugs ##
* Had issue when you hit a name of the detail-list in the same tab the window opens. I have improved the "place.url + '"target="_blank">' ". Now in a new tab all the information of the specific accommodation opens.
* Had issues with the total markers on the search field. With some research on Google Developers and help of the tutor there is a maximum of 20 markers. Above that you need a second token or pay Google.
* Had issues with the types of the Searchfunction. I have add bar, cafe, restaurant, lodging and night_club. Lodging is for hotels and all accommodations.
* Had some issue with the size of the Google Map. I gave it a #map min-height:500px and it looks much better now.

## Deployment ##
The project was developed using the Cloud9 IDE. With every new feature or changes made to the code, the files were added and committed to the local repository. After that, pushed and added to my Github repositories. The project was deployed using GitHub pages.

* Step 1: I went to the settings tab of my repo, scrolled down to GitHub Pages

* Step 2: Under Source is a scrolldown box titled None. Click it and you will have a select source.

* Step 3: Click master branch

* Step 4: It will then automatically take you to the top of the page where in a light color blue block section it says Github Pages source saved

* Step 5: You then scroll down to GitHub Pages and it will state Your site is ready to be published at "https://username.github.io/gihub-projectname/"

* Step 6: Click on the url and it will then be published onto the world wide web

* Step 7: If you then go back to your github repository settings and scroll down to GitHub Pages you will see in a light green block "Your site is published at https://etc"

The repository can be found here:

Repo: https://github.com/codingbas/secondmilestoneproject

The site has been deployed using GitHub Pages and is available to visit here:

https://codingbas.github.io/secondmilestoneproject/


## Credits ##
The base code used for the map was acquired from Google Developers documentation.

## Media ##
The background photo was taking from https://www.pexels.com/. A beautiful website with tons of free photos.

## Acknowledgment ##
I would like to thank the Code Institute, my mentor Chris Zielinski, Luigi van der Pal and the tutors.