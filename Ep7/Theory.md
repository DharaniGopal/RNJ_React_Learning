Chapter 07 - Finding the Path
Assignment
1. What are various ways to add images into our App? Explain with code examples
Ans: There are several way to add image into and application
  1. URL - directly importing the url into the code - <img src="/image/Link" />
  2. Import from app - Create a folder and Download the image - add it into the folder - import the image using the path - import image from "./assets/img"; the use it in code     : <img src= {image} />
  3. public folder - we can also keep it in the public and use it - <img src="`${process.env.PUBLIC_URL}/myimage.png" />
  4. CSS - using inline css or css file we can add a image - background: "url('/image/Link')"
2. What would happen if we do console.log(useState())?
   Ans: It shows the state value - undefine or the value of state variable or nothing
3. How will useEffect behave if we don't add a dependency array ?
   Ans: useEffect without [] - execute every time when the component get rendered.
   useEffect with empty [] - run only one on the initial state of component renders.
   useEffect with a variable in [] - [count] - runs only when the state of the variable get changed.
4. What is SPA?  Ans: Single Page Application - It a application that is dynamic accourding to the user intraction, without reloading the entire page.
5. What is difference between Client Side Routing and Server Side Routing?
   Ans: Server Side Routing - Whenever the URL or Link get hit the request send to the server and a new page is loaded from the server.
   Client Side Routing - An single page load's initially, then the javascript runs in the background of the page get the page when the link get hit, without reloading it.
