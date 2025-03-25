Chapter 11 - Data is the new Oil
Theory:
● What is prop drilling?
Ans: Props drilling is passing a data(props) from parent components to its deeply nested child component.
The middle components need to pass the props even though the are not using it.
● What is lifting the state up?
Ans: To collect the data from the multiple children or to make the two child components to communicate with each other, declare the shared state in their parent component.
● What is Context Provider and Context Consumer?
Ans: Context provider -> It is a component used to pass the values to its child components using React context API. It allows us to pass the values or states to the components globally without props drilling.
context consumer -> To use useContext in class based components we use context provider.
It is a component that subscribes to a context provider to access the data that provided by a context provider.
● If you don’t pass a value to the provider does it take the default value?
Ans: Yes, If no values where passed then the default value is taken. If there is any value passed then it override the default values.
