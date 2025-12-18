import SwiperCard from "@/components/card/swiperCard";
import { slidesData } from "@/data/swiperSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/card/productCard";
import "./home.css"; // Add custom styles
import { data } from "@/data/productCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
  console.log(data.products);
  return (
    <>
      <div className="flex gap-6 max-w-[92%] mx-auto ">
        <div className="w-[25%] border">part1</div>
        <div className="w-[77%] ">
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
              // navigation={true}
              loop={true}
              className="rounded-3xl"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {
                data.products.map((product:any) => (
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
        </div>
      </div>
    </>
  );
};

export default Home;
