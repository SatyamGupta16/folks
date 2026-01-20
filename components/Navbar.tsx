import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Code<span className="text-orange-500">Guild</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/questions">Question Tracker</Link>
          <Link href="/company-kit">Company Wise Kit</Link>
          <Link href="/events">Event Tracker</Link>
          <Link href="/profile">Profile Tracker</Link>
        </div>

        {/* Login */}
        <Link
          href="/login"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}
