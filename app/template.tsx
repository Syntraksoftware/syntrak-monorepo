"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // On initial page load/refresh, scroll to top instantly
    if (isInitialMount.current) {
      // Use direct assignment for instant scroll (more compatible)
      window.scrollTo(0, 0);
      isInitialMount.current = false;
    } else {
      // On route change, smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className={`page-transition ${isLoading ? "loading" : "loaded"}`}>
      {children}
    </div>
  );
}

