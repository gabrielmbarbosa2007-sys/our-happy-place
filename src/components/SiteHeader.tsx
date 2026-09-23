import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Início", hash: "#inicio" },
  { label: "Etec", hash: "#etec" },
  { label: "Administração", hash: "#administracao" },
  { label: "2º ADM", hash: "#turma" },
  { label: "Projetos", hash: "#projetos" },
  { label: "Visite FP", hash: "#visite-fp" },
];

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = !(overHero && atTop);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          hash="inicio"
          className={`flex items-center gap-2 font-display text-lg font-extrabold tracking-tight ${
            scrolled ? "text-primary" : "text-foreground"
          }`}
        >
          <span className={`grid size-9 place-items-center rounded-xl text-sm ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary"
            }`}>
            FP
          </span>
          VISITE FP
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.hash}
              to="/"
              hash={link.hash.slice(1)}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:bg-primary-soft hover:text-primary"
                  : "text-foreground/80 hover:bg-primary-soft hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid size-11 place-items-center rounded-xl border transition-colors lg:hidden ${
            scrolled
              ? "border-border bg-card text-foreground hover:bg-primary-soft"
              : "border-border bg-card text-foreground hover:bg-primary-soft"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Navegação mobile"
          className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden"
        >
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  to="/"
                  hash={link.hash.slice(1)}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
