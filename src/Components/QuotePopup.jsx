import { usePopup } from "../context/PopupContext";
import { useEffect, useState } from "react";

export default function QuotePopup() {
  const { isQuoteOpen, closeQuote } = usePopup();

  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    type: "",
    projectLocation: "",
    message: "",
    attachments: [],

    // commercial specifics
    commercialSpaceType: "",
    commercialSpaceTypeOther: "",
    commercialScope: [],
    commercialScopeOther: "",

    // residential specifics
    propertyType: "",
    propertyTypeOther: "",
    residentialScope: [],
    residentialScopeOther: "",

    // fnb specifics
    fnbType: "",
    fnbTypeOther: "",
    fnbScope: [],
    fnbScopeOther: "",
  };

  const [form, setForm] = useState({ ...emptyForm });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  // Reset everything when popup opens
  useEffect(() => {
    if (isQuoteOpen) {
      setForm({ ...emptyForm });
      setTouched({});
      setErrors({});
    }
  }, [isQuoteOpen]);

  if (!isQuoteOpen) return null;

  // Option Lists
  const commercialSpaceOptions = ["Office", "Retail", "Clinic", "Warehouse", "Other"];
  const commercialScopeOptions = [
    "Full Fit-out",
    "Ceiling & Partitions",
    "Flooring",
    "Electrical & Lighting",
    "HVAC",
    "Furniture & Joinery",
    "Painting",
    "Signage Installation",
    "Renovation",
    "Other",
  ];

  const residentialPropertyOptions = ["Villa", "Apartment", "Flat", "Farmhouse", "Others"];
  const residentialScopeOptions = [
    "Full Interior",
    "Bedrooms",
    "Kitchen",
    "Wardrobes",
    "Flooring",
    "Painting",
    "False Ceiling",
    "Renovation",
    "Other",
  ];

  const fnbTypeOptions = ["Restaurant", "Café", "Juice Shop", "Bakery", "Cloud Kitchen", "Others"];
  const fnbScopeOptions = [
    "Full Fit-out",
    "MEP Works",
    "Kitchen Setup",
    "Dining Area Layout",
    "Flooring",
    "HVAC",
    "Signage",
    "Renovation",
    "Other",
  ];

  // Validation Rules
  const validators = {
    name: (v) => (v.trim().length ? "" : "Name is required"),
    email: (v) =>
      !v.trim()
        ? "Email is required"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "Enter a valid email",
    phone: (v) =>
      !v.trim()
        ? "Phone number is required"
        : /^[0-9+()\-.\s]{6,}$/.test(v)
        ? ""
        : "Enter a valid phone number",
    type: (v) => (v ? "" : "Please select a client type"),
    projectLocation: (v) => (v.trim() ? "" : "Project location is required"),
    message: (v) => (v.trim() ? "" : "Please provide project requirements"),
  };

  function validateField(fieldName, value) {
    return validators[fieldName] ? validators[fieldName](value) : "";
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

  // Handle Input Changes
  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

    // Handle file uploads
    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        attachments: Array.from(files),
      }));
      return;
    }

    // Handle checkbox group
    if (type === "checkbox" && name.startsWith("scope_")) {
      const group = name.split("_")[1];
      const key =
        group === "commercial"
          ? "commercialScope"
          : group === "residential"
          ? "residentialScope"
          : "fnbScope";

      setForm((prev) => {
        const s = new Set(prev[key]);
        if (checked) s.add(value);
        else s.delete(value);
        return { ...prev, [key]: Array.from(s) };
      });

      return;
    }

    // Normal update
    setForm((prev) => ({ ...prev, [name]: value }));

    // If switching type, reset conditional sections
    if (name === "type") {
      setForm((prev) => ({
        ...prev,
        type: value,
        commercialSpaceType: "",
        commercialSpaceTypeOther: "",
        commercialScope: [],
        commercialScopeOther: "",
        propertyType: "",
        propertyTypeOther: "",
        residentialScope: [],
        residentialScopeOther: "",
        fnbType: "",
        fnbTypeOther: "",
        fnbScope: [],
        fnbScopeOther: "",
      }));
    }

    // Clear other-type fields when not applicable
    if (name === "commercialSpaceType" && value !== "Other")
      setForm((p) => ({ ...p, commercialSpaceTypeOther: "" }));
    if (name === "propertyType" && value !== "Others")
      setForm((p) => ({ ...p, propertyTypeOther: "" }));
    if (name === "fnbType" && value !== "Others")
      setForm((p) => ({ ...p, fnbTypeOther: "" }));

    // Clear error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // Mark as touched + validate
  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = runValidationForAll();
    if (Object.keys(newErrors).length) return;

    console.log("Submitting quote request:", form);
    closeQuote();
  }

  // Input styles
  const inputBase =
    "h-12 rounded-lg border p-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-brand-sky-blue";
  const inputError = "border-red-500 ring-1 ring-red-200";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={closeQuote} />

      {/* Popup */}
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
<div className="flex items-center justify-between border-b border-gray-300 p-6 bg-white">
  <div className="flex flex-col">
    <h1 className="text-2xl font-bold text-gray-900">Get a Free Quote</h1>

    {/* ← ADD THIS PARAGRAPH */}
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

        {/* Form */}
        <form className="p-6 overflow-y-auto flex-1" onSubmit={handleSubmit} noValidate>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Name <span className="text-red-600">*</span>
              </span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                className={`${inputBase} ${
                  errors.name && touched.name ? inputError : "border-gray-300"
                }`}
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
              )}
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Email <span className="text-red-600">*</span>
              </span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                className={`${inputBase} ${
                  errors.email && touched.email ? inputError : "border-gray-300"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </label>

            {/* Phone */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Phone Number <span className="text-red-600">*</span>
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+968 0000 0000"
                className={`${inputBase} ${
                  errors.phone && touched.phone ? inputError : "border-gray-300"
                }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
              )}
            </label>

            {/* Client Type */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Client Type <span className="text-red-600">*</span>
              </span>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.type && touched.type ? inputError : "border-gray-300"
                }`}
              >
                <option value="">Select client type</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="fnb">F&B</option>
              </select>

              {errors.type && touched.type && (
                <p className="text-sm text-red-600 mt-1">{errors.type}</p>
              )}
            </label>
          </div>

          {/* Project Location */}
          <div className="mt-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Project Location <span className="text-red-600">*</span>
              </span>
              <input
                name="projectLocation"
                value={form.projectLocation}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="City / Area / Site address"
                className={`${inputBase} w-full ${
                  errors.projectLocation && touched.projectLocation
                    ? inputError
                    : "border-gray-300"
                }`}
              />
              {errors.projectLocation && touched.projectLocation && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.projectLocation}
                </p>
              )}
            </label>
          </div>

          {/* COMMERCIAL SECTION */}
          {form.type === "commercial" && (
            <section className="mt-6">
              <h4 className="font-semibold mb-2">Commercial Details</h4>

              {/* Space Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">
                    Type of Commercial Space
                  </span>
                  <select
                    name="commercialSpaceType"
                    value={form.commercialSpaceType}
                    onChange={handleChange}
                    className={`${inputBase} border-gray-300`}
                  >
                    <option value="">Select</option>
                    {commercialSpaceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                {form.commercialSpaceType === "Other" && (
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800 mb-2">
                      Please specify
                    </span>
                    <input
                      name="commercialSpaceTypeOther"
                      value={form.commercialSpaceTypeOther}
                      onChange={handleChange}
                      className={`${inputBase} border-gray-300`}
                    />
                  </label>
                )}
              </div>

              {/* Scope */}
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-800 mb-2 block">
                  Scope of Work
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {commercialScopeOptions.map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="scope_commercial"
                        value={opt}
                        checked={form.commercialScope.includes(opt)}
                        onChange={handleChange}
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>

                {form.commercialScope.includes("Other") && (
                  <input
                    name="commercialScopeOther"
                    value={form.commercialScopeOther}
                    onChange={handleChange}
                    placeholder="Please specify other scope..."
                    className={`${inputBase} w-full mt-2 border-gray-300`}
                  />
                )}
              </div>

              {/* Area / Timeline / Site Ready */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">
                    Approx. Area
                  </span>
                  <input
                    name="approxArea"
                    onChange={handleChange}
                    placeholder="e.g. 1200 sqft"
                    className={`${inputBase} border-gray-300`}
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">
                    Timeline / When to start
                  </span>
                  <select name="timeline" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">
                    Is the site ready?
                  </span>
                  <select name="siteReady" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Under construction</option>
                  </select>
                </label>
              </div>
            </section>
          )}

          {/* RESIDENTIAL SECTION */}
          {form.type === "residential" && (
            <section className="mt-6">
              <h4 className="font-semibold mb-2">Residential Details</h4>

              {/* Property Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">
                    Property Type
                  </span>
                  <select
                    name="propertyType"
                    value={form.propertyType}
                    onChange={handleChange}
                    className={`${inputBase} border-gray-300`}
                  >
                    <option value="">Select</option>
                    {residentialPropertyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                {form.propertyType === "Others" && (
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800 mb-2">Please specify</span>
                    <input
                      name="propertyTypeOther"
                      value={form.propertyTypeOther}
                      onChange={handleChange}
                      className={`${inputBase} border-gray-300`}
                    />
                  </label>
                )}
              </div>

              {/* Scope */}
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-800 mb-2 block">
                  Scope of Work
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {residentialScopeOptions.map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="scope_residential"
                        value={opt}
                        checked={form.residentialScope.includes(opt)}
                        onChange={handleChange}
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>

                {form.residentialScope.includes("Other") && (
                  <input
                    name="residentialScopeOther"
                    value={form.residentialScopeOther}
                    onChange={handleChange}
                    placeholder="Please specify other scope..."
                    className={`${inputBase} w-full mt-2 border-gray-300`}
                  />
                )}
              </div>

              {/* Area / Timeline / Site Ready */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Approx. Area</span>
                  <input name="approxAreaResidential" onChange={handleChange} placeholder="e.g. 1200 sqft" className={`${inputBase} border-gray-300`} />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Timeline / When to start</span>
                  <select name="timelineResidential" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Is the site ready?</span>
                  <select name="siteReadyResidential" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Under construction</option>
                  </select>
                </label>
              </div>
            </section>
          )}

          {/* FNB SECTION */}
          {form.type === "fnb" && (
            <section className="mt-6">
              <h4 className="font-semibold mb-2">F&B Details</h4>

              {/* FNB Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Type of F&B Establishment</span>
                  <select name="fnbType" value={form.fnbType} onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    {fnbTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </label>

                {form.fnbType === "Others" && (
                  <input
                    name="fnbTypeOther"
                    value={form.fnbTypeOther}
                    onChange={handleChange}
                    placeholder="Please specify..."
                    className={`${inputBase} border-gray-300`}
                  />
                )}
              </div>

              {/* Scope */}
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-800 mb-2 block">Scope of Work</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {fnbScopeOptions.map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="scope_fnb"
                        value={opt}
                        checked={form.fnbScope.includes(opt)}
                        onChange={handleChange}
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>

                {form.fnbScope.includes("Other") && (
                  <input
                    name="fnbScopeOther"
                    value={form.fnbScopeOther}
                    onChange={handleChange}
                    placeholder="Specify other scope..."
                    className={`${inputBase} w-full mt-2 border-gray-300`}
                  />
                )}
              </div>

              {/* Area / Timeline / Site Ready */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Approx. Area</span>
                  <input name="approxAreaFnb" onChange={handleChange} placeholder="e.g. 100 sqm" className={`${inputBase} border-gray-300`} />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Timeline / When to start</span>
                  <select name="timelineFnb" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 mb-2">Is the site ready?</span>
                  <select name="siteReadyFnb" onChange={handleChange} className={`${inputBase} border-gray-300`}>
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Under construction</option>
                  </select>
                </label>
              </div>
            </section>
          )}

          {/* MESSAGE / REQUIREMENTS */}
          <div className="mt-6">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Message / Requirements <span className="text-red-600">*</span>
              </span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                placeholder="Tell us about your project..."
                className={`rounded-lg border p-3 text-gray-800 focus:outline-none focus:ring-2 w-full ${
                  errors.message && touched.message ? inputError : "border-gray-300"
                }`}
              />

              {errors.message && touched.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message}</p>
              )}
            </label>
          </div>

          {/* ATTACHMENTS */}
          <div className="mt-6">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-800 mb-2">
                Upload Files (Optional)
              </span>

              <input
                type="file"
                name="attachments"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    attachments: Array.from(e.target.files),
                  }))
                }
                className="w-full border border-gray-300 rounded-lg p-3 bg-white cursor-pointer file:mr-4 
                          file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300
                          file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />

              <p className="text-xs text-gray-500 mt-1">
                Supported formats: PDF, JPG, PNG, DOC (Max 10MB each)
              </p>

              {form.attachments.length > 0 && (
                <ul className="mt-2 pl-4 list-disc text-sm text-gray-700">
                  {form.attachments.map((file, i) => (
                    <li key={i}>{file.name}</li>
                  ))}
                </ul>
              )}
            </label>
          </div>

          {/* Footer Buttons */}
          <div className="border-t border-gray-300 p-4 bg-white flex justify-end gap-3 mt-4">
            <button type="button" onClick={closeQuote} className="h-10 px-4 rounded-lg font-medium border border-gray-300">
              Cancel
            </button>

            <button type="submit" className="h-10 px-6 rounded-lg font-bold text-white bg-brand-ocean-blue hover:bg-brand-ocean-blue/90 shadow">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
