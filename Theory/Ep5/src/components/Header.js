import Logo from "../../image/logo.jpeg";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

