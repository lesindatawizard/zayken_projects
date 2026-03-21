import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { usePopup } from "../context/PopupContext";
import { buttonMotion, cardMotion, sectionInView } from "../lib/motion";
import { usePageImages } from "../hooks/usePageImages";

const services = [
  { icon: "design_services", title: "Turnkey Interior Fit-Out" },
  { icon: "foundation", title: "Construction" },
  { icon: "hvac", title: "MEP & HVAC" },
  { icon: "construction", title: "Maintenance" },
  { icon: "carpenter", title: "Joinery" },
  { icon: "architecture", title: "Design & Build" },
];

const whyChooseUs = [
  {
    icon: "eco",
    title: "Sustainable",
    body: "We prioritize eco-friendly materials and practices to create spaces that are both beautiful and responsible.",
  },
  {
    icon: "savings",
    title: "Affordable",
    body: "Delivering high-quality results without compromising your budget is our core commitment.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    body: "We leverage the latest trends and technologies to build innovative and future-proof interiors.",
  },
];

export default function Home() {
  const MotionLink = motion(Link);
  const { openQuote } = usePopup();
  const pageImages = usePageImages("home", {
    heroImage: "",
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVrJc7X1JjEuza4-3orPm4rkte8BFsmGWa2Xbk9WvLCqq9buFcXBp5LmKIBN262Kro47zy9WhSP97aAaSbJhqdj_8hZLch66s_PY4qLPq5vmUnkA5y0rA61lgfn0pzyr-MDjOsekvH0slZEDsI1SNBj-8Ndkfh55MCekru1_awX6JT9T61OuyDbBP6DOaVEwiCsNGvjcTOMgX7-RxmtPd4JXjGGCuOfqHeu0iR7muXP07fty4-medrmQEZD0pG3fc59E2E65D3pxd7",
  });
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const q = query(collection(db, "projects"), where("featured", "==", true));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setFeaturedProjects(items.slice(0, 6));
      } catch (err) {
        console.error("Failed to load featured projects", err);
      } finally {
        setLoadingFeatured(false);
      }
    }
    loadFeatured();
  }, []);

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
          <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-8 md:px-6 md:py-12 lg:py-16">
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
{/* HERO */}
<motion.section
  className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white/85 backdrop-blur-sm p-8 text-center shadow-soft md:min-h-[340px]"
  initial={sectionInView.initial}
  whileInView={sectionInView.whileInView}
  viewport={sectionInView.viewport}
  transition={sectionInView.transition}
>
  {pageImages.heroImage ? (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${pageImages.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.22,
      }}
    />
  ) : null}
  {/* Content */}
  <div className="relative flex flex-col items-center gap-4 max-w-4xl">
    <motion.h1
      className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Creating{" "}
      <span className="text-brand-ocean-blue">Functional</span>,{" "}
      <span className="text-brand-ocean-blue">Sustainable</span> &amp;{" "}
      <span className="text-brand-ocean-blue">Beautiful</span> Spaces.
    </motion.h1>

    <h2 className="max-w-2xl text-lg font-normal text-gray-600 sm:text-xl">
      Interior Fit-Out &amp; Maintenance Company in Oman.
    </h2>

    <div className="mt-4 flex flex-wrap justify-center gap-4">
      <MotionLink
        to="/projects"
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-brand-ocean-blue text-white text-base font-bold shadow-lg transition-transform hover:scale-105"
        whileHover={buttonMotion.whileHover}
        whileTap={buttonMotion.whileTap}
        transition={buttonMotion.transition}
      >
        <span className="truncate">View Our Projects</span>
      </MotionLink>

      <motion.button
        onClick={openQuote}
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white border-2 border-brand-sky-blue text-brand-ocean-blue text-base font-bold shadow-lg transition-transform hover:scale-105 hover:bg-brand-sky-blue/10"
        whileHover={buttonMotion.whileHover}
        whileTap={buttonMotion.whileTap}
        transition={buttonMotion.transition}
      >
        <span className="truncate">Click for a free Quote</span>
      </motion.button>
    </div>
  </div>
</motion.section>

           {/* ABOUT */}
<section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">

