import Nest from "/logo/Nest.svg";
import Clock from "/logo/icon-clock.png";
import Contact from "/logo/icon-contact.svg";
import Location from "/logo/icon-location.svg";
import Email from "/logo/icon-email.png";
import Playstore from "/logo/163.svg";
import Appstore from "/public/logo/162.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-20 bg-white">
      <div className="flex justify-between items-start gap-10">
        {/* Logo & Info */}
        <div className="max-w-xs flex flex-col gap-4  w-64">
          <div className="flex items-center gap-2">
            <img src={Nest} alt="logo" className="w-32" />
          </div>
          <p className="font-lato text-regular text-secondary">
            Awesome grocery store website template
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <img
                src={Location}
                alt="location"
                className="w-4 mt-1"
              />
              <span className="font-lato text-sm text-secondary">
                <span className="font-semibold">Address:</span> 5171 W Campbell Ave
                <br />
                undefined Kent, Utah 53127 United States
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={Contact} alt="phone" className="w-3" />
              <span className="font-lato text-sm text-secondary"><span className="font-semibold">Call Us:</span> (+91) - 540-025-124553</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={Email} alt="email" className="w-3" />
              <span className="font-lato text-sm text-secondary"><span className="font-semibold">Email:</span> sale@Nest.com</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={Clock} alt="hours" className="w-3" />
              <span className="font-lato text-sm text-secondary"><span className="font-semibold">Hours:</span> 10:00 - 18:00, Mon - Sat</span>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 font-heading">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">About Us</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Delivery Information</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Contact Us</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Support Center</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-3 font-heading">Account</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Sign In</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">View Cart</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">My Wishlist</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Track My Order</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Help Ticket</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Shipping Details</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Compare products</Link>
            </li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold mb-3 font-heading">Corporate</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Become a Vendor</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Affiliate Program</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Farm Business</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Farm Careers</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Our Suppliers</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Accessibility</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Promotions</Link>
            </li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold mb-3 font-heading">Popular</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Milk & Flavoured Milk</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Butter and Margarine</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Eggs Substitutes</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Marmalades</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Sour Cream and Dips</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Tea & Kombucha</Link>
            </li>
            <li>
              <Link className="font-lato text-sm text-secondary" to="#">Cheese</Link>
            </li>
          </ul>
        </div>

        {/* Install App */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold mb-3 font-heading">Install App</h3>
          <div className="flex items-center gap-2 mb-2">
            <img src={Playstore} alt="playstore" className="w-20" />
            <img src={Appstore} alt="appstore" className="w-20" />
          </div>
          <p className="font-lato text-sm text-secondary">Secured Payment Gateways</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
