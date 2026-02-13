import { Star } from 'lucide-react'

const TrendingProduct = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Organic Cage-Free Grade A Large Brown Eggs",
      rating: 4.0,
      price: 32.85,
      originalPrice: 33.8,
      image: '/cardImages/trending1.webp',
    },
    {
      id: 2,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 4.0,
      price: 32.85,
      originalPrice: 33.8,
      image: '/cardImages/trending2.webp',
    },
    {
      id: 1,
      name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      rating: 4.0,
      price: 32.85,
      originalPrice: 33.8,
      image: '/cardImages/trending3.webp',
    },
  ]
  return (
    <div className='p-4'>
      <h2 className='font-heading  text-xl'>Trending Products</h2>
      {trendingProducts.map((product) => (
        <div key={product.id} className='flex gap-x-4 my-6  '>
          {/* Image */}
          <div className='w-[30%]'>
            <img src={product.image} alt={product.name} />
          </div>

          {/* Name and Price */}
          <div className='w-[70%] '>
            <p className='font-quicksand font-bold text-[13px] text-secondary'>{product.name}</p>
            <div className='flex  items-center gap-x-6 mt-1' >
              <Star className='w-5 h-5 text-white fill-yellow-500' />
              <span className='font-lato font-medium text-xs text-[#B6B6B6] '>({product.rating})</span>
            </div>

            <div className='flex items-center  gap-x-3'>
              <p className='font-quicksand text-primary font-bold '> ${product.price}</p>
              <p className='font-quicksand text-[#ADADAD]  font-bold text-[14px] '>${product.originalPrice}</p>
            </div>

          </div>
        </div>
      ))}

    </div>
  )
}

export default TrendingProduct
