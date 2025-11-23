import {
  ChevronDown,
} from "lucide-react";

const Banner = () => {
  const navigationItems = [
    { label: "About Us", hasBorder: false },
    { label: "My Account", hasBorder: true },
    { label: "Wishlist", hasBorder: true },
    { label: "Order Tracking", hasBorder: true },
  ];


  return (
    <div className="w-[92%] mx-auto h-10 hidden lg:flex justify-between items-center bg-transparent
     ">
      <div >
        <ul className="flex  items-center gap-2">
          {navigationItems.map((item) => (
            <li 
              className={`action-button-text text-xs gap-4
                 font-medium ${item.hasBorder ? 'border-l pl-1' : ''}`} 
              key={item.label}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="action-button-text text-sm font-medium ">100% Secure delivery without contacting the courier</p>
      </div>

      <div>
        <ul className="flex gap-2">
          <li className="action-button-text text-xs flex items-center font-medium">
            Need help? Call Us: <span className="text-primary">+ 1800 900</span></li>
          <li className="action-button-text text-xs flex items-center font-medium">English <ChevronDown className="w-3 "/></li>
          <li className="action-button-text text-xs flex items-center font-medium ">USD<ChevronDown className="w-3 "/></li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
