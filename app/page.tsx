import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introductions from "@/sections/Introductions";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Introductions />
    <Features/>
    <Integrations/>
    <Faqs/>
    <Footer/>
    </>
  );
}
