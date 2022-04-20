# MyRead Senior Design Team CS08
This project was created over the 2021-2022 academic year for a Gonzaga Senior Design Project.

The developers Ángela George, Sam Toll, Cole Thorpen, and Han Tang graduated spring of 2022.

## What is MyRead?
MyRead is a new way to blog while you surf. Save webpages to categories of your blog to help the MyRead community find the best currated content on the web. 

## Technologies and Framework
* This is a MERN stack app, ReactJS for the frontend and MongoDB for the backend. 
    * Run this app locally by running **npm install** and then **npm start** in the Client directory and attaching your own mongo database. The backend routes must also be configured to run locally. 
* There is a chrome extension which can be found at [this repository](https://github.com/stoll2882/extension). 
* This app is deployed and cloud hosted on [Heroku](https://my-read-08.herokuapp.com/home).

## Deployment Information
### GitHub
The original version of this app is found at https://github.com/Angela-Mari/MyRead and was created by Sam Toll, Angela George, Cole Thorpen, and Han Tang. 
React App
To run this locally, first comment out all lines in the server that say ‘for heroku’ and uncomment all lines that say ‘for heroku.’ Configure your default.json file to match the schema of the config/custom-enviornment-variables.json file and store in the config folder. Cd into the client folder and type npm start, you may want to do an npm install first. Then in a separate terminal in the root directory type node server, this may also require an npm install. 
### Heroku
This GitHub project is currently connected to a Heroku deployment pipeline. For this app to run on a new Heroku server, you must have all the private variables configured that follow the schema in config/custom-enviornment-variables.json. All lines in the server must also be switched from ‘localhost’ to ‘for heroku’ as noted in the comments in the server files with the localhost line commented out. 
### Frontend Documentation 
#### Client/App.js
Has the routing of the application and sends requests to backend for login or register.
#### Client/src/actions
All files in the Actions folder connect the frontend to the backend functionality. auth.js and post.js files contain the majority of functions that are used in the frontend. 
#### Client/src/pages
##### Blog.js
Is the overarching container for the view of a blog. 
##### EditBio.js
Allows users to edit their bio information such as profile picture, bio text, and social media links.
##### Explore.js
This runs the explore page which currently gathers all posts, users, and blogs that the user is following and displays them in the respective dropdown. 
##### ExtensionInfo.js
Explains where to get the Chrome extension and has a button that links to the download page.
ExtensionPopUp.js
Allows a user to authenticate to their MyRead account through the chrome extension. 
##### Home.js
Houses the landing page with authentication modals. Also houses a version of the explore page and has a navigation to the extension information page. 
##### Privacy.js
Contains current privacy terms. 
#### Client/src/components
##### AuthenticationModal.js
Allows the user to either login or register depending on which route they would like to take. 
##### Bio.js
Contains user information such as name, profile image, social media links, and possibly the follow button if it is not the user’s personal page.
##### BloggerCard.js
Is the condensed version of Bio.js for the explore page.
##### Categories.js
Contains the Bio.js component nested inside it and populates the categories field. 
##### Comment.js
Houses a single comment which formats the picture, text, and option to delete the comment. 
##### Comments.js
Allows users to submit comments via the text field and populated the current comments as Comment components. 
##### MyNav.js 
A custom nav bar that contains a lot of the routing for MyRead. This nav bar changes based on if the user is authenticated, and some routes within the nav bar reflect this, such as the MyRead logo routing to either the blog of the authenticated user or the /home page.
##### NewPost.js
Allows users to post new content from within the MyRead site. 
##### Post.js
Houses a post found within the main section of the blog. Changes displayed content based on authentication status, such as delete. 
##### PostDetail.js
Is the expanded view of the posts and shows current comments under the post. 
RecentPosts.js
Houses all posts in the main column of the blog. Reorganizes the posts displayed based on if the user is at the home page or selects a category. 
##### SmallPost.js
Is the smaller card of a post displayed on the explore page.
#### config
##### custom-enviornment-variables.json
Contains schema of what variables map to either private keys in Heroku or in the default.json file. Note: the default.json file is not available in GitHub because it contains private keys. Future implementations of this app should also not push any default.json file contained in this folder to protect your private keys.
##### db.js
Runs server connection 

### Backend Documentation
#### Server.js
Main file containing the server definition and all associated routes.
##### Server/middleware
###### auth.js
Middleware for determining whether or not the user is authenticated. If the request from the backend requires authentication, the middleware auth file will check whether or not the request should be allowed by checking whether or not their JSON token is valid.
##### Server/models
###### Post.js
Post Schema that represents a post object. Each post field will have a type associated with it, along with if it is required. Post is typed as a mongoose model and exported as ‘PostSchema.’
###### TwoFAUser.js
TwoFAUser Schema that represents a TwoFaUser object. These users include the email and associated current two factor authentication code sent to a user. Each TwoFAUser field will have a type associated with it, along with if it is required. TwoFAUser is typed as a mongoose model and exported as ‘TwoFAUser Schema.’
###### User.js
User Schema that represents a user object. Each user field will have a type associated with it, along with if it is required. User is typed as a mongoose model and exported as ‘UserSchema.’
#### Server/routes
All routes associated with their given name and define the making of the API. Contains all the end points for requests the frontend is making for the specified information.
###### Auth.js
###### Image.js

###### PostImage.js
###### Posts.js
###### TwpFA.js
###### Users.js
### Third Party Integrations 
#### Google
To allow for access to Google libraries and authentication, first create a Google developer account. Create a new project and navigate to APIs and Services. Under credentials, create a new OAuth 2.0 Client ID for google authentication. Add all URLs of locations that will use the Google button and the npm library ‘react-google-login’, under the section “Authorized Javascript Origins”. This includes links to all heroku branches, the main site, extension URL,  and localhost. With the new Client ID, replace the one in GoogleBtn.js. 
#### Google Chrome Extension
Add the URL from the Chrome extension to the authorized javascript origins (e.g. https://[extension_id_here].chromiumapp.org). To develop the extension, a Chrome developer account is needed (different than Google developer account). When ready to publish, create a new item and fill out all sections with the required information. 

To run and test the extension, go to chrome://extensions/ to upload locally. Choose “load unpacked” and upload the folder containing the extension (if prompted to upload a single file, choose the manifest.json file). A new ID value may be given. Replace all instances of the old ID with the new one. 
Facebook
Similar to Google, create a Facebook developers account. Create a new app for MyRead. Under Facebook Login/Settings, add all Javascript origins here that use the Facebook button and npm library ‘react-facebook-login’. With the new App ID, replace all instances of the old one with the new one in facebooklogin.component.js. 

#### Files
##### Client/external-logins
Contains components for Google and Facebook Authentication processes. Used for Login/Register on MyRead home page and Login page on the extension. 

##### Client/external-logins/GoogleBtn.js
Class component for implementation of the Google sign in button, as required by the npm library ‘react-google-login’. Allows for connection to Google account to fetch email and login information. 

##### Client/external-logins/facebooklogin.component.js
Traditional react component to allow for the use of Facebook login button. Similar to GoogleBtn.js in functionality. 


