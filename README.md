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

