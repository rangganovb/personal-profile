import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t border-border-gray bg-white py-6">
      <div className="container mx-auto max-w-[1440px] flex flex-col items-center justify-center text-center space-y-2">
        {/* Copyright */}
        <p className="text-base text-grayish-blue font-normal">
          &copy; {new Date().getFullYear()} Rangga Novbrian Syawal. All Rights
          Reserved.
        </p>

        {/* Crafted Message */}
        <p className="flex items-center text-base text-grayish-blue font-normal space-x-2">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-[#64ADD2] fill-[#64ADD2]" />
          <span>and Soul in Jakarta</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
