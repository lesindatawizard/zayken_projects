import zaykenLogo from "../assets/zayken_projects_logo.svg";
import { Link } from "react-router-dom";
import heroBg from "../assets/homepage_hero_bg.jpg";

export default function Home() {
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
<section
  className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8 text-center shadow-soft md:min-h-[340px]"
>
  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.25,
    }}
  />

  {/* Content */}
  <div className="relative flex flex-col items-center gap-4 max-w-4xl">
    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
      Creating{" "}
      <span className="text-brand-ocean-blue">Functional</span>,{" "}
      <span className="text-brand-ocean-blue">Sustainable</span> &amp;{" "}
      <span className="text-brand-ocean-blue">Beautiful</span> Spaces.
    </h1>

    <h2 className="max-w-2xl text-lg font-normal text-gray-600 sm:text-xl">
      Interior Fit-Out &amp; Maintenance Company in Oman.
    </h2>

    <div className="mt-4 flex flex-wrap justify-center gap-4">
      <Link
        to="/projects"
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-brand-ocean-blue text-white text-base font-bold shadow-lg transition-transform hover:scale-105"
      >
        <span className="truncate">View Our Projects</span>
      </Link>

      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white border-2 border-brand-sky-blue text-brand-ocean-blue text-base font-bold shadow-lg transition-transform hover:scale-105 hover:bg-brand-sky-blue/10">
        <span className="truncate">Click for a free Quote</span>
      </button>
    </div>
  </div>
</section>

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
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVrJc7X1JjEuza4-3orPm4rkte8BFsmGWa2Xbk9WvLCqq9buFcXBp5LmKIBN262Kro47zy9WhSP97aAaSbJhqdj_8hZLch66s_PY4qLPq5vmUnkA5y0rA61lgfn0pzyr-MDjOsekvH0slZEDsI1SNBj-8Ndkfh55MCekru1_awX6JT9T61OuyDbBP6DOaVEwiCsNGvjcTOMgX7-RxmtPd4JXjGGCuOfqHeu0iR7muXP07fty4-medrmQEZD0pG3fc59E2E65D3pxd7"
    alt="About us"
  />
</div>

</section>

    {/* SERVICES */}
<section className="pt-0 sm:pt-2 pb-10">
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

    {/* Service Cards */}
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
      
      {/* Card 1 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            design_services
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Turnkey Interior Fit-Out
        </h3>
      </div>

      {/* Card 2 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            foundation
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Construction
        </h3>
      </div>

      {/* Card 3 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            hvac
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          MEP &amp; HVAC
        </h3>
      </div>

      {/* Card 4 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            construction
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Maintenance
        </h3>
      </div>

      {/* Card 5 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            carpenter
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Joinery
        </h3>
      </div>

      {/* Card 6 */}
      <div className="group flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-brand-ocean-blue/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ocean-blue/10">
          <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
            architecture
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Design &amp; Build
        </h3>
      </div>

    </div>
  </div>
</section>

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
            <section className="-mt-16 py-8">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Featured Projects
                  </h2>
                </div>

                <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt="A minimalist and bright living room with modern furniture."
                      className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeRG6H4vXOwANyy28n3UO4PDk7MKL4lBnAorg858k57w4ONCkBcNSy4AaywMchGQi-afTuqBjMmkuwNhs2TGCMdvscRoRTTAa2YqhQXLYaFbE0gdYIfn50ElnBAeUwOATfuOFXgVzHTq0TkNjpHBjVfJ2dvLEUjKaZUIxHI8SioPPNhsF-ChsbUAKZ5T1D19fktY8TMZ38xGcOqvoh4Q-HBcIklSF44Fizxig9atNUKtxfhCRWQiWOeq2VEi3betXcHmW0YoFsOTik"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt="A cozy bedroom interior with neutral colors and soft lighting."
                      className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCckckEGCNL-e6WBfVnLUNRjt208NIUd8xw88qEgfr7a83n8_w63Vd6q4iyv8oBqebyvtZplXO84a3KkCV0MmSUcUYofIU5bpBQ1MfFmLhEytJZqtpQPcoBnSqaqIbnMnhyP0wpK8GwH-BJBW4_Bkh5vR3QvjMUGtohVARJIrvBkfyTEJG-z9VFAxVw0lY4TExy5xdOYNf6xZTnJr0u44dbUVcNzrhbIJuG4QtDWfp_gi4alU5l0itHLhlnYfhJwla1G8oByDxHXN3"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt="An open-plan modern kitchen and dining area with wooden accents."
                      className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfZF0Ft6dxc3o_9HlwMMEdW1p3oxmmvaW9spo1oKPkFTnuShOSZKBt7dGJfWv9hp-vw2LehnBm_85bLEzLO7Mf2swrNelP2D_spcgvFNAZ2RLAEIb840NslgUeTsvrQDgk06rx9nGZVUHAXemQbnVYlcBFTxBA2zdt2HQeltcXDQSsUXIJOD5WyhyLbGY5khrMogLDvStAJT8L_8PjN8wZk7eCNH8viOd6ZkBbhv3KzHhDzw8D_JSG9eVoaXWk9SwAGaEkogrYhlg-"
                    />
                  </div>
                </div>

                <div className="mt-16 flex justify-center">
                <Link
  to="/projects"
  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-brand-ocean-blue text-white text-base font-bold shadow-lg transition-transform hover:scale-105"
>
  <span className="truncate">Explore All Projects</span>
</Link>
                </div>
              </div>
            </section>

           {/* WHY CHOOSE US */}
<section className="-mt-16 py-8">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
    {/* Title */}
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Why Choose Us
      </h2>
    </div>

    {/* Feature Cards */}
    <div className="mt-8 grid grid-cols-1 gap-12 text-center md:grid-cols-3">

      {/* Card 1 */}
      <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 mb-4">
          <span className="material-symbols-outlined text-brand-ocean-blue text-4xl">
            eco
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          Sustainable
        </h3>
        <p className="mt-2 text-gray-600">
          We prioritize eco-friendly materials and practices to create spaces
          that are both{" "}
          <span className="text-brand-ocean-blue font-medium">
            beautiful and responsible
          </span>.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 mb-4">
          <span className="material-symbols-outlined text-brand-ocean-blue text-4xl">
            savings
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          Affordable
        </h3>
        <p className="mt-2 text-gray-600">
          Delivering{" "}
          <span className="text-brand-ocean-blue font-medium">
            high-quality results
          </span>{" "}
          without compromising your budget is our core commitment.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 mb-4">
          <span className="material-symbols-outlined text-brand-ocean-blue text-4xl">
            lightbulb
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          Innovation
        </h3>
        <p className="mt-2 text-gray-600">
          We leverage the latest trends and technologies to build{" "}
          <span className="text-brand-ocean-blue font-medium">
            innovative and future-proof
          </span>{" "}
          interiors.
        </p>
      </div>

    </div>
  </div>
</section>

{/* CTA - Wider */}
<section className="-mt-6 py-0">
  <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-8 text-center shadow-soft md:p-12 max-w-7xl w-full mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
      Let’s start creating the space of your dreams.
    </h2>

    <p className="max-w-3xl text-gray-600">
      Let’s work together to build a functional, beautiful space. Get in touch with us today to discuss your project.
    </p>

    <div className="mt-2 flex flex-wrap justify-center gap-4">
      <Link
        to="/contact"
        className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-brand-ocean-blue text-white font-bold shadow-soft transition-all hover:opacity-90"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>
          </div>
          </main>

          {/* FOOTER */}
          
        </div>
      </div>
    </div>
  );
}