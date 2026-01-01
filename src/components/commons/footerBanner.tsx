

const FooterBanner = () => {
  return (
    <div 
    // style={{
    //   backgroundImage :  `url('/background-images/swiper-image-2.png')`,
    //   backgroundRepeat : 'no-repeat',
    // }}
    className='w-full    mx-auto  my-5   flex  items-center justify-center  bg-blue-200  rounded-xl h-[300px]'>
      {/* Text Section  */}
      <div className="flex flex-col gap-4   p-6 rounded-lg max-w-[700px]  mx-10  ">
        <div className="w-full  "> 
          <h2 className="font-heading text-[32px] max-w-[80%]   ">
            Stay home & get your daily needs from our shop{" "}
          </h2>
          <p className="font-lato font-medium  text-md text-accent ">
           Start You'r Daily Shopping with  <span  className='text-primary'>Nest Mart</span> 
          </p>
        </div>

        <div className="flex gap-3 bg-white max-w-[340px] rounded-full  mt-5 ">
          <input
            type="text"
            placeholder="Your email address"
            className="rounded-full px-4 py-3 text-gray-600
             placeholder-gray-400 outline-none"
          />
          <button
            className="bg-primary  text-white
           font-lato font-semibold px-6 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </div>
      </div>


      {/* Image Section */}
      <div  className='relative'>
        <img src="/banner-9.png" alt=""  className='w-[500px]  relative top-[14px] right-14  '   />
      </div>
    </div>
  )
}

export default FooterBanner
