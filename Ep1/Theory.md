Chapter 01 

Inception Link to my Code Theory -

● What is Emmet? 
	Emmet is a predefined function that executes the basic needed code for html and css.We can edit as per our needs.
 
● Difference between a Library and Framework? 
Library - It is a predefined program that support the developing project 

● What is CDN? Why do we use it? 
CDN - Content Delivery Network 
It is a group of servers located in different places. It is used to update and retrieve the data searched by users according to their location.

● Why is React known as React? 

● What is crossorigin in script tag? 
	It helps the application to interact with the resources in different domains.
 
● What is diference between React and ReactDOM 
	React - 
	ReactDOM - ReactDOM helps in manipulating the project
 
● What is the difference between react.development.js and react.production.js files via CDN? 

● What is async and defer? - see my Youtube video ;) Coding 


Chapter 02 - Assignment 

Theory Assignment: 

● - What is `NPM`? 
Not an abbreviation - It is a node package model - used to download the dependencies for the project

● - What is `Parcel/Webpack`? Why do we need it? 
	Parcel/Webpack is a development dependency used to ignite our application. 
It helps us in different ways to run our application fast.

● - What is `.parcel-cache` 
	It is a file that created while running a command npx parcel index.html
	It contains all the files to run locally, that is dependency ready.
	It updates the changes in the browser without refreshing it.
 
● - What is `npx` ? 
	Node package execute - It is used to execute the project, where npm is used to install the needed packages and npm is used to execute the packages.
 
● - What is difference between `dependencies` vs `devDependencies` 
	Dependencies - It is a normal dependency downloaded for a project. It is also called transitive dependencies.
	DevDependencies - This dependencies are used for development purpose.
 
● - What is Tree Shaking? 
Tree Shaking -It is one of the advantages of parcel. It is used to eliminate the files that we never used.

● - What is Hot Module Replacement? 
	HMR- It is used to update the changes in the project without refreshing the page in domains like chrome. Parcel uses parcel-cache to execute this.
 
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words. 
	Image optimization - Parcel is used in images to execute in project
	Minifing - minimising the size of the application for faster execution
	Compresing - compressing the files to make it lite weighted.
	Bunduling 
	https
 
● - What is `.gitignore`? What should we add and not add into it? 
	It is a file used to add the file names. Which are not needed to push into the git repository.
	The files that can be re-generated while execution should be added here. Eg: node_modules
	The files that are cannot be re-generated while execution should not be added.
 
● - What is the difference between `package.json` and `package-lock.json` 
	Package.json - contains the relevant version of dependencies.
	Package-lock.json - contains the exact updated version of all dependencies.
 
● - Why should I not modify `package-lock.json`? 

● - What is `node_modules` ? Is it a good idea to push that on git? 
	No, node_modules can be regenerated in both local and production ready applications.
So, there is no need to update in git.

● - What is the `dist` folder? 
	Dist - it is a folder generated automatically while running npx parcel index.html command. Which contains all the files that are ready to execute in local until the application is moved to production ready. After that it includes the files that are ready for production.
 
● - What is `browserlists` 
	Browserlists -  It is used to restrict the application to run in all the versions of domains.
We can customize in which domains and versions our allocation has to run.
This is added in the package.json file.




