"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { PeriodData, Recipe } from "@/types";

interface ExcelUploaderProps {
  onDataLoaded: (data: Partial<PeriodData>) => void;
  currentRecipes: Recipe[];
  printButton?: React.ReactNode;
}

export default function ExcelUploader({ onDataLoaded, currentRecipes, printButton }: ExcelUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const getCellValue = (worksheet: XLSX.WorkSheet, cellRef: string) => {
    const cell = worksheet[cellRef];
    return cell ? cell.v : "";
  };

  const getCellByRowCol = (worksheet: XLSX.WorkSheet, row: number, col: string) => {
    const cellRef = col + row;
    return getCellValue(worksheet, cellRef);
  };

  const cleanText = (text: any) => {
    if (!text) return "";
    return String(text).trim().replace(/\s+/g, " ");
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setFileName(file.name);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      
      // Hitta rätt sheet (Period 1)
      const sheetName = workbook.SheetNames.find(name => 
        name.toLowerCase().includes('period') || 
        name.toLowerCase().includes('period 1')
      ) || workbook.SheetNames[0];
      
      const worksheet = workbook.Sheets[sheetName];
      
      console.log('📊 Tillgängliga sheets:', workbook.SheetNames);
      console.log('📄 Använder sheet:', sheetName);

      // Extrahera klientdata
      const client1Name = String(getCellValue(worksheet, "C7") || "");
      const client1Vikt = getCellValue(worksheet, "G7");
      const client1Fett = getCellValue(worksheet, "I7");
      
      const client2Name = String(getCellValue(worksheet, "C9") || "");
      const client2Vikt = getCellValue(worksheet, "G9");
      const client2Fett = getCellValue(worksheet, "I9");
      
      console.log('👤 Klient 1:', { name: client1Name, vikt: client1Vikt, fett: client1Fett });
      console.log('👤 Klient 2:', { name: client2Name, vikt: client2Vikt, fett: client2Fett });
      
      const clients = [
        {
          name: client1Name,
          viktKg: Number(client1Vikt) || 0,
          fettProcent: Number(client1Fett) || 0,
        },
        {
          name: client2Name,
          viktKg: Number(client2Vikt) || 0,
          fettProcent: Number(client2Fett) || 0,
        },
      ];

      // Extrahera metrics
      const metrics = {
        fruktKcalPerDag: [
          Number(getCellValue(worksheet, "I51")) || 0,
          Number(getCellValue(worksheet, "K51")) || 0,
        ] as [number, number],
        friaKcalPerVecka: [
          Number(getCellValue(worksheet, "I53")) || 0,
          Number(getCellValue(worksheet, "K53")) || 0,
        ] as [number, number],
        extraKHInforHI: [
          Number(getCellValue(worksheet, "I60")) || 0,
          Number(getCellValue(worksheet, "K60")) || 0,
        ] as [number, number],
        KHUnderLangtPass: [
          Number(getCellValue(worksheet, "I62")) || 0,
          Number(getCellValue(worksheet, "K62")) || 0,
        ] as [number, number],
      };

      // Extrahera recept med individuella portioner
      const recipesConfig = [
        { id: "A1", row: 155, ingredientRows: [157, 158, 159, 160, 161, 162, 163, 164] },
        { id: "A2", row: 168, ingredientRows: [170, 171, 172, 173, 174, 175] },
        { id: "A3", row: 181, ingredientRows: [183, 184, 185, 186, 187, 188] },
        { id: "A4", row: 194, ingredientRows: [196, 197, 198, 199, 200, 201, 202, 203] },
        { id: "A5", row: 207, ingredientRows: [209, 210, 211, 212, 213, 214, 215, 216, 217, 218] },
        { id: "A6", row: 220, ingredientRows: [222, 223, 224, 225, 226, 227] },
        { id: "A7", row: 233, ingredientRows: [235, 236, 237, 238, 239, 240, 241] },
        { id: "A8", row: 246, ingredientRows: [248, 249, 250, 251, 252, 253, 254] },
        { id: "B1", row: 264, ingredientRows: [266, 267, 268, 269, 270, 271, 272] },
        { id: "B2", row: 277, ingredientRows: [279, 280, 281, 282] },
        { id: "B3", row: 289, ingredientRows: [292, 293, 294, 295, 296] },
        { id: "B4", row: 303, ingredientRows: [305, 306, 307, 308, 309, 310] },
        { id: "B5", row: 316, ingredientRows: [318, 319, 320, 321, 322, 323, 324] },
        { id: "B6", row: 329, ingredientRows: [331, 332, 333, 334] },
        { id: "B7", row: 342, ingredientRows: [344, 345, 346, 347, 348, 349, 350] },
      ];

      const imageMap: Record<string, string> = {
        A1: "/images/recipies/a1.png",
        A2: "/images/recipies/a2.png",
        A3: "/images/recipies/a3.png",
        A4: "/images/recipies/a4.png",
        A5: "/images/recipies/a5.png",
        A6: "/images/recipies/a6.png",
        A7: "/images/recipies/a7.png",
        A8: "/images/recipies/a8.png",
      };

      const recipes = recipesConfig
        .map((config) => {
          // Hitta befintligt recept för att behålla namn, titel, steps, image
          const existingRecipe = getExistingRecipe(config.id);
          
          if (!existingRecipe) {
            return null;
          }

          // Uppdatera BARA grammen från Excel-filen
          const updatedIngredients = existingRecipe.ingredients.map((ingredient, idx) => {
            const row = config.ingredientRows[idx];
            if (!row) return ingredient; // Om ingen rad finns, behåll som den är
            
            return {
              ...ingredient, // Behåll namn och allt annat
              p1: Number(getCellByRowCol(worksheet, row, "N")) || ingredient.p1,
              p2: Number(getCellByRowCol(worksheet, row, "O")) || ingredient.p2,
              tot: Number(getCellByRowCol(worksheet, row, "P")) || ingredient.tot,
            };
          });

          return {
            ...existingRecipe, // Behåll allt (id, title, category, steps, image)
            ingredients: updatedIngredients, // Bara uppdatera ingrediens-grammen
          };
        })
        .filter((recipe): recipe is Recipe => recipe !== null);

      // Extrahera mellanmål (kolumner F, G, H)
      const snacksA = [
        { name: "Kvarg lätt", p1: Number(getCellByRowCol(worksheet, 363, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 363, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 363, "H")) || 0 },
        { name: "Keso mini", p1: Number(getCellByRowCol(worksheet, 364, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 364, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 364, "H")) || 0 },
        { name: "Ägg kokt 1st", p1: Number(getCellByRowCol(worksheet, 365, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 365, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 365, "H")) || 0 },
        { name: "Tonfisk i vatten", p1: Number(getCellByRowCol(worksheet, 366, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 366, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 366, "H")) || 0 },
      ];

      const snacksB = [
        { name: "Jordnötssmör", p1: Number(getCellByRowCol(worksheet, 372, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 372, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 372, "H")) || 0 },
        { name: "Nötblandning/fröblandning*", p1: Number(getCellByRowCol(worksheet, 373, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 373, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 373, "H")) || 0 },
        { name: "Avokado", p1: Number(getCellByRowCol(worksheet, 374, "F")) || 0, p2: Number(getCellByRowCol(worksheet, 374, "G")) || 0, tot: Number(getCellByRowCol(worksheet, 374, "H")) || 0 },
      ];

      console.log('🍎 Mellanmål kategori A:', snacksA);
      console.log('🥜 Mellanmål kategori B:', snacksB);

      // Skicka tillbaka extraherad data
      onDataLoaded({
        clients: clients as [any, any],
        metrics,
        recipes,
        snacks: {
          A: snacksA,
          B: snacksB,
        },
      });
    } catch (error) {
      console.error("Fel vid inläsning av Excel-fil:", error);
      alert("Kunde inte läsa Excel-filen. Kontrollera att filen har rätt format.");
    } finally {
      setIsUploading(false);
    }
  };

  // Hjälpfunktion för att få befintliga recept från current data
  const getExistingRecipe = (id: string) => {
    return currentRecipes.find(recipe => recipe.id === id);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-accent-600 text-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">📊 Ladda upp kunddata</h3>
          {fileName ? (
            <div className="text-blue-50 text-sm space-y-1">
              <p className="font-semibold">✅ Fil uppladdad: {fileName}</p>
              <p>Tryck nu på <span className="font-semibold">Spara som PDF</span> för att skapa en PDF som du kan dela med din kund</p>
              <p>Döp filen till: <span className="font-semibold">Iform [Klient1] [Klient2] ååmmdd</span></p>
            </div>
          ) : (
            <div className="text-blue-50 text-sm space-y-1">
              <p>1. Ladda upp din kunds Excel-fil för att fylla i all kundspecifik data automatiskt</p>
              <p>2. Tryck därefter på <span className="font-semibold">Spara som PDF</span> för att skapa en PDF som du kan dela med din kund</p>
              <p>3. Döp filen till: <span className="font-semibold">Iform [Klient1] [Klient2] ååmmdd</span></p>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 flex items-center gap-3">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
            <div className="px-6 py-3 bg-white text-accent-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
              {isUploading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Läser in...
                </>
              ) : (
                <>
                  📁 Välj Excel-fil
                </>
              )}
            </div>
          </label>
          {printButton}
        </div>
      </div>
    </div>
  );
}

