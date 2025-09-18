"use client";

import { useEffect } from "react";
import { disableContextMenu } from "@/lib/disable-context-menu";

export function DisableContextMenu() {
  useEffect(() => {
    const cleanup = disableContextMenu();
    return cleanup;
  }, []);

  return null;
}
