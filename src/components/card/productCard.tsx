
import CartButton from "../button/cartButton";
import { ShoppingCart, Star } from "lucide-react";




export interface Product {
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

export default function ProductCard(data: Product) {
  return (
    <div className="border-2 border-gray-200 p-3 rounded-xl relative flex flex-col max-h-full">
      <div className="absolute top-1 -left-px z-10">
        {data?.badge && (
          <span
            className={`font-lato text-regular ${data.badgeColor} text-white px-4 py-2 text-sm font-medium rounded-tl-lg rounded-br-lg`}
          >
            {data.badge}
          </span>
        )}
      </div>
      <div className="w-full h-[220px] overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full  p-2 flex flex-col flex-1">
        <p className="font-medium action-button-text py-1">{data.category}</p>
        <h1 className="font-heading py-1.5 min-h-14 line-clamp-2">{data.name}</h1>
        <div className="flex items-center  gap-x-6">
          <span className="flex ">
            <Star className='w-5 h-5 text-white fill-yellow-500' />
            <Star className='w-5 h-5 text-white fill-yellow-500' />
          </span>
          <p className="text-accent  font-lato text-sm font-medium "> ({data.rating})</p>

        </div>
        <p className="text-accent font-lato mb-auto">
          By <span className="text-primary font-lato">{data.brand}</span>
        </p>
        <div className="flex items-center justify-between py-1.5 mt-auto">
          <div>
            <span className="font-heading-1_0 text-primary">
              $<span className="font-heading-1_0 text-primary">{data.price}</span>
            </span>{" "}
            <span className="font-heading-1_0 text-accent text-sm line-through">
              ${data.originalPrice}
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
  );
}
