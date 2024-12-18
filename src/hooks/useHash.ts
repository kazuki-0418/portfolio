"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const useHash = () => {
  const [hash, setHash] = useState("");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange(); // Initial settings
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, searchParams]);

  return isClient ? hash : "";
};
