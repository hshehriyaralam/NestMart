import "swiper/css";
import "swiper/css/bundle";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


const WelcomeToNest = () => {
  const slides = [
    "/about/about-2.webp",
    "/about/about-3.webp",
    "/about/about-4.webp",
    "/about/about-2.webp",
    "/about/about-3.webp",
    "/about/about-4.webp",
  ];

  return (
    <div className="w-full flex items-center justify-center p-4 gap-4 ">

       {/* left Image  */}
       <div className=" w-1/2 h-full flex items-center   justify-center">
         <img
           src="/about/106.webp"
           alt="about_image"
           className=" rounded-xl  w-[530px]  h-[600px] object-cover "
           loading="lazy"
         />
    </div>

      {/* right content */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center "  >

         <div className=" p-4  flex flex-col gap-y-2" >
           <h2 className="font-heading text-3xl" >Welcome to Nest</h2>
           <p  className="font-lato font-normal text-sm text-accent leading-5 text-justify">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate id est laborum.
           </p>
           <p   className="font-lato font-normal text-sm text-accent leading-5  text-justify mt-2">
             Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
             et Ut placerat legendos interpre.Donec vitae sapien ut libero
             venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
             commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
             ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate id
             est laborum.
           </p>
        </div>


 {/* LEFT ARROW */}
          <div className="custom-prev cursor-pointer   bg-[#F2F3F4]   w-9 h-8 flex items-center 
             rounded-full z-50 relative top-35  right-70  z-50">
            <ArrowLeft className="text-primary w-5 ml-0.5" />
          </div>

        {/* Slider Section */}
        <div className="w-full flex items-center p-4">

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className=" flex items-center justify-center z-40"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide}
                  alt={`slide_${index}`}
                  className="w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

         
        </div>
         {/* RIGHT ARROW */}
          <div className="custom-next  cursor-pointer   bg-[#F2F3F4]   w-9 h-8 flex items-center justify-end  
             rounded-full z-50 relative bottom-35 left-70  z-50">
            <ArrowRight className="text-primary w-5 ml-0.5" />
          </div>
      </div>
    </div>
  );
};

export default WelcomeToNest;
