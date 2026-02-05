import SwiperCard from "@/components/card/swiperCard";
import { slidesData } from "@/data/swiperSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/card/productCard";
import { data } from "@/data/productCard";
import { DealCard } from "@/components/card/dealCard";
import { ChevronRight } from "lucide-react";
import CategoriesCard from "@/components/card/categories";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css";
import TopSelling from "@/components/card/topSelling";
import TrendingProduct from "@/components/card/trendingProduct";
import RecentlyAdded from "@/components/card/recentlyAdded";
import TopRated from "@/components/card/topRated";



const Home = () => {

  return (
    <div className="w-full max-w-[100%]">
      {/* left and right section */}
      <div className="flex gap-6 max-w-[92%] mx-auto">
        {/* Left Side Items */}
        <div className="w-[25%] hidden md:block z-50">
  <div className="sticky pt-4 top-0 transition-all duration-500">
    <CategoriesCard />
  </div>
</div>
        {/* Right Side Items */}
        <div className="w-full md:w-[72%]">
          <div className="w-full mx-auto mt-4 z-40">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              loop={true}
              className="rounded-3xl  swiper"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <SwiperCard data={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            {/* list products */}
            <div>
              <h2 className="font-heading text-2xl py-6">New Arrivals</h2>
              <ProductCard products={data.products} />
            </div>

             <div>
              <h2 className="font-heading text-2xl py-6">Weekly Bestsellers</h2>
              <ProductCard products={data.products} />
            </div>

             <div>
              <h2 className="font-heading text-2xl py-6">Trending Products</h2>
              <ProductCard products={data.products} />
            </div>
            

          </div>
          {/* Product deal */}
          <div>
            {/* popular products filter list */}
            <div className="flex items-center justify-between px-1 py-6 my-3">
              <h2 className="font-heading text-2xl">Deals of The Day</h2>
              <div className="flex items-center">
                <p className="flex items-center text-sm">
                  {" "}
                  All Deals <ChevronRight className="w-4" />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 ">
              {data.deals.map((data: any) => {
                return (
                  <DealCard
                    id={data.id}
                    bgImageSrc={data.bgImage}
                    category={data.category}
                    name={data.name}
                    rating={data.rating}
                    brand={data.brand}
                    price={data.price}
                    originalPrice={data.originalPrice}
                  />
                );
              })}
            </div>
          </div>
          {/* shop now */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.shopsNow.map((shop: any) => {
              return (
                <ShopnowCard
                  id={shop.id}
                  bgImageSrc={shop.image}
                  heading={shop.title}
                />
              );
            })}
          </div> */}
        </div>
      </div>

      {/* Single Section containers */}
      {/* Top selling products */}
      <div className="w-full max-w-[93%] p-4 mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <TopSelling />
        <TrendingProduct />
        <RecentlyAdded />
        <TopRated />
      </div>

      <div className="w-full max-w-[93%] p-4 mx-auto">
        {/* <FooterBanner /> */}
      </div>
    </div>
  );
};

export default Home;
