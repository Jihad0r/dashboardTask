"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Protected({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setAllowed(true);
    }
  }, [isAuthenticated, router]);

  if (!allowed) {
    return null; // or show a spinner
  }

  return children;
}
