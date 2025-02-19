import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserInfo: {
        login: "Dummy",
        location: " Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DharaniGopal");
    const json = await data.json();

    this.setState({
      UserInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("CHILD ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CHILD ComponentWillUnmount");
  }

  render() {
    // const { name } = this.props;
    const { login, id } = this.state.UserInfo;
    return (
      <div className="userDiv">
        <h1>Name: {login}</h1>
        <h2>Id: {id}</h2>
        <h2>Contact: 890-7640-125</h2>
      </div>
    );
  }
}

export default UserClass;

