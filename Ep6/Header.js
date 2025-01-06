import Logo from "../../image/logo.jpeg";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo-img" alt="logo-img" src={Logo} />
      </div>
      <div className="header-menus">
        <ul>
          <li>Home</li>
          <li>Offer</li>
          <li>Help</li>
          <li>Cart</li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                loginBtn == "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
