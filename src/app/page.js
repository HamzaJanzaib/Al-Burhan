/**
 * Root redirect page — needed for static export (output: 'export')
 * since middleware cannot run in static mode.
 * This replaces the middleware locale redirect for the static build.
 */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return null;
}
