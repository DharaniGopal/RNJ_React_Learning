1. What is a Microservice?<br/>
Ans : Is is a service where Back end, UI, DataBase, Api, SMS, Email every thing works independent. Then it intract using links or hosted ports.<br/>
2. What is Monolith architecture?<br/>
Ans: In this architecture every thing bind together, using this architecture we can develop small application. If there is any buck in one part then the whole application get affected.<br/>
3. What is the difference between Monolith and Microservice?<br/>
Ans: Monolith: everything binds together. Get affected by bucks easily.<br/>
Microservice : Everything works independently. If one part id affected other parts of application will work.<br/>
4. Why do we need a useEffect Hook?<br/>
Ans: useEffect hook is used in DOM Manuplation, API calls. It perform side effects in DOM manipulation. It will render after component get rendered.<br/>
5. What is Optional Chaining?<br/>
Ans: Optional Chaining is used in json path. It is used to simlify the deeply nested objects. If (?.) used before the object, if it return null, it automatically return undefine or null.<br/>
6. What is Shimmer UI?<br/>
Ans: It is used to view before the data get fetched throw Api. It is also called skeleton of the project. <br/>
7. What is the difference between JS expression and JS statement<br/>
Ans: Js Expression  - returns value , Statement - not always. Experssion - used as an assignment, statement - no .<br/>
8. What is Conditional Rendering, explain with a code example<br/>
Ans: It is called executing the code based on the condition.
Code:
const a = "Hi";
return a.length == 0 ? <h1> Welcome </h1> : <h1> Hi </h1>; <br/>
9. What is CORS?<br/>
Ans: CORS - Cross Origin Resourse Sharing. - It occurs when a application make ajax call of the server outside, due to security perpose it wont work. To solve this we use CORS.<br/>
10. What is async and await? <br/>
Ans: It is a feature in javascript, to make the asynchronous code more readable, easier and cleaner. It work with promises to make the asynchronous code work and behave like a synchronous code.<br/>
11. What is the use of `const json = await data.json();` in getRestaurants() <br/>
Ans: This code is used to convert the restarent data from the API call into json method to use in cards.<br/>
