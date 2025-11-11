"use client";

import { useState, useEffect, useCallback } from "react";

interface UseImagePreloaderResult {
  allImagesLoaded: boolean;
  loadingProgress: number;
}

/**
 * Hook för att preloada bilder och spåra deras laddningsstatus
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

    uniqueUrls.forEach((url) => {
      const img = new Image();

      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };

      img.onerror = () => {
        console.warn(`⚠️ Kunde inte ladda bild: ${url}`);
        // Räkna fortfarande som "laddad" för att inte blockera användaren
        loaded++;
        setLoadedCount(loaded);
      };

      // Starta laddning
      img.src = url;
    });
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

