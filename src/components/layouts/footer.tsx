import Nest from "/logo/Nest.svg";
import Clock from "/logo/icon-clock.png";
import Contact from "/logo/icon-contact.svg";
import Location from "/logo/icon-location.svg";
import Email from "/logo/icon-email.png";
import Playstore from "/logo/163.svg";
import Appstore from "/logo/162.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactInfo = [
    { icon: Location, label: "Address:", value: "5171 W Campbell Ave, Kent, Utah 53127 United States" },
    { icon: Contact, label: "Call Us:", value: "(+91) - 540-025-124553" },
    { icon: Email, label: "Email:", value: "sale@Nest.com" },
    { icon: Clock, label: "Hours:", value: "10:00 - 18:00, Mon - Sat" },
  ];

  const sections = [
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Delivery Information", to: "/blog" },
        { label: "Privacy Policy", to: "/blog/:id" },
        { label: "Terms & Conditions", to: "/terms" },
        { label: "Contact Us", to: "/contact" },
        { label: "Support Center", to: "/support" },
        { label: "Careers", to: "/careers" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Sign In", to: "/signin" },
        { label: "View Cart", to: "/cart" },
        { label: "My Wishlist", to: "/wishlist" },
        { label: "Track My Order", to: "/track-order" },
        { label: "Help Ticket", to: "/help-ticket" },
        { label: "Shipping Details", to: "/shipping-details" },
        { label: "Compare products", to: "/compare-products" },
      ],
    },
    {
      title: "Corporate",
      links: [
        { label: "Become a Vendor", to: "/vendor" },
        { label: "Affiliate Program", to: "/affiliate" },
        { label: "Farm Business", to: "/farm-business" },
        { label: "Farm Careers", to: "/farm-careers" },
        { label: "Our Suppliers", to: "/suppliers" },
        { label: "Accessibility", to: "/accessibility" },
        { label: "Promotions", to: "/promotions" },
      ],
    },
    {
      title: "Popular",
      links: [
        { label: "Milk & Flavoured Milk", to: "/milk" },
        { label: "Butter and Margarine", to: "/butter" },
        { label: "Eggs Substitutes", to: "/eggs" },
        { label: "Marmalades", to: "/marmalades" },
        { label: "Sour Cream and Dips", to: "/sour-cream" },
        { label: "Tea & Kombucha", to: "/tea" },
        { label: "Cheese", to: "/cheese" },
      ],
    },
  ];

  return (
    <footer className="py-8 md:py-12 px-4 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-10">
        {/* Logo & Info */}
        <div className="w-full md:w-64 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={Nest} alt="logo" className="w-32" />
          </div>
          <p className="font-lato text-sm md:text-md text-secondary">
            Awesome grocery store website template
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            {contactInfo.map((info, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src={info.icon} alt={info.label} className="w-4 mt-1 flex-shrink-0" />
                <span className="font-lato text-xs md:text-sm text-secondary">
                  <span className="font-semibold">{info.label}</span> {info.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Sections for desktop  */}
        
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="hidden lg:flex flex-col gap-3 w-1/2 md:w-auto "
          >
            <h3 className="font-heading font-semibold text-base md:text-lg">{section.title}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="font-lato text-xs md:text-sm font-medium text-secondary hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}


        {/* Navigation Sections for mobile   */}
        <div  className="flex flex-row flex-wrap gap-y-6">
      {sections.map((section, idx) => (
          <div
            key={idx}
            className="lg:hidden flex flex-col gap-3 w-1/2 md:w-auto "
          >
            <h3 className="font-heading font-semibold text-base md:text-lg">{section.title}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="font-lato text-xs md:text-sm font-medium text-secondary hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>


        {/* Install App */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <h3 className="font-heading font-semibold text-base md:text-lg">Install App</h3>
          <div className="flex gap-2 mb-2 flex-wrap">
            <img src={Playstore} alt="playstore" className="w-20" />
            <img src={Appstore} alt="appstore" className="w-20" />
          </div>
          <p className="font-lato text-xs md:text-sm text-secondary">Secured Payment Gateways</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
