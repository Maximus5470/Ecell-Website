import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
    return (
        <main>
            {/*<Navbar />*/}
            <Hero />
            <ServicesSection/>
            {/* Add your other sections here */}
            {/* <ContactUs /> */}
            {/*<Footer />*/}
        </main>
    );
}