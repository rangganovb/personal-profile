import React from "react";
import { Check, Send } from "lucide-react";
import AboutPicture from "../assets/images/rangga-profile.png";

function Tag({ text }) {
  return (
    <div className="flex items-center space-x-2 py-2 px-3 bg-[#C4E9F1] rounded-lg">
      <Check className="w-3 h-3 text-[#0B0C63]" />
      <span className="text-sm font-semibold text-[#0B0C63]">{text}</span>
    </div>
  );
}

function AboutSection() {
  const skills = [
    "UI/UX Design",
    "Web Development",
    "Programming",
    "Social Event",
  ];

  return (
    <section id="about" className="py-24 px-16 bg-white">
      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center gap-12">
        {/* Foto Kiri */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-4 border-[#A1DBE8]"
            style={{
              boxShadow:
                "0 8px 10px 0 rgba(0, 0, 0, 0.10), 0 20px 25px 0 rgba(0, 0, 0, 0.10)",
            }}
          >
            <img
              src={AboutPicture}
              alt="Rangga Novbrian Syawal About"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Konten Kanan */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-[30px] font-bold text-[#0B0C63] leading-none">
            About Me
          </h2>

          <p className="text-lg font-normal text-[#3668A5]">
            Greetings everyone! I’m Rangga, an UI/UX designer and frontend
            developer. I love crafting clean and intuitive digital experiences
            by combining creativity in design with solid frontend development
            skills. My focus is on building websites and apps that look great,
            feel seamless, and truly connect with users.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-4 pt-4">
            {skills.map((skill) => (
              <Tag key={skill} text={skill} />
            ))}
          </div>

          {/* Tombol Let's Connect */}
          <a
            href="#contact"
            className="flex items-center space-x-3 py-3 px-6 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#3668A5] to-[#64ADD2] hover:opacity-90 transition-opacity mt-8 justify-center lg:justify-start"
            style={{
              boxShadow:
                "0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)",
              maxWidth: "200px",
            }}
          >
            <Send className="w-4 h-4 text-white" />
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
