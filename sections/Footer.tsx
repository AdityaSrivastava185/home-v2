import Link from "next/link";
import React from "react";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <section className="py-16 md:px-24">
      <div className="container">
        <div className="flex flex-col md:flex-row  gap-6 justify-center items-center md:justify-between">
          <div>
            <h2>EzeBuddies</h2>
          </div>
          <div>
            <nav className="flex gap-6">
                {footerLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