<div className="flex flex-col items-center text-left md:items-start px-6 lg:px-8">
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    About Zayken Projects
  </h2>

  <p className="mt-4 text-base leading-relaxed text-gray-600">
    Zayken Projects is a leading interior fit-out and maintenance
    company based in Oman, dedicated to creating{" "}
    <span className="text-brand-ocean-blue font-medium">
      functional
    </span>
    ,{" "}
    <span className="text-brand-ocean-blue font-medium">
      reliable
    </span>
    , and{" "}
    <span className="text-brand-ocean-blue font-medium">
      beautiful
    </span>{" "}
    spaces. Our team of experts delivers high-quality solutions
    tailored to meet the unique needs of each client, ensuring
    every project is a testament to our commitment to{" "}
    <span className="text-brand-ocean-blue font-medium">
      excellence and innovation
    </span>.
  </p>
</div>

<div className="w-full px-6 lg:px-8">
  <img
    className="aspect-[4/3] w-full rounded-xl object-cover shadow-soft"
    src={pageImages.aboutImage}
    alt="About us"
  />
</div>

</section>

    {/* SERVICES */}
<motion.section
  className="pt-0 sm:pt-2 pb-10"
  initial={sectionInView.initial}
  whileInView={sectionInView.whileInView}
  viewport={sectionInView.viewport}
  transition={sectionInView.transition}
