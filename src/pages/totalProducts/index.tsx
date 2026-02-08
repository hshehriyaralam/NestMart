
import {  ShoppingCart, Star } from "lucide-react";
import { newProducts } from "@/data/products";
import { useLocation } from "react-router-dom";
import CategoriesCard from "@/components/card/categories";

const TotalProducts = () => {
  const location = useLocation();

  const slugs = location.pathname.replace("/", "").split("/").filter(Boolean);

  const [parentSlug, subSlug, childSlug] = slugs;

  const filteredProducts = newProducts.filter((product) => {
    if (parentSlug && product.mainCategorySlug !== parentSlug) {
      return false;
    }

    if (subSlug && product.subCategorySlug !== subSlug) {
      return false;
    }

    if (childSlug && product.childCategorySlug !== childSlug) {
      return false;
    }

    return true;
  });

  return (
    <div className="w-full max-w-[100%]">
      <div className="flex gap-6 max-w-[92%] mx-auto">
        {/* Sidebar */}
        <div className="w-[25%] hidden md:block z-50">
          <div className="sticky pt-4 top-0">
            <CategoriesCard />
          </div>
        </div>

        {/* Products */}
        <div className="w-full md:w-[72%]">
          <div className="">
            <h2 className="font-heading text-2xl py-6">
              {childSlug?.toUpperCase() || subSlug?.toUpperCase() || parentSlug?.toUpperCase() || "All Products"}
              {/* All Products */}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {filteredProducts?.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >

                  {/* Stock Status */}
                  {product.stock <= 5 && product.stock > 0 && (
                    <span className="absolute top-3 right-3 bg-rose-100 text-rose-700 text-[9px] font-semibold px-2 py-1 rounded-full z-10">
                      Only {product.stock} left
                    </span>
                  )}
                  {product.stock === 0 && (
                    <span className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-[9px]
                    font-semibold px-2 py-1 rounded-full z-10">
                      Out of Stock
                    </span>
                  )}

                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full border border-indigo-100">
                        {product.childCategory}
                      </span>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-gray-700">
                          {product.ratings.average}
                        </span>
                        <span className="text-xs text-gray-400">
                          ({product.ratings.totalReviews})
                        </span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-secandary text-[15px]  line-clamp-2 group-hover:text-primary transition-colors h-10">
                      {product.name}
                    </h3>

                    {/* Price Section */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-md font-bold text-secondary ">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-gray-400 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={product.stock === 0}
                      className={`w-full flex items-center justify-center gap-2 py-2 px-4  rounded-xl font-medium transition-all duration-200 cursor-pointer text-[15px] 
                         ${
                        product.stock === 0
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                      }`}
                    >
                      {product.stock === 0 ? (
                        "Out of Stock"
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 py-10">
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProducts;
