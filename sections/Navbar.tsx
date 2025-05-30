"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "features", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "FAQs", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50 px-10 md:px-0">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center px-4 md:pr-2 mx-auto bg-neutral-950/70 backdrop-blur-lg ">
          <div>
            {/* <Image
              src="/logo.png"
              alt="logo"
              width={10}
              height={10}
              className="h-9 w-auto md:h-auto "
            /> */}
            <h1 className=" text-xl md:text-2xl font-medium text-white">
              EZEBUDDIES
            </h1>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <nav className="flex gap-6 font-medium text-white ">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag-icon lucide-shopping-bag md:hidden"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <Button onClick={() => router.push("/products")} className="hidden md:inline-flex items-center border h-12 rounded-full px-6 font-medium bg-indigo-500 text-white border-indigo-500 cursor-pointer">
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
