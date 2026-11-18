"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2500);
  }

  return (
    <Button variant="ghost" size="lg" className="h-12 px-4 text-base text-muted-foreground" onClick={copy}>
      {state === "copied" ? <Check aria-hidden /> : <Copy aria-hidden />}
      <span aria-live="polite">
        {state === "copied" ? "Copied!" : state === "failed" ? email : "Copy email address"}
      </span>
    </Button>
  );
}
