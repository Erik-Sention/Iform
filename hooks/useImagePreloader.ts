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
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);
  const loadedRef = useRef(0);

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
    loadedRef.current = 0;

    let loaded = 0;
    let cachedCount = 0;

    uniqueUrls.forEach((url) => {
      const img = new Image();

      // Sätt upp event listeners innan vi sätter src
      img.onload = () => {
        loaded++;
        loadedRef.current = loaded;
        setLoadedCount(loaded);
        
        // Rensa fallback timer om alla bilder är klara
        if (loaded === uniqueUrls.length && fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      };

      img.onerror = () => {
        console.warn(`⚠️ Kunde inte ladda bild: ${url}`);
        // Räkna fortfarande som "laddad" för att inte blockera användaren
        loaded++;
        loadedRef.current = loaded;
        setLoadedCount(loaded);
        
        // Rensa fallback timer om alla bilder är klara
        if (loaded === uniqueUrls.length && fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      };

      // Starta laddning
      img.src = url;

      // ⚡ OPTIMERING 1: Cache-detection
      // Kolla om bilden redan är laddad (t.ex. via Next.js <Image>)
      // Detta måste ske EFTER att vi satt src!
      if (img.complete && img.naturalWidth > 0) {
        // Bilden är redan cachad! Räkna den direkt
        cachedCount++;
        loaded++;
        loadedRef.current = loaded;
        setLoadedCount(loaded);
      }
    });

    // ⚡ OPTIMERING 2: Fallback-timer (2 sekunder)
    // Om bilderna tar "för länge" → anta att de redan är laddade
    // Användaren ser ju redan bilderna i UI:t via Next.js <Image>!
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
    }
    
    fallbackTimerRef.current = setTimeout(() => {
      if (loadedRef.current < uniqueUrls.length) {
        console.log(`⚡ Bilder antas redan vara laddade (via cache/Next.js). Laddade: ${loadedRef.current}/${uniqueUrls.length}`);
        setLoadedCount(uniqueUrls.length);
      }
      fallbackTimerRef.current = null;
    }, 2000);

    if (cachedCount > 0) {
      console.log(`⚡ ${cachedCount}/${uniqueUrls.length} bilder var redan cachade!`);
    }
  }, [imageUrls]);

  useEffect(() => {
    preloadImages();

    // ⚡ OPTIMERING 3: Proper cleanup
    // Rensa timers när komponenten unmountar
    return () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [preloadImages]);

  const allImagesLoaded = totalCount > 0 && loadedCount === totalCount;
  const loadingProgress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 100;

  return {
    allImagesLoaded,
    loadingProgress,
  };
}

