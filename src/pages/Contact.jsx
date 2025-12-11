import React, { useState } from "react";
import heroBg from "../assets/homepage_hero_bg.jpg";

export default function Contact() {
  // -------------------------
  // FORM STATE
  // -------------------------
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, msg: "", type: "info" });

  // -------------------------
  // VALIDATORS (Same logic style as Quote Popup)
  // -------------------------
  const validators = {
    name: (v) => (v.trim() ? "" : "Name is required"),
    phone: (v) =>
      /^[0-9+()\-.\s]{6,}$/.test(v)
        ? ""
        : "Enter a valid phone number",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "Enter a valid email address",
    projectType: (v) => (v ? "" : "Please select a project type"),
  };

  function validateField(name, value) {
    return validators[name] ? validators[name](value) : "";
  }

  function runValidationForAll() {
    const newErrors = {};
    Object.keys(validators).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return newErrors;
  }

  // -------------------------
  // INPUT HANDLERS
  // -------------------------
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Real-time clear error
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
  }

  // -------------------------
  // TOAST
  // -------------------------
  function showToast(msg, type = "info") {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast({ show: false, msg: "", type: "info" }), 4000);
  }

  // -------------------------
  // SUBMIT HANDLER
  // -------------------------
  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = runValidationForAll();
    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch(
        "https://zayken-backend.onrender.com/contact-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        showToast("Message sent successfully!", "success");
        setForm({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          message: "",
        });
        setTouched({});
        setErrors({});
      } else {
        showToast("Failed to send message.", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Server error. Please try again later.", "error");
    }
  }

  // -------------------------
  // INPUT STYLE (restored white box + shadow-soft)
  // -------------------------
  const inputBase =
    "h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 shadow-soft focus:ring-2 focus:ring-brand-ocean-blue focus:outline-none";
  const inputError = "border-red-500 ring-1 ring-red-300";

  return (
    <div className="font-display text-gray-800">
      {/* Toast */}
      {toast.show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-3 rounded-lg z-50 shadow-lg">
          {toast.msg}
        </div>
      )}

      {/* PAGE BODY */}
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
          <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-10 md:px-6 md:py-14">
            <div className="flex flex-col gap-16">
              
              {/* ---------------- HERO SECTION ---------------- */}
              <section className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-8 text-center shadow-soft md:min-h-[320px]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.25,
                  }}
                />
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Contact Us
                  </h1>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Send us a message and we'll get back to you shortly.
                  </p>
                </div>
              </section>

              {/* ---------------- FORM GRID ---------------- */}
              <section className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                {/* ---------------- CONTACT FORM ---------------- */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 mt-2 mb-8">
                    Fill out the form below and our team will contact you soon.
                  </p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="flex flex-col">
                        <label className="text-gray-700 font-medium pb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${inputBase} ${
                            errors.name && touched.name ? inputError : ""
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && touched.name && (
                          <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label className="text-gray-700 font-medium pb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${inputBase} ${
                            errors.phone && touched.phone ? inputError : ""
                          }`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-medium pb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputBase} ${
                          errors.email && touched.email ? inputError : ""
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-medium pb-1">
                        Type of project <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputBase} ${
                          errors.projectType && touched.projectType ? inputError : ""
                        }`}
                      >
                        <option value="">Select project type</option>
                        <option>Commercial Fit-out</option>
                        <option>Residential Interior</option>
                        <option>Retail Design</option>
                        <option>Office Renovation</option>
                        <option>Other</option>
                      </select>
                      {errors.projectType && touched.projectType && (
                        <p className="text-sm text-red-600 mt-1">{errors.projectType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-medium pb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="
                          min-h-[140px] rounded-lg border border-gray-300 bg-white px-4 py-3 
                          text-gray-900 shadow-soft focus:ring-2 focus:ring-brand-ocean-blue 
                          focus:outline-none resize-y
                        "
                        placeholder="Enter your message..."
                      />
                    </div>

                    {/* Submit */}
                    <button
  type="submit"
  className="flex w-full md:w-auto items-center justify-center rounded-lg h-12 px-8 
             bg-brand-ocean-blue text-white text-lg font-bold shadow-lg 
             transition-transform duration-200 hover:scale-105 hover:brightness-110"
>
  Submit
</button>
                  </form>
                </div>

                {/* ---------------- CONTACT INFO ---------------- */}
                <div className="lg:col-span-2 mt-2">
                  <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Contact Information</h3>

                    <div className="space-y-6">
                      
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
                          call
                        </span>
                        <div>
                          <p className="text-gray-500 text-sm">Phone</p>
                          <a href="tel:+96894657347" className="text-gray-900 font-medium hover:underline">
                            +968 9465 7347
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
                          chat
                        </span>
                        <div>
                          <p className="text-gray-500 text-sm">WhatsApp</p>
                          <a href="https://wa.me/96894657347" className="text-gray-900 font-medium hover:underline">
                            +968 9465 7347
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
                          mail
                        </span>
                        <div>
                          <p className="text-gray-500 text-sm">Email</p>
                          <a href="mailto:info@zaykenprojects.com" className="text-gray-900 font-medium hover:underline">
                            info@zaykenprojects.com
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-brand-ocean-blue text-3xl">
                          location_on
                        </span>
                        <div>
                          <p className="text-gray-500 text-sm">Address</p>
                          <p className="text-gray-900 font-medium">
                            Azaiba, House of Music,
                            <br /> 3rd Floor, Office-308
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

