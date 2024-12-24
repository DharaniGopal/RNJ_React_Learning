Chapter 03 - Laying the Foundation
Assignment
● What is JSX? Ans: JSX is a Javascript XML. It is build by facebook to use in react.js development to make the code more readable because it looks alike HTML.
● Superpowers of JSX - Ans: 1. Can write Javascript inside it using {} <br/> 2. Jsx won't allow malicious data. It check the code and secure the code and execute it.

● Role of type attribute in script tag? What options can I use there? Ans: using a script tag inside JSX we can add javascript and react element inside it.
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX Ans : All are same. we calling a component in different methods.

Coding Assignment:

● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX <br/>

Ans: const headingreact = React.createElement( <br/>
  "div", <br/>
  { class: "test" }, <br/>
  ("h1", {}, ("h2", {}, ("h3", {}, "test"))) <br/>
); <br/><br/>

const headingjsx = ( <br/>
  <div className="test"> <br/>
    <h1> <br/>
      <h2> <br/>
        <h3>test</h3> <br/>
      </h2> <br/>
    </h1> <br/>
  </div> <br/>
); <br/><br/>

const Headingcomponentjsx = () => {<br/>
  return (<br/>
    <div className="test"><br/>
      <h1 id="test1"><br/>
        <h2><br/>
          <h3>This is Headingcomponentjsx</h3><br/>
        </h2><br/>
      </h1><br/>
    </div><br/>
  );<br/>
};<br/>

const Headingcomponentjsx1 = () => {<br/>
  return (<br/>
    <div className="test"><br/>
      <Headingcomponentjsx /><br/>
      <Headingcomponentjsx></Headingcomponentjsx><br/>
      {Headingcomponentjsx}<br/>
      <h1 id="test1">This is Headingcomponentjsx1</h1><br/>
    </div><br/>
  );<br/>
};<br/><br/>

const Root = ReactDOM.createRoot(document.getElementById("root"));<br/>
Root.render(<Headingcomponentjsx1 />);<br/>


● Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice

