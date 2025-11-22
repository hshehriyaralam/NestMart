import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", dropdown: false },

  { label: "About", dropdown: false },

  { 
    label: "Shop", 
    dropdown: true,
    links: ["Shop Grid", "Shop List", "Shop Details"]
  },

  { 
    label: "Vendors", 
    dropdown: true,
    links: ["Vendor Dashboard", "Vendor Store", "Vendor Products"]
  },

  { 
    label: "Mega menu", 
    dropdown: true,
    links: ["Category 1", "Category 2", "Category 3"]
  },

  { 
    label: "Blog", 
    dropdown: true,
    links: ["Latest Posts", "Categories", "Single Post"]
  },

  { 
    label: "Pages", 
    dropdown: true,
    links: ["About Us", "FAQ", "404 Page"]
  },

  { label: "Contact", dropdown: false },
];

const Navigation = () => {
  return (
    <div className="border w-full py-[20px]">
      <div className="flex">
        
        {/* Browse category */}
        <div className="px-4 py-2 bg-primary flex items-center gap-2 rounded">
          <img src="/logo/browse.png" className="w-3 h-3" />
          <p className="font-quicksand font-bold text-[14px] text-white">
            Browse All Categories
          </p>
          <ChevronDown className="w-4 mt-1 text-white cursor-pointer" />
        </div>

        {/* Navigation */}
        <div className="mx-8 flex items-center gap-6">
          
          {/* Deals */}
          <div className="flex items-center gap-1">
            <img src="/logo/fire.png" className="w-5 h-5" />
            <p className="font-heading hover:text-primary cursor-pointer">
              Deals
            </p>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-x-4 font-heading relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group flex items-center gap-1 cursor-pointer"
              >
                {/* Text */}
                <span className="hover:text-primary">{item.label}</span>

                {/* Arrow Icon */}
                {item.dropdown && (
                  <ChevronDown className="w-4 mt-1 text-black group-hover:text-primary transition-transform duration-200 group-hover:rotate-180" />
                )}

                {/* Dynamic Dropdown */}
                {item.dropdown && item.links && (
                  <ul className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-lg rounded-lg p-3 w-48 z-50">
                    {item.links.map((link, i) => (
                      <li
                        key={i}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navigation;
