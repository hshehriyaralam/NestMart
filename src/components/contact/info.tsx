import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

const Info = () => {
  const descStyles = "text-accent font-lato mt-0.5 text-[13px]";

  const infoData = [
    {
      id: 1,
      title: "Office",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
    },
    {
      id: 2,
      title: "Studio",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
    },
    {
      id: 3,
      title: "Shop",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
    },
  ];

  return (
    <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
      {infoData.map((info) => (
        <div
          key={info.id}
          className="w-full p-6  rounded-lg  flex flex-col gap-2"
        >
          <h2 className="font-quicksand font-bold text-primary text-2xl mb-3">
            {info.title}
          </h2>
          <p className={descStyles}>{info.addressLine1}</p>
          <p className={descStyles}>{info.addressLine2}</p>
          <p className={descStyles}>
            <span className="underline mr-2">Phone:</span> {info.phone}
          </p>
          <p className={descStyles}>
            <span className="underline mr-2">Email:</span> {info.email}
          </p>
          <Button className="bg-primary w-[120px] text-white text-xs hover:bg-primary/90 mt-4 flex items-center justify-center gap-1 cursor-pointer">
            <MapPin className="w-3 h-3" />
            View Maps
          </Button>
        </div>
        
      ))}
    </div>
  );
};

export default Info;
