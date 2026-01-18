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
              "There are many variations of products available, but the majority provide a diverse selection to meet every customer’s needs",
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
    <div className=" w-full p-4 mt-5 ">
      <h2 className="font-heading  text-3xl text-center mt-2 ">
        What We Provide?
      </h2>

      <div className="flex gap-6 mx-auto items-center justify-center mt-10  flex-wrap ">

{
        cardData.map((card) => (
        <div  
        key={card.id}
        className="w-[320px]  py-4 border border-[#ECECEC]  rounded-lg">
            <div  className="mx-auto  w-26 mt-6">
          <img src={card.icon} alt=""  className="w-full" />
            </div>

          <div className="flex flex-col items-center justify-center  gap-y-4 mt-3 ">
            <p className="font-heading text-[22px] font-bold ">
              {card.title}
            </p>
            <p className=" max-w-[270px] font-lato font-medium  text-sm text-accent text-justify [text-align-last:center]  ">
              {card.description}
            </p>
            <Link to={card.link} className="text-primary text-sm cursor-pointer">
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
