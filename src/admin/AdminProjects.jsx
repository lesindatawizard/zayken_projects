import { useEffect, useMemo, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const initialForm = {
  title: "",
  category: "",
  order: 0,
  featured: false,
  imageUrl: "",
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const projectsRef = collection(db, "projects");
    const unsubscribe = onSnapshot(
      projectsRef,
      (snapshot) => {
        const items = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setProjects(items);
      },
      (err) => {
        console.error(err);
        setError("Failed to load projects from Firestore.");
      }
    );

    return () => unsubscribe();
  }, []);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const ao = typeof a.order === "number" ? a.order : 0;
      const bo = typeof b.order === "number" ? b.order : 0;
      return ao - bo;
    });
  }, [projects]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "order") {
      setForm((prev) => ({ ...prev, [name]: Number(value) || 0 }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function resetForm() {
    setForm(initialForm);
    setEditingId(null);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      if (!form.title || !form.category) {
        throw new Error("Title and category are required.");
      }

      if (editingId) {
        const docRef = doc(db, "projects", editingId);
        await updateDoc(docRef, {
          title: form.title,
          category: form.category,
          order: form.order,
          featured: form.featured,
          imageUrl: form.imageUrl || "",
        });
      } else {
        await addDoc(collection(db, "projects"), {
          title: form.title,
          category: form.category,
          order: form.order,
          featured: form.featured,
          createdAt: serverTimestamp(),
          imageUrl: form.imageUrl || "",
        });
      }

      resetForm();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to save project.");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(project) {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      category: project.category || "",
      order: typeof project.order === "number" ? project.order : 0,
      featured: !!project.featured,
      imageUrl: project.imageUrl || "",
    });
  }

  async function handleDelete(projectId) {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteDoc(doc(db, "projects", projectId));
      if (editingId === projectId) {
        resetForm();
      }
    } catch (err) {
      console.error(err);
      setError("Failed to delete project.");
    }
  }

  async function handleSeedSample() {
    try {
      const residentialImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGCKNY6vMtJeX_F2tFLzbOHQ-Dr--7VQpx2o2-eLdyA_PRVpTEFHoOAwrGMXP-mxhh8X51bp3F0JixJVMmtaZ8eqndVQFb0-eQkGviR1YHTGZWkBLZLfLkLFJM1rvNRn9yzhGCvT0txLg7HSFPHulLJh1L8TbudI_G6QrrLUOzDHqiMB95SrjIfid0gsNeABn7cUG-WcFUtpIY6Fh7DIaSqslaGilr0zoaRiqawPNiMaFgtkEjzDeH09jgKWSXjGqQeprgJXZE43d-";
      const bedroomImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDcEIbx3AULUOC7H8vuyFCfMfvt3_ADUShszo3sG-6E7YBOGdpcAQGJ6DtKe59OJmawq0w0Y1Hxq8rGA4IDfDkixmFzjXMXTqnXdTR8TZEoc46F6AhK-z_CigWqsYtOV0i_Um3d8uE_LxKqWw2QSTNLBzeGvtI6Iz43uz01ncgLpgl2sQbxGo3WOEZhID583_KH52VTh-g5tO0w8kYtNVdp6WAAvFQt1DvCe1ZBO-0aVOjncUy_PPhGYqZdUHO9_uONuYfJbIl9mCOv";
      const kitchenImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZF0Ft6dxc3o_9HlwMMEdW1p3oxmmvaW9spo1oKPkFTnuShOSZKBt7dGJfWv9hp-vw2LehnBm_85bLEzLO7Mf2swrNelP2D_spcgvFNAZ2RLAEIb840NslgUeTsvrQDgk06rx9nGZVUHAXemQbnVYlcBFTxBA2zdt2HQeltcXDQSsUXIJOD5WyhyLbGY5khrMogLDvStAJT8L_8PjN8wZk7eCNH8viOd6ZkBbhv3KzHhDzw8D_JSG9eVoaXWk9SwAGaEkogrYhlg-";

      const officeImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAhUR0TFJRd4Bh1-4W6YJ_WKMLKTk27RlYqTK3dyJtcPFjxbtuaZBIoHxt7CGdjoNPToHBgyoCyFFn-g2jSF-ILtsPx1NK8JMA60sS5S8n3UgxYmwSmMQADl8RZ65rQs9KRK9tgOp571PNp9IfOjs5hzPbWhyJIIKDXE7StZaHDWfgaqB5LWRGTyNI58ZUz0ldGBdYUdvti9pbnbHtVRrgbS_vPHPaIQ4i2Bguq0S5la26zxPFtq3HT6v7RyXh1l-tjFPA-THDPonO";
      const restaurantImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD1LfPwq03cO-RTlfKFR7AmC5xK4WKXZ7r_PmkEjqT1EEmXkBLhfkV-hWn6n1Iruwrgpw9L3zr3Yh6aBuPJl1JY1-fMJhlcZpR47p3EybdXCxomBCXdUrSui1O78SnPCzFfG-4JrMLKuOk31E8s47lrk5ZarJ92HaUqwsvUMUDQLjawBpFbLZgJPdJ2NTzpypVCek4I5gdT5cZxfWCizcEVtdy_kGv_OJCXpa1CSPB1pe89oRhH9ZUf_vG0NmFaL9_H2ogABO629QqS";
      const retailImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA11lB96J04Fhz4KfhB7n5bXXpejg9oLsomRZpBhJRyhMp8xASoQ3yVAA78OCgRUJwSNuo56gQL7TJ01sB2Ok7CIxwPkeLbqyK1QZXYWwDwAX8xCKmihNc_vU1It49OD7J8lP3vmxLHOokJybN770ReqMTrbzu3QHPf97EhkP-cPjSTy7AZXmT01Qkj008mJ5A29Ma7LpUJ6Xc_nPezXQ15isCzxd-4qP6HKCXSFr19gIWMcY48RSA-NozoEncg3X1Bx5-dvY1TndeZ";
      const corporateImage =
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBhBuIzevdAHPRoSRyomAOhcJfNlmW1kX1bnOd1ZpX6gHnOOVeX_dhapot9AsigKR5VvbyKlHl7YriJOTnXzW4FWEntIBbH9ecJLmMXMcSdfcqq-BILmpaN3pjynoH6hK7iq_R0qywo7LTmIhYSaxgspedEnabbb9rzqW-Uy79ji6Q9MuzcJ5ST7LH1cEjfVim4Ez1vuGbk6IAер8x6SsV_G-rosgJOZ-cWcSCOzfZ-Pwq5-csVeaHtAHziN1pCIrfK24i_900p5XdS";

      const items = [
        {
          title: "Modern Kitchen",
          category: "Residential",
          imageUrl: residentialImage,
          featured: true,
          order: 1,
        },
        {
          title: "Luxury Bedroom",
          category: "Residential",
          imageUrl: bedroomImage,
          featured: true,
          order: 2,
        },
        {
          title: "Open-Plan Kitchen & Dining",
          category: "Residential",
          imageUrl: kitchenImage,
          featured: true,
          order: 3,
        },
        {
          title: "Office Workspace",
          category: "Commercial",
          imageUrl: officeImage,
          featured: false,
          order: 4,
        },
        {
          title: "Restaurant Interior",
          category: "F&B",
          imageUrl: restaurantImage,
          featured: false,
          order: 5,
        },
        {
          title: "Retail Store",
          category: "Commercial",
          imageUrl: retailImage,
          featured: false,
          order: 6,
        },
        {
          title: "Corporate Office",
          category: "Commercial",
          imageUrl: corporateImage,
          featured: false,
          order: 7,
        },
      ];

      const colRef = collection(db, "projects");
      await Promise.all(
        items.map((item) =>
          addDoc(colRef, {
            ...item,
            createdAt: serverTimestamp(),
          })
        )
      );
    } catch (err) {
      console.error(err);
      setError("Failed to seed sample projects.");
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button
          type="button"
          onClick={handleSeedSample}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Seed sample projects
        </button>
      </div>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1.4fr]">
        {/* List */}
        <div className="rounded-xl bg-white p-4 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Existing projects</h2>
          {sortedProjects.length === 0 ? (
            <p className="text-sm text-gray-600">No projects yet. Use the form to add one or seed samples.</p>
          ) : (
            <ul className="space-y-3">
              {sortedProjects.map((project) => (
                <li
                  key={project.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-12 w-12 rounded object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {project.title}
                      </p>
                      <p className="text-xs text-gray-600">
                        {project.category} · Order {typeof project.order === "number" ? project.order : 0}
                        {project.featured ? " · Featured" : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(project)}
                      className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(project.id)}
                      className="rounded-md border border-red-300 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Form */}
        <div className="rounded-xl bg-white p-4 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            {editingId ? "Edit project" : "Add new project"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
                required
              >
                <option value="">Select category</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="F&B">F&B</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Order</label>
              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                id="featured"
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-brand-ocean-blue focus:ring-brand-ocean-blue"
              />
              <label htmlFor="featured" className="text-sm text-gray-700">
                Featured (show on Home page)
              </label>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-ocean-blue"
                placeholder="https://example.com/your-image.jpg"
              />
              <p className="mt-1 text-xs text-gray-500">
                Paste a full image URL (e.g. from Google Photos or another host).
              </p>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-brand-ocean-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90 disabled:opacity-60"
              >
                {saving ? "Saving..." : editingId ? "Save changes" : "Add project"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Cancel edit
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

