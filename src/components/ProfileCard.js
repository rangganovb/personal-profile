import React from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import ProfilePicture from "../assets/images/rangga-profile.png";

function ProfileCard() {
  const socialIcons = [
    { Icon: Instagram, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <section id="profile" className="bg-[#DEF4F8] pt-48 pb-32 px-16">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Kiri: Teks dan Tombol */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <p className="text-sm font-bold text-[#3668A5] uppercase tracking-widest">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-[#0B0C63] leading-tight">
            Rangga Novbrian
            <br />
            UI/UX Designer & <br /> Frontend Developer
          </h1>

          <p
            className="text-lg font-normal text-[#3668A5] mt-4"
            style={{ maxWidth: "446px" }}
          >
            Passionate in creating beautiful and functional digital experiences.
            I love blending creativity with technology to make impactful
            solutions for users and brands.
          </p>

          <div className="flex space-x-4 mt-8">
            <a
              href="#portfolio"
              className="py-3 px-6 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#3668A5] to-[#64ADD2] hover:opacity-90 transition-opacity"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              See My Work
            </a>

            <a
              href="#contact"
              className="py-3 px-6 text-base font-semibold rounded-xl border border-[#64ADD2] text-[#64ADD2] hover:bg-[#64ADD2] hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex space-x-4 mt-12 pt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#3668A5] hover:text-[#64ADD2] transition-colors"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative p-12 lg:p-0">
          <div
            className="absolute rounded-full w-64 h-64 lg:w-80 lg:h-80 opacity-30 bg-gradient-to-br from-[#64ADD2] via-[#A1DBE8] to-[#DEF4F8]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          ></div>

          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white"
            style={{
              boxShadow: "0 25px 50px 0 rgba(0, 0, 0, 0.25)",
              zIndex: 2,
            }}
          >
            <img
              src={ProfilePicture}
              alt="Profile Rangga Novbrian"
              className="w-full h-full object-cover rounded-full"
            />

            <div
              className="absolute bottom-4 right-0 bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-2 whitespace-nowrap"
              style={{ transform: "translate(25%, 25%)", zIndex: 3 }}
            >
              <Send className="w-4 h-4 text-[#3668A5]" fill="#64ADD2" />
              <span className="text-sm font-semibold text-[#0B0C63]">
                2+ Years Exp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
