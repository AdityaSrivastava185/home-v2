"use client"
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introductions from "@/sections/Introductions";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time:any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
  },[])
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
