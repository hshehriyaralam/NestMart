const FooterBanner = () => {
  return (
    <div 
    className='w-full mx-auto my-5 flex flex-col lg:flex-row items-center justify-center bg-blue-200 rounded-xl min-h-[300px] lg:h-[300px]  lg:px-8'>
      {/* Text Section  */}
      <div className="flex flex-col gap-4 p-4 rounded-lg md:max-w-[800px] w-full md:w-auto md:mx-10 border">
        <div className="w-full"> 
          <h2 className="font-heading text-[22px] lg:text-3xl  max-w-[50%] lg:max-w-[75%] text-gray-800
          ">
            Stay home & get your daily needs from our shop
          </h2>
          <p className="font-lato font-medium text-sm lg:text-base text-accent  mt-2">
           Start Your Daily Shopping with <span className='text-primary font-semibold'>Nest Mart</span>
          </p>
        </div>

        <div className="flex  lg:gap-3 bg-white max-w-[180px]  md:max-w-[340px] rounded-full mt-4  border">
          <input
            type="text"
            placeholder="Your email address"
            className="flex-1 rounded-full lg:px-4 lg:py-3 px-3 py-1 text-gray-600 placeholder-gray-400 outline-none text-sm lg:text-base"
          />
          <button
            className="bg-primary  hover:bg-primary/80 cursor-pointer  text-white font-lato font-semibold px-2 py-2 md:px-6 md:py-2.5  rounded-full transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='relative top-7 right-6  hidden lg:block   flex-shrink-0'>
        <img src="/banner-9.png" alt="Delivery person with groceries" className='w-[250px] lg:w-[450px]'/>
      </div>
    </div>
  )
}

export default FooterBanner