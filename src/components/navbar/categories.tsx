import { Camera, ChevronDown, Heart, MapPin, RefreshCw, Search, ShoppingCart, User } from 'lucide-react';

const Categories = () => {
  return (
    <nav className="w-full bg-transparent border-b border-gray-200 py-4">
      <div className="max-w-[90%] mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo/Nest.svg"  alt="nest-logo" className="w-42" />
        </div>

        {/* Search Bar */}
        <div className="lg:flex"> 
          <div className="max-w-full h-[50px] flex items-center border-2
           border-primary rounded pl-2 pr-4">
            <button className="flex justify-center items-center  gap-2 w-[150px]">
              <span className='font-heading text-sm'>All Categories</span>
              <ChevronDown className='w-3'/>
            </button>
            <span className="w-px h-6 bg-gray-300 mx-4"></span>
            <input type="text" placeholder="Search for products" className="w-[400px] outline-0" />
            <Search className='w-5 text-gray-400' />
          </div> 
        </div>
        {/* Actions */}
        <div className="lg:flex items-center p-4 gap-4">
          {/* location */}
          <button className="flex items-center justify-center gap-1 shadow-2xl
           border border-gray-200 py-2 px-2 rounded-lg">
            <MapPin className='text-[#B6B6B6] w-4 '  />
            <span className='font-quicksand text-primary font-medium text-xs'>Your Location</span>
            <ChevronDown className='w-3 text-[#B6B6B6]'/>
          </button>

          {/* icons group */}
          <div className="flex gap-4">
        
            <button className='flex items-end' >
              <RefreshCw className='action-button' />
              <span className='action-button-text'>compare</span>
            </button>

            <button className='flex items-end' >
              <Heart className='action-button' />
              <span className='action-button-text'>Wishlist</span>
            </button>

            <button className='flex items-end'>
             <ShoppingCart className='action-button' />
             <span className='action-button-text' >Cart</span>
            </button>

            <button className='flex items-end'>
              <User className='action-button' />
              <span className='action-button-text'>Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Categories;
