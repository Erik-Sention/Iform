"use client";

import { useState, useRef, useMemo } from "react";
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
import RecipeSelector from "@/components/RecipeSelector";
import { useImagePreloader } from "@/hooks/useImagePreloader";

interface PeriodContentProps {
  initialData: PeriodData;
}

export default function PeriodContent({ initialData }: PeriodContentProps) {
  const [data, setData] = useState<PeriodData>(initialData);
  const printRef = useRef<HTMLDivElement>(null);
  
  // State för valda recept - initialt är alla valda
  const [selectedRecipes, setSelectedRecipes] = useState<Set<string>>(
    new Set(initialData.recipes.map((r) => r.id))
  );

  const handleDataLoaded = (uploadedData: Partial<PeriodData>) => {
    setData((prev) => ({
      ...prev,
      ...uploadedData,
      clients: uploadedData.clients || prev.clients,
      metrics: uploadedData.metrics || prev.metrics,
      recipes: uploadedData.recipes || prev.recipes,
    }));
    
    // När ny data laddas, välj alla recept som default
    if (uploadedData.recipes) {
      setSelectedRecipes(new Set(uploadedData.recipes.map((r) => r.id)));
    }
  };

  // Filtrera recept baserat på vad som är valt
  const recipesA = data.recipes
    .filter((r) => r.category === "A" && selectedRecipes.has(r.id));
  const recipesB = data.recipes
    .filter((r) => r.category === "B" && selectedRecipes.has(r.id));

  // Samla alla bild-URLs som behöver laddas för PDF (bara valda recept)
  const imageUrls = useMemo(() => {
    const staticImages = [
      "/images/AktivtusBackgroundGrey.png",
      "/images/Aktivitus_Article_HälsaOPrestation.png",
      "/images/Aktivitus-Blue.png",
    ];

    // Lägg till bara bilder för valda recept
    const recipeImages = data.recipes
      .filter((recipe) => selectedRecipes.has(recipe.id))
      .map((recipe) => recipe.image)
      .filter((image): image is string => Boolean(image));

    return [...staticImages, ...recipeImages];
  }, [data.recipes, selectedRecipes]);

  // Använd image preloader hook
  const { allImagesLoaded, loadingProgress } = useImagePreloader(imageUrls);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F7F5F2' }}>
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
            printButton={
              <PrintButton 
                contentRef={printRef} 
                imagesLoaded={allImagesLoaded}
                loadingProgress={loadingProgress}
              />
            }
          />
        </div>

        <div className="no-print">
          <RecipeSelector
            recipes={data.recipes}
            selectedRecipes={selectedRecipes}
            onSelectionChange={setSelectedRecipes}
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
            <WeekSchedule schedule={data.schedule} weeks={data.weeks} />
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

          {recipesA.length > 0 && (
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
          )}

          {recipesB.length > 0 && (
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
          )}

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
