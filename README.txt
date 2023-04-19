# Create react app
npx create-react-app <AppName>

# Start the application
.\cd <AppName>
npm start
Once its done, webpage can be accessed at http://localhost:3000

# About the folders
node_modules --> Has all the third party tools and libraries we installed	--> Never touch this one! --> This is very huge and also it is not required to be backed up
public --> Public assets (like images, files) of our website exist
src --> All the application code is written here
index.html --> In this the <div id="root"></div> is the landing page or entry point for the web application
package.json --> Has all the dependencies for the website
index.js --> Starting point of the application

# Managing content in folders
Create components folder --> To store the Header.js and other components (components are individual piece of code)
Create images folder --> To store all the images used for the website

ALWAYS MAKE SURE YOU SAVE THE CHANGES, IF NOT YOU GET ERRORS SAYING COMPONENTS NOT FOUND

# Using https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css for css, copy the code link and add that in index.html instead of mainfest add this link

# Import and Export a .js file
If a .js file is used in another file so import Header.js we should add import Header from "./Header";
To make sure the import works --> We need to export the Header file as well, so use export default Header;