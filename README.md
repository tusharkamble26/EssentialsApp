# Gourmet.com

Hungry?? Hang in there!!! You have got Gourmet.com at your service. A web application specifically build to cater the hunger needs. Gourmet.com gives you the privilege to choose the cuisine that your taste buds might be craving for. It provides a diverse palette of dine-in options in your close proximity. You can also go ahead and search for any specific restaurant. You choose your restaurant upon looking at the ratings and cost estimates. This application allows you to opine on the quality of your search and satisfaction in real time.

## Setup And Installation:

This application is currently running on local machines. In order to use the application and its’ features, the user must download the following requirements and follow the listed instructions.
 
Windows Users:
- Clone the project from the following github url: (https://github.com/hchaundkar/EssentialsApp)
- Download and install node.js from https://nodejs.org/  
- “npm install” for installing all the node modules. 
- “bower install” for managing front end components. 
- Install Ember.js and all its dependencies.
- Generate Firebase account.
- Install Firebase plugins and dependencies.
- Create access token for Yelp-fusion api from url:(https://www.yelp.com/developers/documentation/v3/authentication)
- Run the website “Gourmet.com” using the following url:  (http://localhost:4200/)

## Technologies used:

1.       Ember.js (Client Side MVC)
2.       Node.js
3.       FireBase (Real Time Database)
4.       Bootstrap, CSS (Styling).

## Running the Application
Run the project by using following commands -
```
cd essentialsserver
npm run dev
```
Open another terminal for running the backend and use following command - 
```
cd esentialsclient
ember server
```

## Funtionalities:

- Search bar for finding a particular restaurant.
- Find all nearby restaurant by specific cuisine.
- Allows you to discover particular restaurant nearby.
- Specify location to find restaurants in that area.
- Give reviews about our website.
- Proves as a useful website giving reviews and restaurant in nearby places.
- Realtime reviews display.
- Firebase plugin renders all the comments in real time.



## User Manual:

Step 1:

- Launch the application using url (http://localhost:4200)
- The web page will look like the screenshot below.

![homepage](https://cloud.githubusercontent.com/assets/25421655/26038737/17c6119e-38c4-11e7-969a-18091e340f9a.jpg)

- The HomePage has the below functionalities:
- Home : This renders you to the Homepage
- Search: This renders you to the SearchPage
- Reviews: This renders you to add reviews to our website.
- About : Thi displays the information about the team members.


Step 2:

- When you click on search link below page will be displayed.
![searchpage](https://cloud.githubusercontent.com/assets/25421655/26038740/17c7e398-38c4-11e7-96ae-9bb052865012.jpg)
- It has two options:
- Search by Cuisine
- Search by location
- When you hit on submit after entering the cusine and location it will display the below page with all the restauratnts available in that location.
![searchresult](https://cloud.githubusercontent.com/assets/25421655/26038738/17c658c0-38c4-11e7-8ade-a3c3666b7d64.jpg)



Step 3:

- When you click on RateUs links below page will be displayed.
- The page displays the existing reviews.
![reviews](https://cloud.githubusercontent.com/assets/25421655/26038739/17c7e78a-38c4-11e7-944a-3eca47d8ea29.jpg)
-  When you click on RateUs button the below page will be displayed.
- You can add a review about our webpage in the fields provided.

![rateus](https://cloud.githubusercontent.com/assets/25421655/26038736/17c5e84a-38c4-11e7-90a5-c6cf09c569f6.jpg)
Step 4:

- The About pages displays all the information about our development team.
![about](https://cloud.githubusercontent.com/assets/25421655/26038770/a7223296-38c4-11e7-988c-cb1db7af5984.jpg)
