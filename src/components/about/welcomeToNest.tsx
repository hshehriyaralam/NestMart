import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const WelcomeToNest = () => {
  const slides = [
    {
      src: "/about/about-2.webp",
      alt: "NestMart online shopping products",
    },
    {
      src: "/about/about-3.webp",
      alt: "NestMart quality products and shopping experience",
    },
    {
      src: "/about/about-4.webp",
      alt: "NestMart products for everyday needs",
    },
    {
      src: "/about/about-2.webp",
      alt: "NestMart online store product collection",
    },
    {
      src: "/about/about-3.webp",
      alt: "NestMart lifestyle and household products",
    },
    {
      src: "/about/about-4.webp",
      alt: "NestMart shopping collection",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-6">
      
      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/about/106.webp"
          alt="NestMart online shopping experience"
          className="rounded-xl w-full max-w-[530px] h-auto lg:h-[600px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">

        {/* Text */}
        <div className="p-4 flex flex-col gap-y-3">
          <h2 className="font-heading text-2xl lg:text-3xl">
            Welcome to NestMart
          </h2>

          <p className="font-lato text-sm text-accent leading-5 text-justify">
            At NestMart, we believe online shopping should be simple,
            convenient, and enjoyable. Our goal is to bring quality products
            from different categories together in one easy-to-use online
            shopping experience. Whether you are looking for everyday
            essentials, home products, lifestyle items, or something special,
            NestMart makes it easier to discover products that fit your needs.
          </p>

          <p className="font-lato text-sm text-accent leading-5 text-justify">
            We are focused on creating a smooth shopping experience from
            browsing to checkout. Our platform helps customers explore
            products easily, discover new items, and find useful products at
            competitive prices. We continuously work on improving our product
            selection and making online shopping more convenient for our
            customers.
          </p>

          <p className="font-lato text-sm text-accent leading-5 text-justify">
            Customer satisfaction is at the heart of NestMart. We aim to
            provide a reliable online store where customers can shop with
            confidence, explore different product categories, and enjoy a
            straightforward shopping experience. As we grow, we remain
            committed to providing useful products and a better experience for
            every customer.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative w-full">

          {/* LEFT ARROW */}
          <div
            className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-50
            bg-[#F2F3F4] w-9 h-9 flex items-center justify-center
            rounded-full cursor-pointer"
            aria-label="Previous products"
          >
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
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW */}
          <div
            className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-50
            bg-[#F2F3F4] w-9 h-9 flex items-center justify-center
            rounded-full cursor-pointer"
            aria-label="Next products"
          >
            <ArrowRight className="text-primary w-5" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeToNest;