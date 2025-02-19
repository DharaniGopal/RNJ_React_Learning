Theory:
1. How do you create Nested Routes react-router-dom cofiguration?
   Ans: To create a nested routes first we need to install react-router-dom. then we need to import in from the react-router-dom like router,route,switch.
   Then we have to assign this whole router in to one file, here App.js. the we have to write a code like this.
   Code:
   const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/Body",
        element: <Body />,
      },
    ],
   }
   Here login page and body are written in nested formate using switch. The possible first like will execute accourdingly.
2. Read abt createHashRouter, createMemoryRouter from React Router docs.
   Ans: createHashRouter : It is used to pass the url with the # in it.
   It is mostly used in single page applications where there is no server side changes is needed.
   createMemoryRouter : It is used to not update the browsers adderss bar.Used mostly in server-side rendering and testing environments.
4. What is the order of life cycle method calls in Class Based Components.
   Ans: The order of life cycle method calls in Class Based Components are:
   1. Constructor - has all the props and the state variables.
   2. router - here we have the html code to view the page
   3. componentDidMount - It is used to work with api calls and DOM Manuplations
   4. componentDidUpdate - After the dummy data is replaced wit the actuall API data it will execute.
   5. componentWillUnmount - It is used to teriminate the process when the component is not called.
● Why do we use componentDidMount?
Ans: ComponentDidMount is called imediately when the component get into the browser, It is used to work on the importent part to run.
     Mostely it is used to fectch the data and in DOM Manuplation
● Why do we use componentWillUnmount? Show with example
Ans: It is used to terimanate the process in current component is running when the user moves to another component.
Ex: If the setInterval is running, without closing it if we move to another component , the interval get run twice and it affect the performance of the project,
    to clear this we use componentWillUnmount because it called when the component get closed.
● Why do we use super(props) in constructor?
Ans : By using the super in the constructor we can get all the properties and methods from the parent class.
     It is necessary to use super in the constructor to properly inherit all the features from the parent.
● Why can't we have the callback function of useEffect async?
Ans : UseEffect normally return the cleanUp or nothing. If we use call back function like async in useEffect it return promises.
      where react get confused and because it return promises. UseEffect cannot cleanup using promises.
      It also can cause memory leak if the cleanUp function dosen't work correctly.
