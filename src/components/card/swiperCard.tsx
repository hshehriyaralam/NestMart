
interface SlideData {
  bgImage: string;
  heading: string;
  description: string;
}

export default function SwiperCard({ data }: { data: SlideData }) {
  
  const slideData = data ;

  return (
    <div className="w-full h-full mx-auto">
      <div
        style={{
          backgroundImage: `url(${slideData?.bgImage})`,
          width: "100%",
        }}
        className="flex flex-col gap-7 h-[392px] p-14 rounded-lg"
      >
        <div className="w-full"> 
          <h2 className="font-heading text-5xl max-w-[50%] ">
            {slideData?.heading}{" "}
          </h2>
          <p className="font-lato text-xl text-accent py-6">
            {slideData?.description || "Sign up for the daily newsletter"}
          </p>
        </div>

        <div className="flex gap-3 bg-white max-w-[340px] rounded-full ">
          <input
            type="text"
            placeholder="Your email address"
            className="rounded-full px-4 py-3 text-gray-600
             placeholder-gray-400 outline-none"
          />
          <button
            className="bg-primary  text-white
           font-lato font-semibold px-6 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
