import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10 text-center">

      {/* Top line */}
      <p className="text-5xl font-bold text-gray-600">
        Track, analyze and improve
      </p>

      {/* Main heading */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">
          Code<span className="text-orange-500">Guild</span> helps you to navigate & track
        </h1>
        <p className="mt-2 text-3xl font-bold text-gray-600">
          your coding journey to success.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        {/* Profile Tracker */}
        <Link
          href="/profile"
          className="rounded-xl border-2 border-gray-200 px-6 py-3 text-lg font-semibold text-black hover:bg-gray-100 transition"
        >
          Profile Tracker
        </Link>

        {/* Company Wise Kit */}
        <Link
          href="/company-kit"
          className="rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white hover:bg-orange-600 transition flex items-center gap-2"
        >
          Company-Wise Kit <span>→</span>
        </Link>
      </div>

    </main>
  );
}
