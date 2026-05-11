import Link from "next/link";
import { SITE_NAME, guideCategories } from "@/lib/guides";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎮</span>
              <span className="text-lg font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate resource for game guides, walkthroughs, and strategies.
            </p>
          </div>

          {/* Guide Links */}
          <div>
            <h3 className="font-semibold mb-3">Guides</h3>
            <ul className="space-y-2">
              {guideCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/guides/${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Contact: contact@yourdomain.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Not affiliated with the game developers.
        </div>
      </div>
    </footer>
  );
}
