import NavBar from "../Common/NavBar"
import ContactForm from "./ContactForm";
import Coupon from "../Common/Coupon";
import Footer from "../Common/Footer";

function Contact() {
    return (
        <div>
            <Coupon />
            <NavBar />
            {/* <Hero /> */}
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;
