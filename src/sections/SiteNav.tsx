import { Button, TextLink } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { nav, product } from "../content";
import { scrollToSection } from "../lib/scrollToSection";

/** LOCAL PLACEHOLDER — sticky marketing nav. WMDS PageHeader is app chrome, not a site header. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-body/80 backdrop-blur-md">
      <div className="grid-page" style={{ paddingBlock: 0 }}>
        <div className="band items-center py-3">
          <a href="#top" className="type-heading-4 col-span-2 text-fg no-underline lg:col-span-3">
            {product.name}
          </a>
          <nav className="col-span-2 hidden items-center justify-end gap-4 md:flex lg:col-span-6" aria-label="Sections">
            {nav.slice(0, 4).map((item) => (
              <TextLink key={item.href} href={item.href}>
                {item.label}
              </TextLink>
            ))}
          </nav>
          <div className="col-span-2 flex justify-end md:col-span-4 lg:col-span-3">
            <Button
              role="primary"
              size="sm"
              icon={<ArrowUpRight strokeWidth={2} />}
              onClick={() => scrollToSection("connect")}
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
