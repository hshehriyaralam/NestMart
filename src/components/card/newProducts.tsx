import  {Star} from 'lucide-react'

const NewProducts = () => {
  const newProductData = [
    {
      id: 1,
      name: "Chen Cardigan",
      price: 99.05,
      image: '/cardImages/topSelling3.webp',
    },
    {
      id: 2,
      name: "Chen Sweater",
      price: 89.50,
      image: "/cardImages/trending1.webp",
    },
    {
      id: 3,
      name: "Colorful Jacket",
      price: 25,
      image: "/cardImages/trending2.webp",
    },
  ]

  return (
   <div className='w-full rounded-xl    border  p-6 border border-[#ECECEC]     '>
    <h2 className='font-heading text-[21px] mx-2'>New Products</h2>
    {/* Products  */}
      {newProductData.map((product) => (
    <div className='grid grid-cols-2  mt-4   '>
      {/* Image */}
      <div  className=''>
        <img src={product.image} alt={product.name}  className='w-[90%] '/>
      </div>

      {/* Name and Price */}
      <div  className=''>
        <p  className='text-primary  font-quicksand font-bold text-md'>{product.name}</p>    
        <p  className='text-accent font-lato text-md font-medium '> ${product.price}</p>
        <Star  className='w-5 h-5 text-white fill-yellow-500' />
        </div>
    </div>
      ))}
    </div>
  )
}

export default NewProducts
