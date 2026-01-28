import { Button } from "../ui/button";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/about/teamOne.webp",
      name: "H. Merinda",
      position: "CEO & Co-Founder",
    },
    {
      id: 2,
      image: "/about/teamTwo.webp",
      name: "Dilan Specter",
      position: "Head Engineer",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto lg:px-4 py-10 ">
      
      <h2 className="font-heading text-3xl text-center mt-2">
        Our Team
      </h2>

      <div className="flex flex-col lg:flex-row mt-10 gap-10 lg:p-6">

        {/* Text Section */}
        <div className="w-full lg:w-[33%] flex flex-col gap-y-4 text-center lg:text-left">
          <p className="font-quicksand text-primary text-md font-bold mt-2">
            Our Team
          </p>

          <h2 className="font-heading text-2xl lg:text-3xl font-bold max-w-xs mx-auto lg:mx-0">
            Meet Our Expert Team
          </h2>

          <p className="font-lato font-medium text-sm text-accent">
            Our team makes every shopping experience better by working together
            to deliver fresh products and daily essentials with care and dedication,
            ensuring that every customer enjoys smooth and reliable service every day.
          </p>

          <p className="font-lato font-medium text-sm text-accent mt-1">
            Our team focuses on saving your time and delivering quality at the best
            prices, so you can always enjoy a smooth and stress-free shopping experience
            every day.
          </p>

          <Button className="w-fit mx-auto lg:mx-0 bg-primary text-white hover:bg-primary/90 mt-4">
            View All Members
          </Button>
        </div>

        {/* Image Section */}
       <div className="w-full lg:w-[67%] flex flex-col lg:flex-row justify-center   lg:gap-6 gap-y-12 lg:p-4 p-2">
  {teamMembers.map((member) => (
    <div
      key={member.id}
      className="relative flex flex-col items-center"
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-full max-w-sm rounded-xl"
      />

      {/* Info Card (Overlay on Image for ALL devices) */}
      <div
        className="
          absolute 
          w-[180px] h-[90px]
          -bottom-6  lg:-bottom-8
          left-1/2 -translate-x-1/2
           lg:w-[200px] lg:h-[100px]
           
          bg-white rounded-xl shadow-lg
          flex flex-col items-center justify-center gap-y-1
        "
      >
        <h2 className="font-heading text-md">
          {member.name}
        </h2>

        <p className="font-lato text-accent text-sm">
          {member.position}
        </p>

        <div className="flex gap-x-3">
          <img src="/about/fb.svg" alt="facebook" />
          <img src="/about/x.svg" alt="twitter" />
          <img src="/about/insta.svg" alt="Instagram" />
          <img src="/about/yt.svg" alt="youtube" />
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default OurTeam;
