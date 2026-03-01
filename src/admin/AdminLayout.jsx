import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";

export default function AdminLayout({ children }) {
  const { user, logout } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex bg-brand-light-gray">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-soft flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">Zayken Admin</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <AdminNavLink
            to="/admin/projects"
            active={location.pathname.startsWith("/admin/projects")}
          >
            Projects
          </AdminNavLink>
          <AdminNavLink
            to="/admin/settings"
            active={location.pathname.startsWith("/admin/settings")}
          >
            Settings
          </AdminNavLink>
        </nav>
        <div className="px-4 py-4 border-t border-gray-200 text-sm text-gray-600 flex items-center justify-between">
          <span className="truncate">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="ml-2 rounded-md border border-gray-300 px-2 py-1 text-xs font-semibold hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

function AdminNavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`block rounded-md px-3 py-2 text-sm font-medium ${
        active
          ? "bg-brand-ocean-blue text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
}

