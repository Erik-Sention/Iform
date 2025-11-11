import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Perioden hittades inte eller är inte implementerad ännu
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Tillbaka till start
        </Link>
      </div>
    </main>
  );
}




