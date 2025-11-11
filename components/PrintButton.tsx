"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface PrintButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function PrintButton({ contentRef }: PrintButtonProps) {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "Iform Period",
    pageStyle: `
      @page {
        size: A4;
        margin: 12mm;
      }
      
      @media print {
        html, body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
          height: auto;
          overflow: visible;
        }

        /* Bakgrundsbild som syns på varje sida */
        .print-background-image {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: -1 !important;
          pointer-events: none !important;
        }

        .print-background-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        /* Dölj element som inte ska printas */
        .no-print {
          display: none !important;
        }

        /* Titelsida - tar upp hela första sidan */
        .print-title-page {
          page-break-after: always !important;
          break-after: always !important;
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
        }

        /* Titelsidans bild - större i print */
        .title-page-image {
          height: 400px !important;
          border-radius: 0 0 8px 8px !important;
          margin-bottom: 3rem !important;
        }

        .print-title-page h1,
        .print-title-page h2,
        .print-title-page h3 {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        /* Undvik sidbrytningar i containers */
        .print-avoid-break {
          page-break-inside: avoid;
          break-inside: avoid;
          page-break-after: auto;
          break-after: auto;
        }
        
        /* Ett recept per sida - viktigt att detta är specifikt! */
        .print-recipe-card {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          page-break-after: always !important;
          break-after: always !important;
          page-break-before: auto;
          break-before: auto;
          display: block;
          position: relative;
          width: 100%;
          margin-bottom: 0;
        }
        
        /* Ta bort page-break-after från sista receptet */
        .print-recipe-card:last-child {
          page-break-after: auto !important;
          break-after: auto !important;
        }
        
        /* Skala ner recept för att passa på sidan */
        .print-recipe-card > div {
          transform: scale(0.90);
          transform-origin: top left;
          width: 111%;
          margin-bottom: 1rem;
        }
        
        /* Optimera receptkort för print */
        .print-recipe-card > div > div {
          box-shadow: none !important;
          border: 1px solid #e5e7eb;
        }
        
        /* Se till att bilder printas korrekt */
        img {
          page-break-inside: avoid;
          break-inside: avoid;
          max-width: 100%;
          height: auto;
        }
        
        /* Behåll färger och bakgrunder */
        * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
        }
        
        /* Justera containers */
        .print-content {
          margin: 0;
          padding: 0;
          max-width: 100%;
          position: relative;
          z-index: 1;
        }

        /* Se till att allt innehåll är ovanför bakgrunden */
        .print-content > * {
          position: relative;
          z-index: 2;
        }
        
        .container {
          max-width: 100% !important;
          padding: 0 !important;
        }
        
        /* Kategorirubrik */
        .print-category-header {
          page-break-after: avoid;
          break-after: avoid;
          margin-top: 0;
          padding-top: 0;
        }
        
        /* Grid ska vara 1 kolumn vid print */
        .grid {
          display: block !important;
        }
        
        /* Tabeller ska inte brytas */
        table {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        tr {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        /* Header och footer bilder */
        .print-content > div:first-child {
          page-break-after: avoid;
          break-after: avoid;
          margin-bottom: 2rem;
        }
        
        /* Footer bild - sista elementet */
        .print-content > div:nth-last-child(2) {
          page-break-before: auto;
          break-before: auto;
          margin-top: 2rem;
        }
      }
    `,
  });

  return (
    <button
      onClick={() => handlePrint()}
      className="no-print px-6 py-3 bg-white text-accent-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
      Spara som PDF
    </button>
  );
}

