const Banner = () => {


  return (
    <div className="bg-green-100 sticky top-0 z-[100]">
      <div className="w-[95%]  mx-auto h-10 hidden lg:flex justify-center items-center bg-transparent p-4
     border-b border-gray-200">
        <div>
          <p className="text-gray-600 font-lato  text-[14px] font-semibold [word-spacing-[10px] px-2 "
          >Free shipping & easy returns for 365 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
