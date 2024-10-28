"use client";

import { useEffect, useCallback, useMemo, useRef } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

// Separate and manage constants
const BREAKPOINTS = {
  MOBILE: "(max-width: 768px)",
  DESKTOP: "(min-width: 1200px)",
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;
type MediaQueryState = Record<Lowercase<BreakpointKey>, boolean>;

// State Definitions for Recoil
const mediaQueryState = atom<MediaQueryState>({
  key: "mediaQueryState",
  default: {
    mobile: false,
    desktop: false,
  },
});

// Custom hooks to monitor media queries (optimized version)
const useMediaQuery = (query: string, callback: (matches: boolean) => void) => {
  // ref to refer to the latest callback
  const callbackRef = useRef(callback);

  // Update callbacks
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Memorized event handler
  const handler = useCallback((e: MediaQueryListEvent) => {
    callbackRef.current(e.matches);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(query);

    // Initial Settings
    if (mql.matches !== undefined) {
      callbackRef.current(mql.matches);
    }

    // Registering an event listener
    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query, handler]);
};

// Custom hooks to handle media query updates in bulk
const useMediaQueries = () => {
  const setMediaQueryState = useSetRecoilState(mediaQueryState);

  // Memorize state update function
  const updateState = useCallback(
    (key: Lowercase<BreakpointKey>, matches: boolean) => {
      setMediaQueryState((prev) => {
        // return a new object only if the value has changed
        if (prev[key] === matches) return prev;
        return { ...prev, [key]: matches };
      });
    },
    [setMediaQueryState]
  );

  // Memorized callback function
  const mobileCallback = useCallback(
    (matches: boolean) => {
      updateState("mobile", matches);
    },
    [updateState]
  );

  const desktopCallback = useCallback(
    (matches: boolean) => {
      updateState("desktop", matches);
    },
    [updateState]
  );

  return { mobileCallback, desktopCallback };
};

interface MediaQueryProviderProps {
  children: React.ReactNode;
}

export const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  // Get callback function
  const { mobileCallback, desktopCallback } = useMediaQueries();

  // Memorized breakpoints
  const mobileQuery = useMemo(() => BREAKPOINTS.MOBILE, []);
  const desktopQuery = useMemo(() => BREAKPOINTS.DESKTOP, []);

  // Set up media query monitoring
  useMediaQuery(mobileQuery, mobileCallback);
  useMediaQuery(desktopQuery, desktopCallback);

  return children;
};

// Optimized custom hooks
export const useIsMobile = () => {
  const state = useRecoilValue(mediaQueryState);
  return state.mobile;
};

export const useIsDesktop = () => {
  const state = useRecoilValue(mediaQueryState);
  return state.desktop;
};
