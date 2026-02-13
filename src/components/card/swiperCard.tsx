
interface data {
  bgImage: string;
  heading: string;
  description: string;
}

export default function SwiperCard({ data }: { data: data }) {
  
  return (
    <div className="w-full h-[350px] mx-auto ">
      <div
  
        style={{
          backgroundImage: `url(${data?.bgImage})`,
          width: "100%",
        }}
        className="flex flex-col gap-7 md:h-[392px] py-11 px-4 md:p-14 rounded-lg bg-cover bg-center bg-no-repeat"
      >
        {/* <div className="w-full"> 
          <h2 className="font-heading  text-3xl md:text-5xl max-w-full md:max-w-[50%] ">
            {data?.heading}{" "}
          </h2>
          <p className="font-lato text-lg md:text-xl text-accent py-4 md:py-6">
            {data?.description || "Sign up for the daily newsletter"}
          </p>
        </div>

        <div className="flex gap-3 bg-white w-full md:max-w-[40%] rounded-full ">
          <input
            type="text"
            placeholder="Your email address"
            className="flex-1 rounded-full px-4 py-2 md:py-3 text-gray-600 placeholder-gray-400 outline-none min-w-0"
          />
          <button
            className="bg-primary text-white font-lato font-semibold px-6 py-3 rounded-full transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </div> */}
      </div>
    </div>
  );
}
