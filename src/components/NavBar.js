import HamburgerMenu from "../assets/hamburger.png";
import Logo from "../assets/logo.png";

const navBar = (props) => {
  let routeLinks = ["Home", "Stores", "Cart", "Sign Up", "Login"];
  return (
    <div className={props.nativeSpacing}>
      <div className="flex justify-start">
        <div className="flex">
          <img src={Logo} alt="" className="mr-2" />
          <h2 className="font-semibold flex items-center">Trendz</h2>
        </div>
        <div className="ml-auto flex items-center">
          <div className="flex">
            <img src={HamburgerMenu} alt="" className="mr-6 sm:hidden" />
            <div className="hidden sm:flex">
              {routeLinks.map((link, index) => (
                <h4 key={index} className="mr-8">
                  {link}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navBar;
