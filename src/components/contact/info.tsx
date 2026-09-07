import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

const Info = () => {
  const descStyles = "text-accent font-lato mt-0.5 text-[13px] leading-6";

  const infoData = [
    {
      id: 1,
      title: "Office",
      description:
        "Our main office is available for general inquiries, customer support, business communication, and other questions related to our products and services.",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      id: 2,
      title: "Studio",
      description:
        "Our studio supports product information, creative services, customer communication, and other activities that help us provide a better experience for our customers.",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
      hours: "Monday - Friday: 10:00 AM - 5:00 PM",
    },
    {
      id: 3,
      title: "Shop",
      description:
        "Visit our shop for product information and assistance with your shopping needs. Our team can help you learn more about available products and services.",
      addressLine1: "205 North Michigan Avenue, Suite 810",
      addressLine2: "Chicago, 60601, USA",
      phone: "(123) 456-7890",
      email: "contact@Evara.com",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
      {infoData.map((info) => (
        <div
          key={info.id}
          className="w-full p-6 rounded-lg flex flex-col gap-2"
        >
          <h2 className="font-quicksand font-bold text-primary text-2xl mb-2">
            {info.title}
          </h2>

          <p className={descStyles}>
            {info.description}
          </p>

          <div className="mt-2">
            <p className={descStyles}>{info.addressLine1}</p>
            <p className={descStyles}>{info.addressLine2}</p>
          </div>

          <p className={descStyles}>
            <span className="underline mr-2">Phone:</span>
            {info.phone}
          </p>

          <p className={descStyles}>
            <span className="underline mr-2">Email:</span>
            {info.email}
          </p>

          <p className={descStyles}>
            <span className="underline mr-2">Hours:</span>
            {info.hours}
          </p>

          <p className={`${descStyles} mt-1`}>
            Our team is available during business hours to answer questions,
            provide assistance, and help you find the right information.
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
