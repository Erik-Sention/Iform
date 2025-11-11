"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseImagePreloaderResult {
  allImagesLoaded: boolean;
  loadingProgress: number;
}

/**
 * Hook för att preloada bilder och spåra deras laddningsstatus
 * Optimerad för cachade bilder och snabb laddning
 * @param imageUrls - Array av bild-URLs att ladda
 * @returns Object med allImagesLoaded (boolean) och loadingProgress (0-100)
 */
export function useImagePreloader(imageUrls: string[]): UseImagePreloaderResult {
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const preloadImages = useCallback(() => {
    // Filtrera bort tomma eller duplicerade URLs
    const uniqueUrls = Array.from(new Set(imageUrls.filter(Boolean)));
    
    if (uniqueUrls.length === 0) {
      setTotalCount(0);
      setLoadedCount(0);
      return;
    }

    setTotalCount(uniqueUrls.length);
    setLoadedCount(0);

    let loaded = 0;
    let cachedCount = 0;

    uniqueUrls.forEach((url) => {
      const img = new Image();
      let hasLoaded = false;

      // Sätt upp event listeners innan vi sätter src
      img.onload = () => {
        if (hasLoaded) return; // Undvik dubbel-räkning
        hasLoaded = true;
        loaded++;
        setLoadedCount(loaded);
      };

      img.onerror = () => {
        if (hasLoaded) return; // Undvik dubbel-räkning
        hasLoaded = true;
        console.warn(`⚠️ Kunde inte ladda bild: ${url}`);
        // Räkna fortfarande som "laddad" för att inte blockera användaren
        loaded++;
        setLoadedCount(loaded);
      };

      // Starta laddning
      img.src = url;

      // ⚡ OPTIMERING: Cache-detection
      // Om bilden redan är laddad (cachad), trigga onload manuellt
      // eftersom vissa browsers inte triggar onload för cachade bilder
      if (img.complete && img.naturalWidth > 0) {
        cachedCount++;
        // Trigga onload synkront om bilden är cachad
        if (!hasLoaded) {
          hasLoaded = true;
          loaded++;
          setLoadedCount(loaded);
        }
      }
    });

    if (cachedCount > 0) {
      console.log(`⚡ ${cachedCount}/${uniqueUrls.length} bilder var redan cachade och laddades omedelbart!`);
    }
  }, [imageUrls]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const allImagesLoaded = totalCount > 0 && loadedCount === totalCount;
  const loadingProgress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 100;

  return {
    allImagesLoaded,
    loadingProgress,
  };
}

