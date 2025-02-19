import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // console.log("parent componentDidMount");
    // const data = await fetch("https://api.github.com/users/DharaniGopal");
    // const json = await data.json();
  }

  render() {
    return (
      <div className="about">
        <h1>About Page</h1>
        <UserClass name={"Dharani"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Page</h1>
//     </div>
//   );
// };

export default About;
