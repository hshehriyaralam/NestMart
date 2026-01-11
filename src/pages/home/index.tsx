import SwiperCard from "@/components/card/swiperCard";
import { slidesData } from "@/data/swiperSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/card/productCard";
import ShopnowCard from "@/components/card/shopnowCard";
import { data } from "@/data/productCard";
import { DealCard } from "@/components/card/dealCard";
import { ChevronRight } from "lucide-react";
import CategoriesCard from "@/components/card/categories";
import PriceFilter from "@/components/card/priceFilter";
import NewProducts from "@/components/card/newProducts";
import FooterBanner from "@/components/commons/footerBanner";
import TopSelling from "@/components/card/topSelling";
import TrendingProduct from "@/components/card/trendingProduct";
import RecentlyAdded from "@/components/card/recentlyAdded";
import TopRated from "@/components/card/topRated";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css"; // Add custom styles

const categoryData = [
  { name: "All", id: 1 },
  { name: "Milks & Diaries", id: 2 },
  { name: "Coffe & Teas", id: 3 },
  { name: "Pet Foods", id: 4 },
  { name: "Meats", id: 5 },
  { name: "Vegetable", id: 6 },
  { name: "Fruits", id: 7 },
];

const Home = () => {
  // console.log(data.products);
  const firstFourProducts = data.products.slice(0, 4);
  console.log("four products", firstFourProducts);
  return (
    <div  className="w-full max-w-[100%]">

      {/* left and right section */}
      <div className="flex gap-6 max-w-[92%] mx-auto">
        {/* Left Side Items */}
        <div className="w-[25%] flex flex-col gap-y-6 pt-4 ">
          <CategoriesCard />
          <PriceFilter />
          <NewProducts />
        </div>
        {/* Right Side Items */}
        <div className="w-[77%]">
          <div className="w-full mx-auto ">
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
            {/* popular products filter list */}
            <div className="flex items-center justify-between px-1 py-6 my-3">
              <h2 className="font-heading text-2xl">Popular Products</h2>
              <div>
                <ul className="flex gap-2.5">
                  {categoryData.map((category) => (
                    <li
                      key={category.id}
                      className="font-heading text-sm hover:text-primary"
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* list products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {data.products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  badge={product.badge}
                  badgeColor={product.badgeColor}
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  rating={product.rating}
                  brand={product.brand}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              ))}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.shopsNow.map((shop: any) => {
              return (
                <ShopnowCard
                  id={shop.id}
                  bgImageSrc={shop.image}
                  heading={shop.title}
                />
              );
            })}
          </div>
        </div>
      </div>


      {/* Single Section containers */}
      {/* Top selling products */}
      <div className="w-full max-w-[93%] p-4 mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <TopSelling />
        <TrendingProduct/>
        <RecentlyAdded />
        <TopRated />
      </div>

      <div className="w-full max-w-[93%] p-4 mx-auto">
        <FooterBanner />
      </div>
      
    </div>
  );
};

export default Home;
