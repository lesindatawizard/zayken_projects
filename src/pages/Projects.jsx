import { useState } from "react";
import projectsData from "../data/projectsData";

const categories = ["All", "Commercial", "F&B", "Residential"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDC2xsDq3CHMlqAFvg5-oYScVfyIE83F8MEXqXZRJynKD-XGslamA7skOcjbbHacBZfkuoS-si3f0yHkAvLo1oTH2pDFF1nlB9K3x3Zox42g8NKuuFwd_ukn1MdMpH-LYVVGL0wUa5uY9J2DZYXGHJoe7z0qBKnvmvc-pc2fSbXLTuD9BCutDEZtZGWk83_63eAA4l2xzLieH_eUaA_GOj2_c31lES_fDd2hcskEpwfa4WbOdM8hpBq8p2fxv2qKsYN6OIUydLtQV5q')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex h-full grow flex-col w-full backdrop-blur-effect">

        {/* MAIN CONTENT CONTAINER */}
        <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-10 md:px-6 md:py-14">
          
          {/* PAGE TITLE */}
          <section
            className="rounded-xl shadow-soft max-w-6xl mx-auto h-[300px] flex items-center justify-center 
                      text-center text-white bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxHG0_PcRn7TFAnDKbftTBYVmejt202QNv_TLyBEsYfMgv68Wsut3QHMuWJvMUjaqCQyvQuaue370oB8gkuoaMC1cgiHuxQecNojg6HaDD1bh_-3dWIISIwgTyoUToRwG1GCc7WbHBf-sgj4EAKm51qqyFsJ-45RvdJ2qtO78C_XEaEgZMh_KEJM1nkBoIqvU35kbGU-FeCz-dr5hSH39FteAwIvjURkKAQEiDBrgKOZBQsHFOjD2fFK9iT36h2gb95Ib2IvEeGt-b')",
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
  Our Projects
</h1>
          </section>

{/* CATEGORY FILTERS */}
<div className="flex justify-center mt-8 gap-6 border-b border-gray-300 pb-3">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`
        pb-2 text-sm font-semibold transition-all duration-200 
        transform 
        ${selectedCategory === cat 
          ? "text-brand-ocean-blue border-b-2 border-brand-ocean-blue scale-110" 
          : "text-gray-600 hover:text-brand-ocean-blue hover:scale-110"
        }
      `}
    >
      {cat}
    </button>
  ))}
</div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 px-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-lg shadow-soft overflow-hidden bg-cover bg-center aspect-[3/4]"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">View Details</p>
                </div>
              </div>
            ))}
          </div>

{/* CTA */}
<section className="flex flex-col items-center gap-6 rounded-xl bg-white p-8 text-center shadow-soft md:p-12 mt-20">
  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
    Ready to Start Your Project?
  </h2>

  <p className="max-w-xl text-gray-600">
    Let’s work together to create a space you’ll love. Get in touch with us today.
  </p>

  <div className="mt-2 flex flex-wrap justify-center gap-4">
    <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-brand-ocean-blue text-white text-base font-bold shadow-soft transition-all hover:opacity-90">
      View Services
    </button>

    <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent text-brand-ocean-blue ring-2 ring-brand-ocean-blue transition-colors hover:bg-brand-ocean-blue/10">
      Contact Us
    </button>
  </div>
</section>

            </main>
        </div>
        </div>
    );
    }