import {
  ChevronDown,
  Heart,
  MapPin,
  RefreshCw,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoriesData } from "@/data/categories.data";

const SearchBarCategories = () => {
  const [selected, setSelected] = useState("All Categories")

  const handleSelect = (cat: string) => {
    setSelected(cat === "All" ? "All Categories" : cat);
  }

  return (
    <nav className="w-[95%]  mx-auto  bg-transparent border-b border-gray-200 py-4 px-0  ">
      <div className="max-w-full  flex items-center justify-between  ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo/Nest.svg" alt="nest-logo" className="w-30" />
        </div>

        {/* Search Bar */}
        <div
          className="lg:max-w-[600px] h-[50px] flex items-center border-2
           border-green-200  rounded pl-2 pr-4 ">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex justify-center items-center gap-2 w-[150px] 
              cursor-pointer outline-none">
                <span className="font-heading text-sm">{selected}</span>
                <ChevronDown className="w-3 transition-transform duration-200 
                data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[150px]">
              <DropdownMenuItem
                onClick={() => handleSelect("All")}
                className="font-heading text-xs cursor-pointer"
              >
                All Categories
              </DropdownMenuItem>
              {categoriesData.map((cat, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleSelect(cat.name)}
                  className="font-heading text-xs cursor-pointer"
                >
                  {cat.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="w-px h-6 bg-gray-300 mx-4"></span>
          <input
            type="text"
            placeholder="Search for items"
            className="w-[400px] outline-0"
          />
          <Search className="w-5 text-gray-400" />
        </div>
        {/* Actions */}
        <div className="lg:flex items-center gap-4 p-2 ">
          {/* location */}
          <button
            className="flex items-center justify-center gap-1 
           border border-gray-200 py-1 px-2 rounded-lg   cursor-pointer "
          >
            <MapPin className="text-[#B6B6B6] w-4 " />
            <span className="font-quicksand text-primary font-medium text-[13px]">
              Your Location
            </span>
            <ChevronDown className="w-3 text-[#B6B6B6]" />
          </button>

          {/* icons group */}
          <div className="flex gap-1">
            <button className="flex  items-end cursor-pointer   ">
              <RefreshCw className="text-secondary opacity-70  w-6  " />
              <span className="action-button-text text-sm font-medium  ">Compare</span>
              <div
                className="w-4  h-4  relative  right-17  bottom-3 bg-primary flex justify-center items-center  rounded-full " >
                <span className="text-white text-[9px] " >3</span>
              </div>
            </button>

            <button className="flex items-end  cursor-pointer ">
              <Heart className="text-secondary opacity-70  w-6 " />
              <span className="action-button-text text-sm font-medium">Wishlist</span>
              <div
                className="w-4  h-4  relative  right-16  bottom-3 bg-primary flex justify-center items-center  rounded-full " >
                <span className="text-white text-[9px] " >6</span>
              </div>
            </button>

            <button className="flex items-end cursor-pointer">
              <ShoppingCart className="text-secondary opacity-70  w-6 " />
              <span className="action-button-text text-sm font-medium">Cart</span>
              <div
                className="w-4  h-4  relative  right-10  bottom-3 bg-primary flex justify-center items-center  rounded-full " >
                <span className="text-white text-[9px] " >2</span>
              </div>
            </button>

            <button className="flex items-end  cursor-pointer">
              <User className="text-secondary opacity-70  w-6 " />
              <span className="action-button-text text-sm font-medium">Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBarCategories;
