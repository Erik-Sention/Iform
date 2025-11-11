'use client';

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/AuthProvider";

export default function HomePage() {
  const { logout } = useAuth();
  const periods = [
    { id: 1, enabled: true },
    { id: 2, enabled: true },
    { id: 3, enabled: true },
    { id: 4, enabled: true },
    { id: 5, enabled: true },
  ];

  return (
    <main 
      className="min-h-screen relative"
      style={{ backgroundColor: '#F7F5F2' }}
    >
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-end mb-4">
            <button
              onClick={logout}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
            >
              Logga ut
            </button>
          </div>
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/Aktivitus-Blue.png"
              alt="Aktivitus"
              width={300}
              height={100}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            IForm
          </h1>
          <p className="text-xl text-gray-700">
            Välj vilken period du vill skapa en PDF för
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {periods.map((period) => (
              <div key={period.id}>
                {period.enabled ? (
                  <Link
                    href={`/period/${period.id}`}
                    className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent-500"
                  >
                    <div className="text-center">
                      <div className="text-6xl font-bold text-accent-600 mb-2">
                        {period.id}
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        Period {period.id}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="block p-8 bg-gray-100 rounded-2xl shadow-sm border-2 border-gray-200 opacity-50 cursor-not-allowed">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-400 mb-2">
                        {period.id}
                      </div>
                      <div className="text-lg font-semibold text-gray-500">
                        Period {period.id}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        Kommer snart
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}




