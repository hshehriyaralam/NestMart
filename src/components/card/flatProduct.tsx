import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  salePrice: number;
  originalPrice: number;
}


export default function FlatProductCard(data:Product) {

  return (
    <div className="">

      <div className="flex gap-2">
        {/* Image */}
        <div className="max-w-30 h-24  overflow-hidden ">
          <img
            src={data.image}
            alt={data.title}
            className="object-cover w-full " 
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 ">
         <div>
            <h3 className="font-heading text-md max-w-[280px]">
            {data.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 text-xs ">
            <div className="flex">
              {[...Array(Math.round(data.rating || 0))].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>  
            <span className="font-lato text-accent text-md">({data.rating})</span>
          </div>
         </div>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-heading-1_0 text-primary text-lg">
              ${data.salePrice}
            </span>

            {data.originalPrice && (
              <span className="font-heading-1_0 text-accent line-through" >
                ${data.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
