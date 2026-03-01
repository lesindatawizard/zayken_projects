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

  if (loading) {
    return <div className="text-sm text-gray-600">Loading settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-xl">
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
    </div>
  );
}

