import { usePopup } from "../context/PopupContext";
import { useState } from "react";

export default function QuotePopup() {
  const { isQuoteOpen, closeQuote } = usePopup();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  if (!isQuoteOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeQuote}
      ></div>

      {/* POPUP CARD */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden
                   max-h-[90vh] flex flex-col"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-300 p-6 bg-white">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">Get a Free Quote</h1>
            <p className="text-gray-600 text-base mt-1">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <button
            onClick={closeQuote}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* SCROLLABLE FORM CONTENT */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="h-12 rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-brand-sky-blue focus:border-brand-sky-blue"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-brand-sky-blue focus:border-brand-sky-blue"
              />
            </label>

            {/* Phone */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">Phone Number</span>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                className="h-12 rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-brand-sky-blue focus:border-brand-sky-blue"
              />
            </label>

            {/* Project Type */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">Type of Project</span>
              <select
                className="h-12 rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-brand-sky-blue focus:border-brand-sky-blue"
              >
                <option value="">Select project type</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          {/* Message */}
          <label className="flex flex-col mt-6">
            <span className="text-sm font-medium text-gray-800 mb-2">Message</span>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-brand-sky-blue focus:border-brand-sky-blue"
            ></textarea>
          </label>
        </div>

        {/* FOOTER BUTTON SECTION */}
        <div className="border-t border-gray-300 p-6 bg-white flex justify-end">
          <button
            className="h-12 px-6 rounded-lg font-bold text-white bg-brand-ocean-blue hover:bg-brand-ocean-blue/90 shadow"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}