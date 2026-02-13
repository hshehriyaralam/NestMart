import { Button } from "../ui/button";

const ContactForm = () => {
  const InputStyles =
    "w-full sm:w-[340px] h-12 px-2 border border-borderColor rounded text-accent mb-4 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary";

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Form */}
        <div className="w-full md:w-7/10 lg:p-6">
          <div className="px-6">
            <p className="text-primary font-bold text-2xl font-quicksand mt-1">
              Contact Form
            </p>
            <h2 className="font-heading text-4xl mt-2">Drop Us a Line</h2>
            <p className="text-[#B6B6B6] font-lato text-sm mt-2">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <form action="" className="mt-4 flex flex-wrap gap-4 lg:p-4 p-0  ">
            <input type="text" className={InputStyles} placeholder="First Name" />
            <input type="text" className={InputStyles} placeholder="Last Name" />
            <input type="number" className={InputStyles} placeholder="Your Phone" />
            <input type="text" className={InputStyles} placeholder="Subject" />

            <textarea
              className="w-full p-2 border border-borderColor rounded text-accent outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
              rows={5}
            ></textarea>

            <Button className="bg-secondary text-white text-xs hover:bg-secondary/90 mt-2 cursor-pointer py-6 px-6 rounded-lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Image */}
        <div className="w-full md:w-3/10">
          <img
            src="/contact.webp"
            alt="Contact"
            loading="lazy"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
