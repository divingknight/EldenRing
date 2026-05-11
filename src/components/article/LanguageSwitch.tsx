"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitch() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const enPath = isZh ? pathname.replace(/^\/zh/, "") || "/" : pathname;
  const zhPath = isZh ? pathname : `/zh${pathname}`;

  return (
    <div className="flex items-center gap-1 text-sm border border-border rounded-lg overflow-hidden">
      <Link
        href={enPath}
        className={`px-3 py-1.5 transition-colors ${!isZh ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"}`}
      >
        EN
      </Link>
      <Link
        href={zhPath}
        className={`px-3 py-1.5 transition-colors ${isZh ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"}`}
      >
        中文
      </Link>
    </div>
  );
}
