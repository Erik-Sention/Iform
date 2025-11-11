"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PeriodData } from "@/types";
import { period1Data } from "@/data/period1";
import HeaderCard from "@/components/HeaderCard";
import InfoSection from "@/components/InfoSection";
import WeekSchedule from "@/components/WeekSchedule";
import RecipeCard from "@/components/RecipeCard";
import SnacksSection from "@/components/SnacksSection";
import ExcelUploader from "@/components/ExcelUploader";
import PrintButton from "@/components/PrintButton";

interface PeriodContentProps {
  initialData: PeriodData;
}

export default function PeriodContent({ initialData }: PeriodContentProps) {
  const [data, setData] = useState<PeriodData>(initialData);
  const printRef = useRef<HTMLDivElement>(null);

  const handleDataLoaded = (uploadedData: Partial<PeriodData>) => {
    setData((prev) => ({
      ...prev,
      ...uploadedData,
      clients: uploadedData.clients || prev.clients,
      metrics: uploadedData.metrics || prev.metrics,
      recipes: uploadedData.recipes || prev.recipes,
    }));
  };

  const recipesA = data.recipes.filter((r) => r.category === "A");
  const recipesB = data.recipes.filter((r) => r.category === "B");

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-8 no-print">
          <Link
            href="/"
            className="inline-flex items-center text-accent-700 font-semibold hover:text-accent-800 transition-colors"
          >
            ← Tillbaka till start
          </Link>
        </div>

        <div className="no-print">
          <ExcelUploader 
            onDataLoaded={handleDataLoaded} 
            currentRecipes={data.recipes}
            printButton={<PrintButton contentRef={printRef} />}
          />
        </div>

        <div ref={printRef} className="print-content relative">
          {/* Background image för PDF - måste vara <img> för att synas i PDF */}
          <div className="print-background-image">
            <Image
              src="/images/AktivtusBackgroundGrey.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Titelsida med bild */}
          <div className="print-title-page mb-8">
            <div className="title-page-image relative w-full h-64 md:h-80 rounded-b-md overflow-hidden shadow-lg mb-12">
              <Image
                src="/images/Aktivitus_Article_HälsaOPrestation.png"
                alt="Aktivitus IForm"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-16">
              <div className="relative w-96 h-32 mb-6">
                <Image
                  src="/images/Aktivitus-Blue.png"
                  alt="Aktivitus"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              <h2 className="text-6xl font-semibold text-gray-700 mb-8">Iform</h2>
              <h3 className="text-5xl font-medium text-gray-600">Period {data.periodId}</h3>
            </div>
          </div>

          <div className="print-avoid-break">
            <HeaderCard
              title={data.title}
              weeks={data.weeks}
              clients={data.clients}
              metrics={data.metrics}
            />
          </div>

          <div className="print-avoid-break">
            <InfoSection info={data.info} />
          </div>

          <div className="print-avoid-break">
            <WeekSchedule schedule={data.schedule} />
          </div>

          <div className="print-avoid-break mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Morgonmål för perioden:
                </h3>
                <p className="text-gray-800">{data.morningMeal}</p>
              </div>
            </div>
          </div>

          <div className="print-avoid-break">
            <SnacksSection 
              snacks={data.snacks} 
              client1Name={data.clients[0].name}
              client2Name={data.clients[1].name}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 print-category-header">
              Måltider kategori A
            </h2>
            <div className="grid md:grid-cols-2 print:grid-cols-1 gap-6">
              {recipesA.map((recipe) => (
                <div key={recipe.id} className="print-recipe-card">
                  <RecipeCard 
                    recipe={recipe}
                    client1Name={data.clients[0].name}
                    client2Name={data.clients[1].name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 print-category-header">
              Måltider kategori B
            </h2>
            <div className="grid md:grid-cols-2 print:grid-cols-1 gap-6">
              {recipesB.map((recipe) => (
                <div key={recipe.id} className="print-recipe-card">
                  <RecipeCard 
                    recipe={recipe}
                    client1Name={data.clients[0].name}
                    client2Name={data.clients[1].name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Image */}
          <div className="mt-12 mb-8 print-avoid-break">
            <div className="flex justify-center">
              <div className="relative w-64 h-16">
                <Image
                  src="/images/Aktivitus-Blue.png"
                  alt="Aktivitus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8 no-print">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Tillbaka till start
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
