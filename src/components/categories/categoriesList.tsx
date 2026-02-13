import { ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-[97%] mx-auto">
        <div className="relative group">
          <h2 className="font-heading text-2xl py-6 px-2">Categories</h2>
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center 
                        justify-center bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronRight className="w-5 h-5 rotate-180 text-gray-700" />
          </button>

          {/* Scrollable Container with Two Rows */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="grid grid-rows-2 grid-flow-col gap-x-12 gap-y-4 auto-cols-max pb-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 w-32 cursor-pointer group/item"
                >
                  {/* Circular Image Container */}
                  <div className="relative rounded-full w-[130px] h-[130px] mx-auto bg-white border border-gray-200 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                    />
                  </div>

                  {/* Category Name */}
                  <p className="text-center font-inter text-sm font-medium text-gray-700 mt-2 group-hover/item:text-primary transition-colors">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
