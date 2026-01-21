import { ChevronDown, Headset } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NavItem } from "../../types/home";




const navItems: NavItem[] = [
  { label: "Home", dropdown: false, path: "/" },

  { label: "About", dropdown: false, path: "/about" },

  {
    label: "Shop",
   
  },

  {
    label: "Vendors",
    dropdown: true,
    links: [
      { name: "Vendor Dashboard", path: "/about" },
      { name: "Vendor Store", path: "/about" },
      { name: "Vendor Products", path: "/about" },
    ],
  },

  {
    label: "Mega menu",
    dropdown: true,
    links: [
      { name: "Category 1", path: "/about" },
      { name: "Category 2", path: "/about" },
      { name: "Category 3", path: "/about" },
    ],
  },

  {
    label: "Blog",
    dropdown: true,
    links: [
      { name: "Latest Posts", path: "/about" },
      { name: "Categories", path: "/about" },
      { name: "Single Post", path: "/about" },
    ],
  },

  {
    label: "Pages",
    dropdown: true,
    links: [
      { name: "About Us", path: "/about" },
      { name: "FAQ", path: "/about" },
      { name: "404 Page", path: "/about" },
    ],
  },

  { label: "Contact", dropdown: false, path: "/contact" },
];


const BrowseCategories = [
  "All",
  "Milk & Dairies",
  "Coffe & Teas",
  "Pet Fooods",
  "Meats",
  "Vegatables",
  "Fruits",
];

const Navigation = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [selected, setSelected] = useState("Browse All Categories");
    const [forceClose, setForceClose] = useState(false);
    const location = useLocation();

    const handleSelect = (cat:string) => {
      setSelected(cat === "All" ? "Browse All Categories" : cat);

      // temporarily disable hover → close dropdown
      setForceClose(true);
      setTimeout(() => setForceClose(false), 200);
    };

    useEffect(() => {
      setOpenDropdown(null)
    },[location.pathname])
  return (
    <div className="w-[95%] py-2 flex items-center justify-between mx-auto p-4 ">
      <div className="flex">

        {/* Browse category */}
        <div
      className={`
        relative group px-4 py-2 bg-primary flex items-center gap-2 rounded cursor-pointer
        ${forceClose ? "pointer-events-none" : ""}
      `}
    >
      <img src="/logo/browse.png" className="w-3 h-3" alt="" />

      <p className="font-quicksand font-bold text-[14px] text-white">
        {selected}
      </p>

      <ChevronDown className="w-4 mt-1 text-white group-hover:rotate-180 transition-transform duration-200" />

      {/* Dropdown */}
      <ul
        className={`
          absolute left-4 top-[44px] hidden 
          ${forceClose ? "" : " group-hover:block"}
          bg-white shadow-lg rounded-lg p-3 w-48 z-50
        `}
      >
        {BrowseCategories.map((cat, index) => (
          <li
            key={index}
            onClick={() => handleSelect(cat)}
            className="py-1 px-2 hover:bg-gray-100 font-heading cursor-pointer text-sm"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>

        {/* Navigation */}
        <div className="mx-8 flex items-center gap-6">

          <div className="flex items-center gap-1">
            <img src="/logo/fire.png" className="w-5 h-5" />
            <p className="font-heading hover:text-primary cursor-pointer text-sm">
              Hot Deals
            </p>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-x-4 font-heading relative text-sm">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!item.dropdown && item.path ? (
                  <Link to={item.path}>
                    <span className="hover:text-primary">{item.label}</span>
                  </Link>
                ) : (
                  <span className="hover:text-primary">{item.label}</span>
                )}

                {item.dropdown && (
                  <ChevronDown className="w-4 mt-1 text-black group-hover:text-primary transition-transform duration-200 group-hover:rotate-180" />
                )}

                {item.dropdown && item.links && (
                  <ul className={`absolute left-0 top-6  bg-white shadow-lg rounded-lg p-3 w-48 z-50    ${openDropdown === index ? "block" : "hidden"}`}>
                    {item.links.map((link, i) => (
                      <li
                        key={i}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Support section */}
      <div className="flex justify-center items-center">
        <Headset className="text-secondary w-8 h-8" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary font-bold text-[22px] font-Quicksand">
            1900888123
          </p>
          <p className="text-accent text-[12px] font-normal font-Lato -mt-2">
            24/7 Support Center
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
