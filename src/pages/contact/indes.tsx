import ContactForm from "@/components/contact/contactForm"
import HowCanHelpYou from "@/components/contact/howCanHelpYou"
import Info from "@/components/contact/info"


const Contact = () => {
  return (
    <div className="w-full min-h-screen " >
      <div  className="  mx-auto  flex flex-col items-center justify-center  gap-2">
        {/* How can help you  */}
        <div className="w-[85%] " >
        <HowCanHelpYou />
        </div>
        <div className="w-[85%]" >
        {/* Info */}
        <Info />
        {/* Contact Form */}
        <ContactForm />
        </div>


      </div>
    </div>
  )
}

export default Contact
