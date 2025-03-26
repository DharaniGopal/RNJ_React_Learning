import Logo from "../../image/logo.jpeg";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-amber-300 shadow-lg m-2 sm:bg-yellow-200 lg:bg-white">
      <div className="flex items-center">
        <img className="w-24" alt="logo-img" src={Logo} />
        <input
          className=" h-7 w-75 p-4 m-4 border border-none rounded-lg hover:bg-gray-100"
          placeholder="Your Location"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold hover:text-amber-600">
            <Link to="/">Ghee</Link>
          </li>
          <li className="px-4 font-semibold hover:text-amber-600">
            {/* <Link to="/about">About us</Link> */}
            <Link to="/about">Search</Link>
          </li>
          <li className="px-4 font-semibold hover:text-amber-600">
            {/* <Link to="/contact">Contact</Link> */}
            <Link to="/contact">Offers</Link>
          </li>
          <li className="px-4 font-semibold hover:text-amber-600">Help</li>
          <li className="px-4 font-semibold hover:text-amber-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold hover:text-amber-600">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 font-semibold hover:text-amber-600">
            <button
              onClick={() => {
                loginBtn == "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="px-4 font-semibold hover:text-amber-600">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
