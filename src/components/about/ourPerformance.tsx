import BannerBg from "/about/aboutBanner.webp";

const OurPerformance = () => {
  const aboutData = [
    {
      id: 1,
      title: "Who We Are",
      description:
        "Our mission is to deliver a simple, fast, and reliable shopping experience by providing quality products at the best prices for everyday needs.",

    },
     {
      id: 2,
      title: "Our history",
      description:
        "We began with a vision to improve online grocery shopping by building trust, focusing on quality, and growing together with our customers.",
        
    },
       {
      id: 3,
      title: "Our Mission",
      description:
        "We are a customer-first e-commerce platform committed to delivering fresh groceries and daily essentials with care, speed, and excellence.",
        
    },
    
  ]
  const bannerData = [
    {
      id : 1, 
      count : 0,
      title : "Glorious years"
    },
    {
      id : 2, 
      count : 0,
      title : "Happy Clients"
    },
    {
      id : 3, 
      count : 0,
      title : "Projects complete"
    },
    {
      id : 4, 
      count : 0,
      title : "Team advisor"
    },
    {
      id : 5, 
      count : 0,
      title : "Product Sale"
    },
  ]
  return (
    <div   className='w-full h-[900px]  mt-10 p-4 flex flex-col  items-center gap-y-4 '>
      {/* Image and Text  */}
      <div  className='w-[90%] py-4 my-4 
       mx-auto flex items-center justify-center '>
        <div  className='  w-1/2 h-full '>
        <img
        src='/about/performance.webp'
        alt='Our Performance'
        loading="lazy"
        />
        </div>

        {/* Text */}
        <div  className='  w-1/2 h-full   p-4 flex flex-col gap-y-5  '> 
            <p  className='font-quicksand text-[#B6B6B6] text-xl font-medium mt-6    '>Our Performance</p>
            <h2  className='font-heading text-3xl font-bold max-w-sm '>Your Partner for e-commerce grocery solution</h2>
            <p  className='font-lato font-medium  text-sm text-accent ' >
                Nest Mark makes grocery shopping easy and convenient by bringing fresh products and daily essentials straight to your home with just a few clicks, giving you a smooth and reliable shopping experience every day.
            </p>
            <p   className='font-lato font-medium  text-sm text-accent  ' >We focus on saving your time and delivering quality at the best prices, so you can enjoy a smooth and stress-free shopping experience every day</p>
        </div>
      </div>


      {/* History and Mission  */}
      <div className="w-[90%]  my-4 py-3
       mx-auto flex items-center justify-center    gap-4" >

        {aboutData?.map((item) => (
          <div  className=" py-6  p-4"
          key={item.id}>
          <h2 className="font-heading  text-2xl " >{item.title}</h2>
          <p  className="font-lato text-accent text-[14px] font-medium mt-3 " >
            {item.description}
          </p>
        </div>
        ))}
       
      </div>


      {/* Banner */}
      <div  className="w-[98%] py-4 rounded-xl  flex items-center justify-center gap-4 "
      style={{backgroundImage : `url(${BannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '12px'}}>
        {bannerData?.map((item) => (
            <div key={item.id} className="text-white font-semibold font-quicksand flex flex-col justify-center items-center w-[220px]   py-10 ">
          <p className="text-3xl">{item.count}+</p>
          <p>{item.title}</p>
        </div>
        ))}
      
      </div>
    </div>
  )
}

export default OurPerformance