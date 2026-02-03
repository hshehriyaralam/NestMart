import { ShoppingCart } from "lucide-react";
import CartButton from "../button/cartButton";
// import { data } from "@/data/productCard";

interface DealCardProps {
  id: number;
  bgImageSrc: string;
  category: string;
  name: string;
  rating: number;
  brand: string;
  price: number;
  originalPrice: number;
}

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white rounded-xl px-2 py-8 text-center shadow w-12 h-12 flex flex-col items-center justify-center">
    <p className="text-green-500 font-quicksand font-medium text-xl leading-none">
      {value}
    </p>
    <p className="text-accent font-lato font-regular text-sm">{label}</p>
  </div>
);

export const DealCard = (data:DealCardProps) => {
  console.log("deal data",data);
  return (
    <div className="max-w-full h-full ">
      {/* IMAGE SECTION */}
      <div
        className="w-full h-[260px] bg-cover bg-center rounded-lg relative flex items-center justify-center"
        style={{ backgroundImage: `url(${data.bgImageSrc})` }}
      >
        {/* COUNTDOWN */}
        <div className="flex gap-3 ">
          <TimeBox value="426" label="Days" />
          <TimeBox value="08" label="Hours" />
          <TimeBox value="17" label="Mins" />
          <TimeBox value="58" label="Sec" />
        </div>
      </div>

      {/* DEAL CONTENT */}
      <div className="relative max-w-[95%] -top-17 bg-white mx-auto  rounded-lg shadow-lg p-2 md:p-3">
        <div className="p-2 flex flex-col ">
          <p className="font-medium action-button-text py-1"></p>
          <h1 className="font-heading py-1.5 min-h-14 line-clamp-2">
            {data.name}
          </h1>
          <p>
            ⭐⭐ <span className="font-lato text-regular">({data.rating})</span>
          </p>
          <p className="text-accent font-lato mb-auto">
            By <span className="text-primary font-lato"> {data.brand}</span>
          </p>
          <div className="flex items-center justify-between py-1.5 mt-auto">
            <div className="  flex items-baseline gap-2 px-2 py-1">
              <span className="text-primary font-heading-1_0 text-sm md:text-base">
                ${data.price}
              </span>
              <span className="font-heading-1_0 text-accent text-base line-through">
                ${data.originalPrice}
              </span>
            </div>
            <CartButton
              size="sm"
              variant="primary"
              className="p-2"
              icon={<ShoppingCart size={18} />}
            >
              Add
            </CartButton>
          </div>
        </div>
      </div>
    </div>
  );
};
