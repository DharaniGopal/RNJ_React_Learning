import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="userDiv">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h1>Name: {name}</h1>
      <h2>Role: Developer</h2>
      <h2>Contact: 890-7640-125</h2>
    </div>
  );
};

export default User;