>
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

    {/* Title */}
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Services
      </h2>
      <p className="mt-3 text-lg leading-7 text-gray-600">
        We provide a comprehensive range of services to bring your
        vision to life, from initial design to final execution.
      </p>
    </div>

    <MobileCarousel
      items={services}
      renderItem={(service) => (
        <motion.div
          className="group flex flex-col items-center justify-center text-center px-6 py-5 bg-white rounded-xl shadow-soft"
          whileHover={cardMotion.whileHover}
          whileTap={cardMotion.whileTap}
          transition={cardMotion.transition}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
            <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
              {service.icon}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
        </motion.div>
      )}
    />

    <div className="mx-auto mt-10 hidden max-w-2xl grid-cols-1 gap-6 sm:grid md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
      {services.map((service) => (
        <motion.div
          key={service.title}
          className="group flex flex-col items-center text-center px-6 py-5 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50"
          whileHover={cardMotion.whileHover}
          whileTap={cardMotion.whileTap}
          transition={cardMotion.transition}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
            <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
              {service.icon}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* INDUSTRIES */}
<section className="-mt-10 pb-8">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Industries We Serve
      </h2>
    </div>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <div className="p-4 rounded-lg bg-brand-light-gray font-medium text-gray-700">
        F&amp;B
      </div>
      <div className="p-4 rounded-lg bg-brand-light-gray font-medium text-gray-700">
        Residential
      </div>
      <div className="p-4 rounded-lg bg-brand-light-gray font-medium text-gray-700">
        Commercial
      </div>
    </div>
  </div>
</section>

            {/* FEATURED PROJECTS */}
            <motion.section
              className="-mt-16 py-8"
              initial={sectionInView.initial}
              whileInView={sectionInView.whileInView}
              viewport={sectionInView.viewport}
              transition={sectionInView.transition}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Featured Projects
                  </h2>
                </div>

                {loadingFeatured ? (
                  <p className="mt-6 text-center text-gray-600">Loading featured projects...</p>
                ) : featuredProjects.length === 0 ? (
                  <p className="mt-6 text-center text-gray-600">
                    No featured projects yet. Mark some as featured in the admin panel.
                  </p>
                ) : (
                  <>
                    <MobileCarousel
                      items={featuredProjects}
                      renderItem={(project) => (
                        <motion.div
                          className="overflow-hidden rounded-xl shadow-lg relative bg-white"
                          whileTap={cardMotion.whileTap}
                          transition={cardMotion.transition}
                        >
                          {project.imageUrl ? (
                            <img
                              alt={project.title || "Featured project"}
                              className="h-80 w-full object-cover"
                              src={project.imageUrl}
                            />
                          ) : (
                            <div className="h-80 w-full bg-gray-100 flex items-center justify-center text-gray-500">
                              No image
                            </div>
                          )}
                          <div className="p-4 text-center">
                            <p className="text-gray-900 font-semibold">{project.title || "Untitled"}</p>
                            <p className="text-gray-700 text-sm mt-0.5">{project.category || ""}</p>
                          </div>
                        </motion.div>
                      )}
                    />

                    <div className="mx-auto mt-8 hidden max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid lg:max-w-none lg:grid-cols-3">
                      {featuredProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          className="group overflow-hidden rounded-xl shadow-lg relative bg-white"
                          whileHover={cardMotion.whileHover}
                          whileTap={cardMotion.whileTap}
                          transition={cardMotion.transition}
                        >
                          {project.imageUrl ? (
                            <img
                              alt={project.title || "Featured project"}
                              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              src={project.imageUrl}
                            />
                          ) : (
                            <div className="h-80 w-full bg-gray-100 flex items-center justify-center text-gray-500">
                              No image
                            </div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 h-0 overflow-hidden bg-white/85 transition-all duration-300 ease-out group-hover:h-[30%]">
                            <div className="p-4 w-full text-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                              <p className="text-gray-900 font-semibold">{project.title || "Untitled"}</p>
                              <p className="text-gray-700 text-sm mt-0.5">{project.category || ""}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-16 flex justify-center">
                  <Link
                    to="/projects"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-brand-ocean-blue text-white text-base font-bold shadow-lg transition-transform hover:scale-105"
                  >
                    <span className="truncate">Explore All Projects</span>
                  </Link>
                </div>
              </div>
            </motion.section>

           {/* WHY CHOOSE US */}
<motion.section
  className="-mt-16 py-8"
  initial={sectionInView.initial}
  whileInView={sectionInView.whileInView}
  viewport={sectionInView.viewport}
  transition={sectionInView.transition}
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
    {/* Title */}
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Why Choose Us
      </h2>
    </div>

    <MobileCarousel
      items={whyChooseUs}
      renderItem={(item) => (
        <motion.div
          className="flex flex-col items-center bg-white p-8 rounded-xl shadow-soft text-center"
          whileHover={cardMotion.whileHover}
          whileTap={cardMotion.whileTap}
          transition={cardMotion.transition}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 mb-4">
            <span className="material-symbols-outlined text-brand-ocean-blue text-4xl">{item.icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.body}</p>
        </motion.div>
      )}
    />

    <div className="mt-8 hidden grid-cols-1 gap-12 text-center md:grid md:grid-cols-3">
      {whyChooseUs.map((item) => (
        <motion.div
          key={item.title}
          className="flex flex-col items-center bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow"
          whileHover={cardMotion.whileHover}
          whileTap={cardMotion.whileTap}
          transition={cardMotion.transition}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 mb-4">
            <span className="material-symbols-outlined text-brand-ocean-blue text-4xl">{item.icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.body}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* CTA - Wider */}
<motion.section
  className="-mt-6 py-0"
  initial={sectionInView.initial}
  whileInView={sectionInView.whileInView}
  viewport={sectionInView.viewport}
  transition={sectionInView.transition}
>
  <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-8 text-center shadow-soft md:p-12 max-w-7xl w-full mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
      Let’s start creating the space of your dreams.
    </h2>

    <p className="max-w-3xl text-gray-600">
      Let’s work together to build a functional, beautiful space. Get in touch with us today to discuss your project.
    </p>

    <div className="mt-2 flex flex-wrap justify-center gap-4">
      <MotionLink
        to="/contact"
        className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-brand-ocean-blue text-white font-bold shadow-soft transition-transform hover:scale-105"
        whileHover={buttonMotion.whileHover}
        whileTap={buttonMotion.whileTap}
        transition={buttonMotion.transition}
      >
        Contact Us
      </MotionLink>
    </div>
  </div>
</motion.section>
          </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function MobileCarousel({ items, renderItem }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [items.length]);

  function handleScroll() {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.clientWidth;
    const next = Math.round(trackRef.current.scrollLeft / Math.max(cardWidth, 1));
    setActive(next);
  }

  function goTo(index) {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({
      left: index * trackRef.current.clientWidth,
      behavior: "smooth",
    });
    setActive(index);
  }

  if (!items.length) return null;

  return (
    <div className="mt-8 md:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar"
      >
        {items.map((item, index) => (
          <div
            key={item.id || item.title || index}
            className={`w-full shrink-0 snap-center transition-transform duration-300 ${
              active === index ? "scale-100" : "scale-[0.98]"
            }`}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === active ? "w-6 bg-brand-ocean-blue" : "w-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}