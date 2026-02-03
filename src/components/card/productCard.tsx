
import CartButton from "../button/cartButton";
import { ShoppingCart, } from "lucide-react";

interface Product {
  id: number;
  badge: string | null;
  badgeColor: string | null;
  image: string;
  category: string;
  name: string;
  rating: number;
  brand: string;
  price: number;
  originalPrice: number;
}

interface ProductsProps {
  products: Product[];
}

export default function ProductCard(data: ProductsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 ">
        {data.products.map((product) => (
          <div key={product.id} className="border-2 border-gray-200 px-2 py-1 md:px-3 rounded-xl relative flex flex-col ">
            <div className="w-full h-[180px] p-2 md:p-3 " >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full  flex flex-col flex-1 ">
              <p className="font-medium action-button-text py-1">{product.category}</p>
              <h1 className="font-heading py-1 min-h-14 line-clamp-2">{product.name}</h1>
              <div className="flex items-center gap-x-4">
                <p className="text-accent  font-lato text-sm font-medium "> ({product.rating})</p>

              </div>

              <div className="flex items-center justify-between py-1.5 mt-auto">
                <div>
                  <span className="font-heading-1_0 text-primary">
                    $<span className="font-heading-1_0 text-primary">{product.price}</span>
                  </span>{" "}
                  <span className="font-heading-1_0 text-accent text-sm line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <CartButton
                  size="sm"
                  variant="primary"
                  icon={<ShoppingCart size={18} />}
                  className="p-2"
                >
                  Add
                </CartButton>
              </div>

            </div>
          </div>
        ))}
      </div>

    </>

  );
}
