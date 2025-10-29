import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import portofolioImage from "../assets/images/portofolioranggasipadi.jpg";
import portofolioImage2 from "../assets/images/portofolioranggasioutfitly.jpg";
import portofolioImage3 from "../assets/images/portofolioranggasiklaudia.jpg";
import portofolioImage4 from "../assets/images/portofolioranggaprogram.jpg";
import portofolioImage5 from "../assets/images/portofolioranggafrontend.jpg";

const projects = [
  {
    id: 1,
    title: "Pady Disease Detection App",
    category: "UI/UX Design",
    image: portofolioImage,
    link: "#",
  },
  {
    id: 2,
    title: "OOTD Fashion App",
    category: "UI/UX Design",
    image: portofolioImage2,
    link: "#",
  },
  {
    id: 3,
    title: "Smart Home Mobile Control App",
    category: "UI/UX Design",
    image: portofolioImage3,
    link: "#",
  },
  {
    id: 4,
    title: "Parking Management System",
    category: "Programming",
    image: portofolioImage4,
    link: "#",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    category: "Frontend",
    image: portofolioImage5,
    link: "#",
  },
];

const categories = ["All", "Frontend", "UI/UX Design", "Programming"];

function ProjectCard({ title, category, image, link }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md bg-white border border-[#E5EAF2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-60 w-full overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={`Portfolio Project: ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-[#3A6FF8] mb-1 block">
          {category}
        </span>
        <h3 className="text-xl font-bold text-[#0B2E6F] mb-4">{title}</h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#2C58E0] hover:text-[#005FCF] transition-colors font-semibold"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white px-8 md:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-[#0B2E6F] mb-4">
            My Recent Work
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Selected projects that showcase my passion for design and coding.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#2C58E0] to-[#3A6FF8] text-white shadow-md"
                    : "bg-white text-[#64748B] border border-[#E5EAF2] hover:border-[#2C58E0]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
