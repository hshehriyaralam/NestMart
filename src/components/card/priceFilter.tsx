import { useState } from "react"
import { Slider } from "../ui/slider"
import { Button } from "../ui/button"
import {Funnel}  from 'lucide-react'

const PriceFilter = () => {
  const colorDaata = [
    { color: 'Red', count: 56 },
    { color: 'Blue', count: 34 },
    { color: 'Green', count: 23 },
  ]
  const itemsData  = [
    { condition: 'New', quantity: 1506 },
    { condition: 'Refurbish', quantity: 27 },
    { condition: 'Used', quantity: 45 },
  ]

  const [value, setValue] = useState<number[]>([100]);
  const minLimit = 100;
  const maxLimit = 1000;
  const clampedValue = Math.min(Math.max(value[0], minLimit), maxLimit);

 return (

  <div className='w-full rounded-xl    border  p-6 border border-[#ECECEC]   '>
    <h2 className='font-heading text-[21px] mx-2'>Fill by price</h2>
    {/* Range limit */}
       <div className="w-full p-4 px-0   ">
      <div className="relative">
        {/* Full width container for tracking */}
        <div className="absolute inset-0 flex items-center">
          {/* Gray background track */}
          <div className="absolute inset-0 h-2 bg-gray-300 rounded-full"></div>    
          
          {/* Slider */}
          <div className="absolute inset-0">
            <Slider
              value={[clampedValue]}
              onValueChange={(v) => setValue([Math.min(Math.max(v[0], minLimit), maxLimit)])}
              min={minLimit}
              max={maxLimit}
              step={10}
              className="relative z-10  cursor-pointer  "
            />
          </div>
        </div>
      </div>

    <div  className="flex justify-between items-center  mt-5   ">
    <p className="font-lato font-semiibold  text-accent text-[13px]  opacity-90" >Up to: <span
    className="text-primary font-medium   text-md  "
    >$ {value[0]}</span></p>
  </div>
    </div>
    {/* color and item radio */}
    <div className="flex flex-col  text-accent   gap-y-4   ">
      {/* Color Filter */}
      <div   >
      <p  className="text-accent  font-lato  font-semibold  text-[14.5px] " >Color </p>
      <div >
        {colorDaata.map( (colorItem, index) => (
          <div className="flex  gap-1   pt-1 "  key={index} >
          <input type="checkbox"  className="cursor-pointer border border-accent opacity-70   "   />
          <p   className="font-medium   text-[14px] font-lato ">{colorItem.color} ({colorItem.count})</p>
        </div>
        ))}
      </div>
      </div>
      {/* Items Conditions */}
      <div >
      <p  className="text-accent  font-lato  font-semibold  text-[14.5px] " >Item Condition </p>
      <div >
        {itemsData.map( (item, index) => (
          <div className="flex  gap-1   pt-1 "  key={index} >
          <input type="checkbox"  className="cursor-pointer border border-accent opacity-70 "  />
          <p   className="font-medium   text-[14px]   font-lato">{item.condition} ({item.quantity})</p>
        </div>
        ))}
      </div>
      </div>
    </div>

    {/* Filter Button */}
    <Button  className="font-quicksand text-white font-medium text-md  cursor-pointer mt-4 " >
      <span><Funnel className="h-4 w-4 mr-0" /></span>
        Filter
      </Button>
  </div>

 )

}


export default PriceFilter
