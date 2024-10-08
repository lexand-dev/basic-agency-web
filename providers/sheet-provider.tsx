"use client";
import Menu from "@/components/menu";
import { useEffect, useState } from "react";

const SheetProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Menu />;
};

export default SheetProvider;
