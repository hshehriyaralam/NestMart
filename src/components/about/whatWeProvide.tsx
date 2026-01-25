import { Link } from "react-router-dom";

const WhatWeProvide = () => {
    const cardData = [
        {
            id : 1,
            icon: "/about/icon-1.svg",
            title: "Best Prices & Offers",
            description:
              "There are many variations of affordable deals available, but the majority ensure real value through competitive pricing and exclusive offers",
            link: "/",
        },
         {
            id : 2,
            icon: "/about/icon-2.svg",
            title: "Wide Assortment",
            description:
              "There are many variations of products available, but the majority provide a diverse selection to meet every customer's needs",
            link: "/",
        },
         {
            id : 3,
            icon: "/about/icon-3.svg",
            title: "Free Delivery",
            description:
              "There are many variations of shipping services available, but the majority focus on fast and hassle-free free delivery",
            link: "/",
        },
        {
            id : 4,
            icon: "/about/icon-4.svg",
            title: "Easy Returns",
            description:
              "There are many variations of return policies available, but the majority aim to make exchanges simple and stress-free",
            link: "/",
        },
         {
            id : 5,
            icon: "/about/icon-5.svg",
            title: "100% Satisfaction",
            description:
              "There are many variations of service standards available, but the majority strive to ensure complete customer satisfaction",
            link: "/",
        },
         {
            id : 6,
            icon: "/about/icon-6.svg",
            title: "Great Daily Deal",
            description:
              "There are many variations of daily offers available, but the majority highlight the best savings every single day",
            link: "/",
        },
    ]
  return (
    <div className="w-full p-4 lg:p-8 mt-5">
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-center mt-2">
        What We Provide?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto mt-10 px-2">
{
        cardData.map((card) => (
        <div  
        key={card.id}
        className="w-full max-w-[320px] mx-auto py-6 px-4 border border-[#ECECEC] rounded-lg hover:shadow-md transition">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
          <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
            </div>

          <div className="flex flex-col items-center justify-center gap-y-4 mt-4">
            <p className="font-heading text-lg md:text-xl lg:text-[22px] font-bold text-center">
              {card.title}
            </p>
            <p className="max-w-[270px] font-lato font-medium text-sm text-accent text-center">
              {card.description}
            </p>
            <Link to={card.link} className="text-primary text-sm cursor-pointer hover:underline">
              Read more
            </Link>
          </div>
        </div>
        ))
}
       
      </div>
    </div>
  );
};

export default WhatWeProvide;
