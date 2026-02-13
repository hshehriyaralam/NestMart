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
  ];

  const bannerData = [
    { id: 1, count: 0, title: "Glorious years" },
    { id: 2, count: 0, title: "Happy Clients" },
    { id: 3, count: 0, title: "Projects complete" },
    { id: 4, count: 0, title: "Team advisor" },
    { id: 5, count: 0, title: "Product Sale" },
  ];

  return (
    <div className="w-full mt-10 px-4 flex flex-col items-center gap-y-10">

      {/* Image + Text */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/about/performance.webp"
            alt="Our Performance"
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
          <p className="font-quicksand text-[#B6B6B6] text-lg  font-semibold">
            Our Performance
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold max-w-md">
            Your Partner for e-commerce grocery solution
          </h2>
          <p className="font-lato text-sm text-accent">
           Nest Mark makes grocery shopping easy and convenient by bringing fresh products and daily essentials straight to your home with just a few clicks, giving you a smooth and reliable shopping experience every day.
          </p>
          <p className="font-lato text-sm text-accent">
           We focus on saving your time and delivering quality at the best prices, so you can enjoy a smooth and stress-free shopping experience every day
          </p>
        </div>
      </div>

      {/* History / Mission */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutData.map((item) => (
          <div key={item.id} className="p-4">
            <h2 className="font-heading text-xl lg:text-2xl">
              {item.title}
            </h2>
            <p className="font-lato text-accent text-sm mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div
        className="w-full max-w-6xl rounded-xl py-6 px-4 flex flex-wrap justify-center gap-6"
        style={{
          backgroundImage: `url(${BannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {bannerData.map((item) => (
          <div
            key={item.id}
            className="text-white font-quicksand flex flex-col items-center w-[140px] sm:w-[180px] py-4"
          >
            <p className="text-2xl sm:text-3xl font-bold">{item.count}+</p>
            <p className="text-center text-sm sm:text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPerformance;
