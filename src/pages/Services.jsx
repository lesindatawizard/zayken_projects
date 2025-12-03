import heroBg from "../assets/homepage_hero_bg.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="font-display text-gray-800">
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

          {/* MAIN */}
          <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-10 md:px-6 md:py-14">

            {/* HERO */}
            <section className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8 text-center shadow-soft md:min-h-[340px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.25,
                }}
              />
              <div className="relative flex flex-col items-center gap-4 max-w-3xl">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Our Services
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Delivering excellence in interior fit-out and construction with tailored solutions.
                </p>
              </div>
            </section>

{/* SERVICES GRID */}
<section className="mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      { icon: "home_work", text: "Turnkey Interior Fit-Out" },
      { icon: "foundation", text: "Construction" },
      { icon: "hvac", text: "MEP & HVAC" },
      { icon: "build", text: "Maintenance" },
      { icon: "carpenter", text: "Joinery" },
      { icon: "design_services", text: "Design & Build" },
      { icon: "water_drop", text: "Waterproofing" },
      { icon: "eco", text: "Landscaping" },
      { icon: "soup_kitchen", text: "Kitchen Equipments" },

      // ⭐ NEWLY ADDED
      { icon: "precision_manufacturing", text: "Aluminium & Steel Fabrication" },
      { icon: "weekend", text: "Furniture & Upholstery" },
      { icon: "grid_view", text: "Glass & SS Works" },
    ].map((item, index) => (
      <div
        key={index}
        className="group flex flex-col gap-4 rounded-lg bg-white p-6 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-200 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-ocean-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <span className="material-symbols-outlined text-brand-ocean-blue !text-4xl">
          {item.icon}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{item.text}</h3>
      </div>
    ))}

  </div>

  <div className="flex justify-center mt-12">
    <Link
      to="/projects"
      className="flex items-center justify-center rounded-lg h-12 px-8 bg-brand-ocean-blue text-white text-base font-bold shadow-lg hover:scale-105 transition-transform"
    >
      View Projects
    </Link>
  </div>
</section>


            {/* CTA */}
            <section className="mt-20">
              <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-10 text-center shadow-soft md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Let’s start creating the space of your dreams.
                </h2>
                <p className="text-gray-600 max-w-3xl">
                  Get in touch with us today to discuss your interior fit-out or construction project.
                </p>

                <Link
                  to="/contact"
                  className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-brand-ocean-blue text-white font-bold shadow-soft hover:opacity-90 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}