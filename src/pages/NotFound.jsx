import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="w-full max-w-xl rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-xl p-8 text-center animate-[fadeIn_.35s_ease-out]">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-ocean-blue/10 text-brand-ocean-blue">
          <span className="material-symbols-outlined text-4xl">error</span>
        </div>
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900">404</h1>
        <p className="mt-3 text-lg font-semibold text-gray-800">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="mt-2 text-gray-600">
          The link may be broken, or the page may have been moved.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto rounded-lg h-11 px-6 bg-brand-ocean-blue text-white font-semibold inline-flex items-center justify-center transition-transform hover:scale-[1.02]"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto rounded-lg h-11 px-6 ring-2 ring-brand-ocean-blue text-brand-ocean-blue font-semibold inline-flex items-center justify-center transition-colors hover:bg-brand-ocean-blue/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

