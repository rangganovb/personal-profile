import React from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const skillsData = [
  {
    title: "UI/UX Design",
    description: "Figma, Sketch, Prototyping, Usability Testing.",
    Icon: Palette,
    color: "text-[#3A6FF8]", // biru sedang, elegan
    bg: "bg-[#EAF1FF]", // biru sangat muda, lembut
  },
  {
    title: "Front-End Development",
    description: "React, Next.js, JavaScript, HTML, CSS, Tailwind.",
    Icon: Code,
    color: "text-[#2C58E0]", // biru tegas
    bg: "bg-[#EDF4FF]", // latar lembut
  },
  {
    title: "Mobile Development",
    description: "Android Studio, Flutter, React Native.",
    Icon: Smartphone,
    color: "text-[#1E3A8A]", // biru tua
    bg: "bg-[#E8F0FF]", // biru muda netral
  },
  {
    title: "Optimization & Performance",
    description: "SEO, performance monitoring, create smooth web experiences.",
    Icon: Zap,
    color: "text-[#005FCF]", // biru pekat berenergi
    bg: "bg-[#E6F0FE]", // latar biru terang
  },
];

function SkillCard({ title, description, Icon, color, bg }) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-md border border-[#E5EAF2] ${bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
    >
      <div
        className={`p-4 rounded-xl ${color} bg-white shadow-sm inline-block mb-4`}
      >
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold text-[#0B2E6F] mb-2">{title}</h3>
      <p className="text-base text-[#64748B]">{description}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white px-8 md:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-[#0B2E6F] mb-4">
            My Skills
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            These are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
