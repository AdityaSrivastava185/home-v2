import Link from "next/link";
import React from "react";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-xl font-semibold">EzeBuddies</div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/70">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/40">
        &copy; {new Date().getFullYear()} EzeBuddies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
