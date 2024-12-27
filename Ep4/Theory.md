Chapter 04 - Talk is cheap, show me the code! <br/>
● Is JSX mandatory for React? <br/>
Ans: No, JSX is not mandotary but it is recommanded to use jsx because it is the best practice to make the code more readable. React can itself run with combaining javascript but jsx makes i easier to understand more easier.
● Is ES6 mandatory for React? <br/>
Ans: No, Es6 not mandatory but it is recommamnded to use ES6 because it makes the code more readable and easy to maintain. 
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX <br/>
Ans : All are same. They are used to call a component inside another component.
● How can I write comments in JSX? <br/>
Ans: for single line we use //. For more then a line we use /* comment */
● What is <React.Fragment></React.Fragment> and <></> ? <br/>
Ans: It is a react feature to avoid the unwanted DOM nodes to be rendered unnecessarily. inseted of putting many dom nodes into <div></div> we can use <></>.
● What is Virtual DOM? <br/>
Ans: Virtual Dom is a copy of real DOM. It is created to make the website more responsive. Everything first replaced in virtual DOM and then the changed segment only replaced with Real Dom.
● What is Reconciliation in React? <br/>
Ans: When there is a changes in states and props in components, react compares it with the new virtual DOM tree with the previous and determines the changes and updates only the changes in real DOM.
● What is React Fiber? <br/>
Ans: React Fiber is an algorithm used in rendering and reconciliation to make the react app more responsive even in the complex loading. It divides the react into small packages and make it responsive. It uses Pause, Prioritize and resume methods.
● Why we need keys in React? When do we need keys in React?<br/>
Ans: Mostly the Keys are used when the array list to be used. If we didn't use keys the react start to render all the data in the list when the new data is added in the list. Using key it is easy for react to render only the new data. So it is more responsive.
● Can we use index as keys in React?<br/>
Ans: Yes, But it is not a good practice to use index. 
● What is props in React? Ways to<br/>
Ans: Props are called propities used to pass the values from on component to another.
● What is a Config Driven UI ? <br/>
Ans: It views the data accourding to the place where it viewed. Can customize the application based on the view.


