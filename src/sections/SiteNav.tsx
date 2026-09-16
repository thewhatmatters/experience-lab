import { Button, TextLink, cn } from "@whatmatters/wmds";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, product } from "../content";
import { scrollToSection } from "../lib/scrollToSection";

/** LOCAL PLACEHOLDER — marketing nav. Transparent over the hero, paper after scroll. */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-medium ease-standard",
        scrolled ? "bg-body/95 shadow-[0_1px_0_var(--color-border)]" : "bg-transparent",
      )}
    >
      <div className="grid-page" style={{ paddingBlock: 0 }}>
        <div className="band items-center py-3">
          <a
            href="#top"
            className={cn("type-heading-4 col-span-2 no-underline lg:col-span-3", scrolled ? "text-fg" : "text-white")}
          >
            {product.name}
          </a>
          <nav
            className="col-span-2 hidden items-center justify-center gap-5 md:flex lg:col-span-6"
            aria-label="Sections"
          >
            {nav.slice(0, 5).map((item) => (
              <TextLink key={item.href} href={item.href} className={scrolled ? undefined : "text-white"}>
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
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
