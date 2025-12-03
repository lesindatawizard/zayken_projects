import FaizPic from "../assets/mohammed_faiz_bio_pic.jpg";
import KenzPic from "../assets/Muhammed_kenz_propic.jpeg";

export default function About() {
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
          <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-8 md:px-6 md:py-12 lg:py-16">
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">

              {/* HERO */}
              <section className="relative flex min-h-[250px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8 text-center shadow-soft md:min-h-[300px]">
                <div className="absolute inset-0 zig-zag-pattern opacity-50" />

                <div className="relative flex flex-col items-center gap-4 max-w-4xl">
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    About Zayken Projects
                  </h1>

                  <h2 className="max-w-2xl text-lg font-normal text-gray-600 sm:text-xl">
                    Crafting exceptional interior spaces with passion and precision.
                  </h2>
                </div>
              </section>

              {/* WHO WE ARE */}
              <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
                <div className="w-full">
                  <img
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-soft"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVrJc7X1JjEuza4-3orPm4rkte8BFsmGWa2Xbk9WvLCqq9buFcXBp5LmKIBN262Kro47zy9WhSP97aAaSbJhqdj_8hZLch66s_PY4qLPq5vmUnkA5y0rA61lgfn0pzyr-MDjOsekvH0slZEDsI1SNBj-8Ndkfh55MCekru1_awX6JT9T61OuyDbBP6DOaVEwiCsNGvjcTOMgX7-RxmtPd4JXjGGCuOfqHeu0iR7muXP07fty4-medrmQEZD0pG3fc59E2E65D3pxd7"
                    alt="Modern interior"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Who We Are
                  </h2>

                  <p className="text-base leading-relaxed text-gray-600">
                    Zayken Projects was founded with a simple mission: to transform spaces into functional,
                    beautiful environments that inspire. With years of industry experience, our team brings creativity, 
                    precision, and dedication to every project. We believe in a{" "}
                    <span className="font-semibold text-brand-ocean-blue">collaborative approach</span>, 
                    working closely with clients to understand their vision and deliver results that{" "}
                    <span className="font-semibold text-brand-ocean-blue">exceed expectations</span>.
                  </p>
                </div>
              </section>

              {/* MISSION */}
              <section className="flex flex-col items-center gap-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-brand-ocean-blue">Sustainable</h3>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-brand-ocean-blue">Affordable</h3>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-brand-ocean-blue">Innovation</h3>
                  </div>
                </div>

                <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                  We are committed to delivering{" "}
                  <span className="font-semibold text-brand-ocean-blue">high-quality</span>,{" "}
                  <span className="font-semibold text-brand-ocean-blue">innovative</span>, and{" "}
                  <span className="font-semibold text-brand-ocean-blue">sustainable</span> 
                  interior solutions that are both beautiful and budget-friendly.
                </p>
              </section>

              {/* TEAM */}
              <section className="flex flex-col items-center gap-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Team
                </h2>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">

                  {/* 1 */}
                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <img
                      className="h-28 w-28 rounded-full object-cover shadow-lg"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlonr2cA7wJdK1kwLWo39gvLyZK0A3QhelNtEuB5vyD4NxDCaGMLiVEOnGdX_C4Axv9_VafiBKjJut1v_2R9hJpCip3Vuk9GlQF6hLZjsou2fBlFySna9fffrw95wMqnXssgE5aqRVxV6_aPT2XKtUJooZFYrSdPqdiw7NLPyDeSEYDF1IBX5qvNaRRKtrbC8Dujhq83ELR7RDB5AOArzqjEEtLzaGP4w7C_BTVgp9Nw6OvAOmJqDl619Y16C8YGooVbMQknOrUm1_"
                      alt="Chairman"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">Ahmad Al-Fahim</h3>
                    <p className="text-sm font-medium text-brand-ocean-blue">Chairman</p>
                  </div>

                  {/* 2 */}
                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <img
                      className="h-28 w-28 rounded-full object-cover object-top shadow-lg"
                      src={KenzPic}
                      alt="General Manager"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">Muhammed Kenz</h3>
                    <p className="text-sm font-medium text-brand-ocean-blue">General Manager</p>
                  </div>

                  {/* 3 */}
                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <img
                      className="h-28 w-28 rounded-full object-cover object-top shadow-lg"
                      src={FaizPic}
                      alt="Marketing & Operations"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">Mohammed Faiz</h3>
                    <p className="text-sm font-medium text-brand-ocean-blue">
                      Marketing & Operations
                    </p>
                  </div>
                </div>
              </section>

              {/* WHY CLIENTS TRUST US */}
              <section className="flex flex-col items-center gap-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Clients Trust Us
                </h2>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ocean-blue/10 text-brand-ocean-blue">
                      <span className="material-symbols-outlined text-3xl">timer</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">On-Time Delivery</h3>
                    <p className="text-sm text-gray-600">
                      We respect your time and guarantee project completion within schedule.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ocean-blue/10 text-brand-ocean-blue">
                      <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Budget-Friendly</h3>
                    <p className="text-sm text-gray-600">
                      Smart, transparent pricing without compromising quality.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ocean-blue/10 text-brand-ocean-blue">
                      <span className="material-symbols-outlined text-3xl">design_services</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Design</h3>
                    <p className="text-sm text-gray-600">
                      Every space is unique — your design will be too.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-soft">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ocean-blue/10 text-brand-ocean-blue">
                      <span className="material-symbols-outlined text-3xl">groups</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Experienced Team</h3>
                    <p className="text-sm text-gray-600">
                      Years of expertise combined with modern innovation.
                    </p>
                  </div>

                </div>
              </section>

              {/* CTA */}
              <section className="flex flex-col items-center gap-6 rounded-xl bg-white p-8 text-center shadow-soft md:p-12">
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

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}


