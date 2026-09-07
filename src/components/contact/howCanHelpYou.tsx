const HowCanHelpYou = () => {
  const details = [
    {
      id: 1,
      title: "01. Visit Feedback",
      description:
        "Tell us about your experience using our website, browsing products, placing an order, or receiving your delivery. Your feedback helps us improve our services and create a better shopping experience.",
      textColor: "#253D4E",
    },
    {
      id: 2,
      title: "02. Product & Order Help",
      description:
        "Need help finding a product or checking your order? Contact our team for assistance with product information, availability, order status, delivery questions, and other shopping-related concerns.",
      textColor: "#253D4E",
    },
    {
      id: 3,
      title: "03. Billing Inquiries",
      description:
        "If you have questions about payments, order totals, discounts, invoices, or billing information, let us know. Our support team can help clarify your billing-related questions.",
      textColor: "#3BB77E",
    },
    {
      id: 4,
      title: "04. General Inquiries",
      description:
        "For general questions about our store, products, services, delivery options, returns, partnerships, or other topics, send us a message and our team will be happy to assist.",
      textColor: "#253D4E",
    },
    {
      id: 5,
      title: "05. Product Information",
      description:
        "Want to know more about ingredients, product categories, availability, or product details? Reach out to us and we will help you find the information you need before placing your order.",
      textColor: "#253D4E",
    },
    {
      id: 6,
      title: "06. Delivery Support",
      description:
        "If you have questions about delivery times, shipping information, or your order's delivery status, our support team can guide you through the available options and provide helpful information.",
      textColor: "#253D4E",
    },
  ];

  return (
    <div className="w-full lg:p-6 p-3 flex flex-col gap-10">

      {/* Introduction */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10">

        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-primary text-2xl font-quicksand font-bold">
            How can we help you?
          </p>

          <h1 className="font-heading text-3xl md:text-5xl max-w-md">
            Let us know how we can help you
          </h1>

          <p className="text-accent font-lato text-base leading-7">
            We are here to make your shopping experience simple, convenient,
            and enjoyable. Whether you have a question about our products,
            need help with an order, or want to share your experience, our
            team is ready to assist you.
          </p>

          <p className="text-accent font-lato text-base leading-7">
            Our goal is to provide useful information and reliable customer
            support whenever you need it. From product questions and order
            assistance to delivery and billing inquiries, you can contact us
            and our team will do its best to help.
          </p>

          <p className="text-accent font-lato text-base leading-7">
            We also appreciate your suggestions and feedback. Your comments
            help us understand what our customers need and allow us to
            continuously improve our products, services, and website.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {details.slice(0, 4).map((detail) => (
            <div
              key={detail.id}
              className="w-full flex flex-col gap-2 p-4 rounded-lg"
            >
              <h2
                className="font-heading text-lg"
                style={{ color: detail.textColor }}
              >
                {detail.title}
              </h2>

              <p className="text-accent font-lato text-sm leading-6">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {details.slice(4).map((detail) => (
          <div
            key={detail.id}
            className="flex flex-col gap-2 p-5 rounded-lg"
          >
            <h2
              className="font-heading text-xl"
              style={{ color: detail.textColor }}
            >
              {detail.title}
            </h2>

            <p className="text-accent font-lato text-base leading-7">
              {detail.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-2xl">
          We are happy to hear from you
        </h2>

        <p className="text-accent font-lato text-base leading-7">
          Have a question, suggestion, or concern? Please use the contact form
          below to send us a message. Providing clear details about your
          question will help our team understand your request and provide a
          more useful response.
        </p>

        <p className="text-accent font-lato text-base leading-7">
          Whether you are looking for product information, need assistance
          with an order, or simply want to share feedback, we welcome your
          message and appreciate you taking the time to contact us.
        </p>
      </div>
    </div>
  );
};

export default HowCanHelpYou;
