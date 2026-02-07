import CartButton from "@/components/button/cartButton";
import { ShoppingCart } from "lucide-react";
import { allProducts } from "@/data/allProducts";
import { useParams, useSearchParams } from "react-router-dom";
import CategoriesCard from "@/components/card/categories";


const TotalProducts = () => {
  const { categorySlug } = useParams(); // route param
  const [searchParams] = useSearchParams(); // query params

  //   const childSlug = searchParams.get("child"); // child/grandchild
  const parentSlug = searchParams.get("parent"); // optional parent

  const filteredProducts = allProducts.filter(product => {
    const mainMatch = parentSlug ? product.mainCategorySlug === parentSlug : true;
    const childMatch = categorySlug ? product.childCategorySlug === categorySlug || product.subCategorySlug === categorySlug : true;
    return mainMatch && childMatch;
  });


  return (
    <div className="w-full max-w-[100%]">
      {/* Left and right section */}
      <div className="flex gap-6 max-w-[92%] mx-auto">
        {/* Left Side Items - Categories Sidebar */}
        <div className="w-[25%] hidden md:block z-50">
          <div className="sticky pt-4 top-0 transition-all duration-500">
            <CategoriesCard />
          </div>
        </div>

        {/* Right Side Items - Products */}
        <div className="w-full md:w-[72%]">
          <div className="p-10">
            <h2 className="font-heading text-2xl py-6">All Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 ">
              {filteredProducts?.map(product => (
                <div key={product.id} className="border-2 border-gray-200 px-2 py-1 md:px-3 rounded-xl relative flex flex-col ">
                  <div className="w-full h-[180px] p-2 md:p-3">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full flex flex-col flex-1">
                    <p className="font-medium action-button-text py-1">{product.mainCategory}</p>
                    <h1 className="font-heading py-1 min-h-14 line-clamp-2">{product.name}</h1>
                    <div className="flex items-center gap-x-4">
                      <p className="text-accent font-lato text-sm font-medium ">({product.rating})</p>
                    </div>
                    <div className="flex items-center justify-between py-1.5 mt-auto">
                      <div>
                        <span className="font-heading-1_0 text-primary">
                          ${product.price}
                        </span>{" "}
                        <span className="font-heading-1_0 text-accent text-sm line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <CartButton size="sm" variant="primary" icon={<ShoppingCart size={18} />}>Add</CartButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default TotalProducts