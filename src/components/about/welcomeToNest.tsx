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
    <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-6">

      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/about/106.webp"
          alt="about_image"
          className="rounded-xl w-full max-w-[530px] h-auto lg:h-[600px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">

        {/* Text */}
        <div className="p-4 flex flex-col gap-y-3">
          <h2 className="font-heading text-2xl lg:text-3xl">
            Welcome to Nest
          </h2>

          <p className="font-lato text-sm text-accent leading-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.

          </p>

          <p className="font-lato text-sm text-accent leading-5 text-justify">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative w-full">

          {/* LEFT ARROW */}
          <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 
              bg-[#F2F3F4] w-9 h-9 flex items-center justify-center rounded-full cursor-pointer">
            <ArrowLeft className="text-primary w-5" />
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            loop
            spaceBetween={16}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide} alt={`slide_${index}`} className="w-full rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW */}
          <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-50 
              bg-[#F2F3F4] w-9 h-9 flex items-center justify-center rounded-full cursor-pointer">
            <ArrowRight className="text-primary w-5" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeToNest;
