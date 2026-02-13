const HowCanHelpYou = () => {
  const details = [
    {
      id: 1,
      title: "01. Visit Feedback",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      textColor: "#253D4E",
    },
    {
      id: 2,
      title: "02. Employer Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      textColor: "#253D4E",
    },
    {
      id: 3,
      title: "03. Billing Inquiries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      textColor: "#3BB77E",
    },
    {
      id: 4,
      title: "04. General Inquiries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      textColor: "#253D4E",
    },
  ];

  return (
    <div className="w-full lg:p-6  p-3 flex flex-col md:flex-row items-start md:items-center justify-center gap-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-primary text-2xl font-quicksand font-bold">How can help you</p>
        <h2 className="font-heading text-3xl md:text-5xl max-w-md">Let us know how we can help you</h2>
        <p className="text-accent font-lato text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="text-accent font-lato text-base mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Section - Details */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="w-full h-auto flex flex-col gap-2 p-4  rounded-lg "
          >
            <h2 className="font-heading text-lg" style={{ color: detail.textColor }}>
              {detail.title}
            </h2>
            <p className="text-accent font-lato text-sm">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCanHelpYou;
