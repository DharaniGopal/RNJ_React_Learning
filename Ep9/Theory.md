Theory :

1. When and why do we need lazy()?
   Ans: If the project get bigger we need lazy loading.
   We use lazy loading to load the screen and data slowly, so that we can optimize the project
   and it make the website more responsible.
2. What is suspense?
   Ans : In react suspense is a feature, It is used t manage asynchronous data fetching and code spiltting.
   It is used to combain lazy loading and dynamic imports,Which improves user experience.
3. Why we got this error : A component suspended while responding to
   synchronous input. This will cause the UI to be replaced with a loading indicator.
   To fix, updates that suspend should be wrapped with startTransition? How does
   suspense fix this error?
   Ans : To make the project more optimizing we chunck the project,
   for that we use lazy loading, it may take some time to load the component,in the middle React is faster so it execute faster so it wont wait until the page load, This cause the error, to avoid this we need falls UI or text show in suspend.
   {
   path : "/grocery",
   element : <suspense fallback= {<h1>LOADING...</h1>}><Grocery/></suspense>,
   }
4. Advantages and disadvantages of using this code splitting pattern?
   Ans: Advantage: Faster Initial Load Time, Similar maintanance, Improve performanace.
   Disadvantage: complex configuration, Initial loading Delay, Asynchronous Loading, Testing complexitiys.
5. When do we and why do we need suspense?
   Ans : In react it is a feature where to make asyncronous operations, code splitting and data fetching in more declerative and user-friendly manner.
