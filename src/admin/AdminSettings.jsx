import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const initialForm = {
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
};

export default function AdminSettings() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedPage, setSelectedPage] = useState("home");
  const [selectedField, setSelectedField] = useState("heroImage");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [savingImageUrl, setSavingImageUrl] = useState(false);
  const [imageMessage, setImageMessage] = useState("");
  const [pageImages, setPageImages] = useState({});

  useEffect(() => {
    const settingsRef = doc(db, "siteSettings", "social");

    async function loadSettings() {
      setError("");
      try {
        const snapshot = await getDoc(settingsRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setForm({
            facebookUrl: data.facebookUrl || "",
            instagramUrl: data.instagramUrl || "",
            linkedinUrl: data.linkedinUrl || "",
          });
        }
      } catch (err) {
        console.error("Failed to load social settings", err);
        setError(err?.message || "Failed to load social media settings.");
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  useEffect(() => {
    async function loadPageImages() {
      const pageIds = ["home", "about", "services", "projects", "contact"];
      const next = {};
      await Promise.all(
        pageIds.map(async (id) => {
          const snapshot = await getDoc(doc(db, "pageImages", id));
          next[id] = snapshot.exists() ? snapshot.data() : {};
        })
      );
      setPageImages(next);
    }
    loadPageImages();
  }, [imageMessage]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const settingsRef = doc(db, "siteSettings", "social");
      await setDoc(
        settingsRef,
        {
          facebookUrl: form.facebookUrl.trim(),
          instagramUrl: form.instagramUrl.trim(),
          linkedinUrl: form.linkedinUrl.trim(),
        },
        { merge: true }
      );
      setSuccess("Social media links saved.");
    } catch (err) {
      console.error("Failed to save social settings", err);
      setError(err?.message || "Failed to save social media settings.");
    } finally {
      setSaving(false);
    }
  }

  const pageFieldOptions = {
    home: [
      { value: "heroImage", label: "Hero Image" },
      { value: "aboutImage", label: "About Section Image" },
    ],
    about: [
      { value: "heroImage", label: "Hero Image" },
      { value: "whoWeAreImage", label: "Who We Are Image" },
    ],
    services: [{ value: "heroImage", label: "Hero Image" }],
    projects: [{ value: "heroImage", label: "Hero Image" }],
    contact: [{ value: "heroImage", label: "Hero Image" }],
  };

  useEffect(() => {
    const first = pageFieldOptions[selectedPage][0]?.value;
    setSelectedField(first || "heroImage");
  }, [selectedPage]);

  async function handleImageUrlSave(e) {
    e.preventDefault();
    const imageUrl = imageUrlInput.trim();
    if (!imageUrl) {
      setImageMessage("Please enter an image URL.");
      return;
    }

    setSavingImageUrl(true);
    setImageMessage("");
    try {
      await setDoc(
        doc(db, "pageImages", selectedPage),
        { [selectedField]: imageUrl },
        { merge: true }
      );

      setImageUrlInput("");
      setImageMessage("Image URL saved successfully.");
    } catch (err) {
      console.error("Saving image URL failed", err);
      setImageMessage(err?.message || "Failed to save image URL.");
    } finally {
      setSavingImageUrl(false);
    }
  }

  if (loading) {
    return <div className="text-sm text-gray-600">Loading settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>

      <section className="rounded-xl bg-white p-4 shadow-soft">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Social Media Links
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Facebook URL
            </label>
            <input
              type="url"
              name="facebookUrl"
              value={form.facebookUrl}
              onChange={handleChange}
              placeholder="https://facebook.com/your-page"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Instagram URL
            </label>
            <input
              type="url"
              name="instagramUrl"
              value={form.instagramUrl}
              onChange={handleChange}
              placeholder="https://instagram.com/your-handle"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              LinkedIn URL
            </label>
            <input
              type="url"
              name="linkedinUrl"
              value={form.linkedinUrl}
              onChange={handleChange}
              placeholder="https://linkedin.com/company/your-company"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-brand-ocean-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </form>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-soft">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Page Images</h2>
        <form onSubmit={handleImageUrlSave} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Page</label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
              >
                <option value="home">home</option>
                <option value="about">about</option>
                <option value="services">services</option>
                <option value="projects">projects</option>
                <option value="contact">contact</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Section Image</label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
              >
                {pageFieldOptions[selectedPage].map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={imageUrlInput}
              onChange={(e) => setImageUrlInput(e.target.value)}
              placeholder="https://example.com/banner.jpg"
              className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
            />
          </div>

          {pageImages[selectedPage]?.[selectedField] && (
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="mb-2 text-xs text-gray-600">Current image</p>
              <img
                src={pageImages[selectedPage][selectedField]}
                alt="Current page section"
                className="h-32 w-full rounded object-cover"
              />
            </div>
          )}

          {imageMessage && <p className="text-sm text-gray-700">{imageMessage}</p>}

          <button
            type="submit"
            disabled={savingImageUrl}
            className="rounded-lg bg-brand-ocean-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-60"
          >
            {savingImageUrl ? "Saving..." : "Save image URL"}
          </button>
        </form>
      </section>
    </div>
  );
}

